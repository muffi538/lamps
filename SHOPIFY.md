# Shopify integration guide

The storefront ships in **catalogue mode**: products come from
`src/lib/catalog/`, extracted from the supplied PDF. Setting two environment
variables switches it to **live mode** against the Shopify Storefront API —
no component, layout or styling changes.

---

## How the switch works

```
page / component
        │
        ▼
src/lib/commerce.ts          ← the only data entry point in the whole app
        │
        ├── isShopifyEnabled === false  →  src/lib/catalog/      (PDF data)
        └── isShopifyEnabled === true   →  src/lib/shopify/      (Storefront API)
                                               │
                                               └── on error → falls back to catalogue
```

`isShopifyEnabled` is simply
`Boolean(NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN && NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN)`.

Live Shopify products are passed through `normalizeProduct()` so they arrive in
exactly the same shape as the catalogue products. Every component keeps working.

If a Storefront request fails in production, `commerce.ts` logs it and serves the
local catalogue instead, so an API incident degrades to a static storefront
rather than an empty one.

---

## Step 1 — Create the custom app

Shopify admin → **Settings → Apps and sales channels → Develop apps →
Create an app**.

Under **Configuration → Storefront API**, enable:

- `unauthenticated_read_product_listings`
- `unauthenticated_read_product_inventory`
- `unauthenticated_read_product_tags`
- `unauthenticated_write_checkouts`
- `unauthenticated_read_checkouts`

Install the app, then copy the **Storefront API access token** from
**API credentials**.

> The Storefront token is designed to be public and read-only. The Admin API
> token is not — keep it out of any `NEXT_PUBLIC_` variable.

---

## Step 2 — Set the environment variables

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SHOPIFY_API_VERSION=2025-01
```

Locally in `.env.local`; in production under *Vercel → Settings →
Environment Variables*. Redeploy to apply.

---

## Step 3 — Create the products

Create 21 products whose **handle** matches the `handle` field in
`src/lib/catalog/*.ts` exactly — that is what the product URLs are built from,
so matching handles means no redirects and no broken links.

For each product set:

| Shopify field | Maps to |
|---|---|
| Handle | `Product.handle` — must match |
| Title | `Product.title` |
| Product type | `Aroma Diffuser`, `Humidifier` or `Living & Desk` |
| Tags | `diffusers`, `living` — drives collection membership |
| Description | Product page body copy (paragraphs split on blank lines) |
| Media | Upload the images from `public/products/<handle>/`, `main.jpg` first |
| Variants | Option name and values as in the catalogue file |
| Variant SKU | Your real article number |
| Price | The one field with no source data today |

Option names already in use: **Finish** (Walnut / Oak), **Colour**
(Black / Amber, and Black / White / Pink). Keep the spelling identical so
variant matching works.

### Collections

Create two collections with handles `diffusers` and `living`. Smart
collections on the matching product tag are the simplest route.

Collection hero imagery and straplines stay curated in
`src/lib/catalog/collections.ts` even in live mode, so the storefront keeps its
editorial voice rather than inheriting Shopify's collection description.

---

## Step 4 — Editorial metafields (optional)

The product page renders features, specifications, usage and care from the
catalogue file. To manage that content in Shopify instead, create these
definitions under **Settings → Custom data → Products**, namespace `custom`:

| Key | Type | Content |
|---|---|---|
| `subtitle` | Single line text | One-line introduction under the product title |
| `tagline` | Single line text | The italic positioning line |
| `features` | JSON | `[{ "title": "...", "body": "..." }]` |
| `specs` | JSON | `[{ "label": "...", "value": "..." \| null }]` |
| `dimensions` | JSON | same shape as `specs` |
| `materials` | JSON | same shape as `specs` |
| `in_the_box` | JSON | `["item", "item", null]` — `null` renders the “to be confirmed” chip |
| `usage` | JSON | `["step", "step"]` |
| `care` | JSON | `["point", "point"]` |

Then add the metafields to the `ProductFields` fragment in
`src/lib/shopify/queries.ts` and pass the parsed values as the second argument
to `normalizeProduct()` — the parameter is already there for this purpose.

Until you do, live mode renders Shopify's own title, description, images,
variants, prices and inventory, and simply omits the editorial sections.

---

## Step 5 — Cart and checkout

The bag lives in the browser (`localStorage`, key `elume.cart.v1`), which keeps
every add-to-cart instant and works identically offline and in catalogue mode.

Pressing **Checkout** calls the `startCheckout` server action
(`src/app/actions/checkout.ts`), which runs a `cartCreate` mutation against the
Storefront API and redirects to the returned `checkoutUrl`.

That means:

- Card data, UPI, wallets, taxes, discount codes, order confirmation emails and
  fraud analysis are all handled by Shopify's PCI-DSS compliant checkout.
- This application never sees a payment credential.
- Before credentials are configured, the button explains that checkout goes live
  once Shopify is connected, rather than failing silently.

To migrate an abandoned bag into a Shopify cart on every change instead of only
at checkout, swap `cartCreate` for a persisted `cartId` cookie plus
`cartLinesAdd` / `cartLinesUpdate` / `cartLinesRemove` — all four mutations are
already written in `src/lib/shopify/queries.ts`.

---

## Step 6 — Keeping the storefront fresh

Product reads are cached for five minutes and tagged `products`,
`product:<handle>` and `collection:<handle>`.

For instant updates, add a Shopify webhook (**Settings → Notifications →
Webhooks**) for `products/update` and `inventory_levels/update` pointing at:

```
https://your-domain.com/api/revalidate?secret=REVALIDATION_SECRET&tag=products
```

Set `REVALIDATION_SECRET` in Vercel to the same value. The route returns 401 on
a bad secret and 503 if the secret has not been configured.

---

## Pricing

While `price` is `null` everywhere the UI shows *“Price on request”*, the cart
subtotal reads *“Confirmed at checkout”*, and `schema.org` offers omit the
`price` property rather than publishing a fake one.

Two ways to turn pricing on:

- **Catalogue mode** — set `price` on each product and each variant in
  `src/lib/catalog/*.ts`.
- **Live mode** — prices come from Shopify automatically.

The currency is `INR`, set in `src/config/site.ts`, and formatted with
`Intl.NumberFormat('en-IN')`.

---

## Verifying the switch

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com \
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=xxxx \
npm run dev
```

- `/shop` should list your Shopify products.
- A product page should show Shopify prices and real stock status.
- **Checkout** should redirect to `your-store.myshopify.com/cart/c/…`.
- Stop the Shopify app or use a bad token: the storefront should keep rendering
  from the local catalogue and log `[commerce] Shopify request failed`.
