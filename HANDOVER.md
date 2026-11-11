# Handover — Élume storefront

Everything you asked for before sign-off, in one file:
the **SKU list**, the **missing product information**, the **Shopify integration
requirements**, the **environment variables**, and the **deployment steps**.

Companion documents: [`README.md`](./README.md) (how the code is organised and
how to run it) and [`SHOPIFY.md`](./SHOPIFY.md) (the full Shopify wiring guide).

---

## 1. What was built

A custom Next.js 15 storefront — not a Shopify theme — with:

| | |
|---|---|
| Pages | Home, Diffusers (all 7 SKUs, filter + sort), **7 individual product pages**, Our Story, Contact, Search, 4 policy pages, 404 |
| Product data | Extracted from your PDF catalogue into a typed, central data structure (`src/lib/catalog/`) |
| Imagery | **33 product images + 5 editorial images**, one folder per product, gallery built automatically from the folder |
| Commerce | Add to cart, quick add, remove, quantity controls, cart drawer, subtotal, persistent bag, checkout hand-off |
| Shopify | Storefront API client, queries, normaliser and checkout action written and wired — dormant until credentials are set |
| Build | 22 statically prerendered routes, ~103 kB shared JS, zero console errors |

### Collections

| Collection | SKUs | Route |
|---|---|---|
| Diffusers | 7 | `/collections/diffusers` |

> **The store is now diffusers only, at your request.** Removed along the way:
> the **Lamps** collection and the Floating Wireless Charging Lamp (PDF p.5);
> the **Flame Diffuser** (p.14); the **Flame Aromatherapy Diffuser** (p.2); the
> **Charcoal Diffuser** (p.10); and the whole **Living & Desk** collection —
> ten SKUs covering the wireless chargers, wooden clocks, laptop stand,
> cleaning kit and neck massager.
>
> The **Rain Aroma Diffuser** (p.11) has since gone too, taking the catalogue
> from the 22 SKUs in the supplied PDF down to 7.
> Every deletion is in git history, so any of them can be restored.
>
> With one collection left there is no separate shop page: `/shop` now issues
> a permanent redirect to `/collections/diffusers`, so old links keep working
> and the listing has one canonical URL. The navigation is Home, Diffusers,
> Our Story.

### Adding a product later

The storefront reads each product's gallery straight from its own folder, so
adding one is three steps and no image paths are ever typed by hand:

1. Create `public/products/<handle>/` and drop the images in, named
   `<NN>-<role>[-<description>].jpg` — `01-main.jpg` first, then `angle`,
   `detail`, `colour`, `lifestyle` or `packaging` shots in display order.
2. Add the product record to `src/lib/catalog/` using the same handle.
3. Run `npm run build`. The image manifest regenerates and the build fails
   loudly if anything is misnamed or missing.

There is no limit on products or on images per product, and because the lookup
is by handle into that product's own folder, images can never appear on the
wrong product. Full detail in [`README.md`](./README.md#product-imagery).

---

## 2. Complete SKU list — 7 products, 11 variants

SKU codes are **provisional**, generated for this build. Replace them with your
real article numbers in `src/lib/catalog/*.ts`, then use the same codes in
Shopify so the two systems line up.

| # | SKU | Product | Type | Collection | Variants | PDF page | Images |
|---|---|---|---|---|---|---|---|
| 1 | `JL-DIF-JELLYFISH` | [Jellyfish Aroma Diffuser](/products/jellyfish-aroma-diffuser) | Aroma Diffuser | Diffusers | single | 3 | 3 |
| 2 | `JL-DIF-ANTIGRAV` | [Anti Gravity Diffuser](/products/anti-gravity-diffuser) | Aroma Diffuser | Diffusers | single | 3 | 3 |
| 3 | `JL-DIF-WOOD-WAL` | [Wood Grain Aroma Diffuser](/products/wood-grain-aroma-diffuser) | Aroma Diffuser | Diffusers | Walnut / Oak | 7 | 5 |
| 4 | `JL-DIF-CANDLE` | [Candlelight Style Electric Diffuser](/products/candlelight-style-electric-diffuser) | Aroma Diffuser | Diffusers | single | 13 | 5 |
| 5 | `JL-DIF-BIRD-BLK` | [Bird Diffuser](/products/bird-diffuser) | Aroma Diffuser | Diffusers | Black / Amber | 14 | 6 |
| 6 | `JL-HUM-H2O-BLK` | [H2O LED Humidifier](/products/h2o-led-humidifier) | Humidifier | Diffusers | Black / White / Pink | 15 | 8 |
| 7 | `JL-DIF-RAINDROP` | [Raindrop Aroma Diffuser](/products/raindrop-aroma-diffuser) | Aroma Diffuser | Diffusers | single | 16 | 3 |

Three products carry genuine colour variants taken from the catalogue
photography: **Wood Grain Aroma Diffuser** (Walnut / Oak), **Bird Diffuser**
(Black / Amber) and **H2O LED Humidifier** (Black / White / Pink). Selecting a
variant swaps the gallery image. No other product was given invented variants.

---

## 3. Missing product information

The storefront never invents a specification. Where the catalogue is silent the
product page prints a dashed **“To be confirmed”** chip, which is honest to the
customer and visible to you. There are **107 such fields across the 7 SKUs**.

### Needed for every product (the fastest wins)

1. **Price** — the single biggest gap. Every product currently shows
   *“Price on request”*. Set `price:` on the product and on each variant in
   `src/lib/catalog/*.ts` and the whole store — cards, product pages, cart
   subtotal, structured data — turns on at once.
2. **Dimensions and net weight** — missing for all 7 SKUs. The only product in the
   supplied PDF with published measurements, the 20-in-1 Cleaning Kit, is no
   longer in the catalogue.
3. **Tank capacity, mist output, run time and timer settings** — missing for
   every diffuser and humidifier. These are the questions customers ask first.
4. **Power source, input voltage and rated power** — missing across the range.
5. **Model / article number, country of origin and warranty** — missing for all
   7 SKUs.
6. **Full pack contents** — only the Raindrop Aroma Diffuser states what is in
   the box.

### Per-product detail

### Jellyfish Aroma Diffuser  <sub>(PDF p.3 · `JL-DIF-JELLYFISH`)</sub>

- Tank capacity
- Mist output
- Run time
- Timer settings
- Power source
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Diameter
- Net weight
- Packed dimensions
- Finish
- Full pack contents

### Anti Gravity Diffuser  <sub>(PDF p.3 · `JL-DIF-ANTIGRAV`)</sub>

- Essential oil compatible
- Tank capacity
- Run time
- Controls
- Power source
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Base diameter
- Net weight
- Packed dimensions
- Finish
- Full pack contents

### Wood Grain Aroma Diffuser  <sub>(PDF p.7 · `JL-DIF-WOOD-WAL`)</sub>

- Tank capacity
- Mist output
- Run time
- Light modes
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Diameter
- Net weight
- Packed dimensions
- Substrate
- Full pack contents

### Candlelight Style Electric Diffuser  <sub>(PDF p.13 · `JL-DIF-CANDLE`)</sub>

- Tank capacity
- Mist output
- Run time
- Timer settings
- Power source
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Diameter
- Net weight
- Packed dimensions
- Finish
- Full pack contents

### Bird Diffuser  <sub>(PDF p.14 · `JL-DIF-BIRD-BLK`)</sub>

- Tank capacity
- Mist output
- Run time
- Controls
- Power source
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Diameter
- Net weight
- Packed dimensions
- Finish
- Full pack contents

### H2O LED Humidifier  <sub>(PDF p.15 · `JL-HUM-H2O-BLK`)</sub>

- Tank capacity
- Mist output
- Run time
- Controls
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Diameter
- Net weight
- Packed dimensions
- Finish
- Full pack contents

### Raindrop Aroma Diffuser  <sub>(PDF p.16 · `JL-DIF-RAINDROP`)</sub>

- Tank capacity
- Run time
- Timer settings
- Input voltage
- Rated power
- Model / article number
- Country of origin
- Warranty
- Height
- Width
- Depth
- Net weight
- Finish

### Two things to check before launch

- **Neck Pillow Massager (p.18).** The icon strip at the foot of that catalogue
  page lists *wireless charging, alarm clock, temperature display and clear LED
  display* — features that belong to the wooden clock products, not to a neck
  pillow. They look like a layout error in the source file, so they were **not**
  attributed to the product. Confirm what the massager actually does.
- **Flame Aromatherapy Diffuser (p.2).** The page shows the flame in amber, blue
  and violet. It is not stated whether these are three selectable light modes on
  one unit or three separate products. It is listed as one SKU with the colours
  described as light effects. Confirm.

### Also needed, outside the product data

- Real brand name. `Élume` is a clearly-marked placeholder — change
  `brand.name` and `brand.wordmark` in `src/config/site.ts` and it propagates
  everywhere (titles, metadata, footer, 404).
- Social handles — currently `#` placeholders in the same file.
- Policy decisions: processing time, delivery areas and charges, return window,
  who pays return postage, retention period, governing law. Every one of these
  is marked in a dashed rule on the policy pages and in `src/lib/policies.ts`.
- Newsletter destination — the form validates and confirms locally; point
  `onSubmit` in `src/components/site/Newsletter.tsx` at your email platform.
- Higher-resolution product photography when you have it. The images here were
  cropped from the PDF, which is as good as that source allows; the crops are
  defined in a single manifest so they can be swapped file-for-file.

---

## 4. Shopify integration requirements

Full step-by-step instructions are in **[`SHOPIFY.md`](./SHOPIFY.md)**. In short:

1. **A Shopify plan** that includes the Storefront API (Basic and above).
2. **A custom app** in Shopify admin → *Settings → Apps and sales channels →
   Develop apps*, with these **Storefront API** scopes:
   `unauthenticated_read_product_listings`,
   `unauthenticated_read_product_inventory`,
   `unauthenticated_read_product_tags`,
   `unauthenticated_write_checkouts`,
   `unauthenticated_read_checkouts`.
3. **7 products created in Shopify** with handles matching the `handle` field
   in the catalogue files, variants matching the options above, and tags
   `diffusers` / `living` to drive collection membership.
4. **One Shopify collection** with the handle `diffusers`.
5. **Metafields** (namespace `custom`) if you want the editorial sections —
   features, specifications, usage, care — managed in Shopify rather than in
   code. Definitions are listed in `SHOPIFY.md`.
6. **Payments, shipping zones and taxes** configured in Shopify admin; the
   checkout is Shopify-hosted, so card data never touches this application.
7. **Policies** published in Shopify admin → *Settings → Policies*. Keep them in
   sync with `src/lib/policies.ts`.
8. *(Optional)* **Webhooks** for `products/update` and
   `inventory_levels/update` pointed at `/api/revalidate` so stock and price
   changes refresh without a redeploy.

Nothing in the application needs redesigning for any of this. Every page reads
through `src/lib/commerce.ts`, which switches source the moment the two public
environment variables are present, and falls back to the local catalogue if a
Shopify request ever fails.

---

## 5. Environment variables

Copy `.env.example` to `.env.local` for development, and add the same keys in
Vercel under *Project → Settings → Environment Variables*.

| Variable | Required | Exposed to browser | What it is |
|---|---|---|---|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | to go live | yes | `your-store.myshopify.com`, no protocol |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | to go live | yes | Storefront API access token — public by design, read-only |
| `NEXT_PUBLIC_SHOPIFY_API_VERSION` | no | yes | Defaults to `2025-01`; bump roughly quarterly |
| `NEXT_PUBLIC_SITE_URL` | yes | yes | Canonical URL. Drives metadata, `sitemap.xml`, `robots.txt` and structured data |
| `NEXT_PUBLIC_PRICING_MODE` | no | yes | `placeholder` (default) or `live` |
| `SHOPIFY_ADMIN_API_TOKEN` | no | **no** | Only if you later add catalogue-sync or order-lookup jobs |
| `SHOPIFY_WEBHOOK_SECRET` | no | **no** | Verifies incoming Shopify webhooks |
| `REVALIDATION_SECRET` | no | **no** | Guards `/api/revalidate` |

**Security.** Only the `NEXT_PUBLIC_` keys reach the browser, and the only
Shopify credential among them is the Storefront token, which Shopify issues as a
public, read-only credential. The Admin token and the two secrets have no
`NEXT_PUBLIC_` prefix, are never imported into a client component, and the
Storefront client itself is marked `server-only` so a stray import fails the
build rather than leaking at runtime. Never commit `.env.local`; it is
gitignored.

---

## 6. Deployment to Vercel

### First deploy

1. Push this branch to GitHub.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset **Next.js**; build command, output directory and install
   command are all detected — leave the defaults.
4. Add the environment variables from section 5. At minimum set
   `NEXT_PUBLIC_SITE_URL` to your production URL.
5. **Deploy.**

### Connecting your domain

*Project → Settings → Domains → Add*, then point your DNS at Vercel
(an `A` record to `76.76.21.21`, or a `CNAME` to `cname.vercel-dns.com`).
Update `NEXT_PUBLIC_SITE_URL` to match and redeploy so canonicals, the sitemap
and the product structured data all use the live host.

### Going live with Shopify

1. Add `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` and
   `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` in Vercel.
2. Redeploy. The storefront switches to live products, prices and inventory;
   the Checkout button starts creating real Shopify carts.
3. Place a test order with Shopify's test payment gateway before announcing.

### Keeping content fresh

Product reads are cached for 5 minutes (`revalidate: 300`) and tagged. For
instant updates, add the webhook described in `SHOPIFY.md` so Shopify purges the
cache when a product or stock level changes.

### Local commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint
```
