# Élume — premium lamps & diffusers storefront

A custom Next.js storefront for a home-lifestyle brand selling lamps and aroma
diffusers, built from the J L Industries Hub Pvt Ltd product catalogue and
structured so Shopify can be switched on without redesigning anything.

**Start here:** [`HANDOVER.md`](./HANDOVER.md) — SKU list, missing product
information, Shopify requirements, environment variables and deployment.
Then [`SHOPIFY.md`](./SHOPIFY.md) for the integration detail.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

No environment variables are needed to run the site: with Shopify unconfigured
it serves the catalogue extracted from the PDF.

```bash
npm run build        # production build (41 prerendered routes)
npm run start        # serve the production build
npm run typecheck      # tsc --noEmit
npm run lint
npm run images:manifest  # rescan public/products (runs on dev and build)
```

---

## Stack

Next.js 15 (App Router, React 19) · TypeScript (strict) · Tailwind CSS ·
Framer Motion · Shopify Storefront API · Vercel.

---

## Project layout

```
public/
  products/<handle>/*.jpg     81 product images cropped from the PDF
  editorial/*.jpg             8 hero / lifestyle images

scripts/
  build-image-manifest.mjs    scans public/products, emits the typed manifest

src/
  app/
    layout.tsx                fonts, metadata, header, footer, cart provider
    page.tsx                  homepage
    shop/                     all products with filter + sort
    collections/[handle]/     lamps · diffusers · living
    products/[handle]/        one page per SKU, statically generated
    our-story/  contact/  search/  policies/[slug]/
    actions/checkout.ts       server action → Shopify hosted checkout
    api/search/               search endpoint used by the header panel
    api/revalidate/           webhook target for on-demand cache purge
    sitemap.ts  robots.ts  not-found.tsx

  components/
    site/      Header, SearchPanel, Footer, Newsletter, CollectionTile, Icons
    product/   ProductCard, ProductGrid, Gallery, ProductTop, QuickAdd,
               QuantityStepper, Accordion, SpecTable
    cart/      CartProvider, CartDrawer
    collection/ShopBrowser
    ui/        Container, Reveal, Price

  lib/
    catalog/   ← the product data: types, lamps, diffusers, living, collections
               images.ts resolves each product's gallery from its own folder
               product-images.generated.ts is generated — do not edit
    shopify/   client, queries, types, normalize (server-only)
    commerce.ts  the single data entry point every page reads through
    policies.ts  money.ts  utils.ts

  config/site.ts   brand name, contact details, navigation, currency
```

### The two rules worth knowing

1. **Pages never import the catalogue or Shopify directly.** They read through
   `src/lib/commerce.ts`, which picks the source. That is what makes the Shopify
   switch a configuration change rather than a rewrite.
2. **Nothing is invented.** Any specification the PDF does not state is `null`
   in the data and renders as a visible *“To be confirmed”* chip. There are no
   fabricated reviews, ratings, testimonials, certifications or prices anywhere
   in the project.

---

## Design system

Defined once in `tailwind.config.ts` and `src/app/globals.css`.

| Token | Value |
|---|---|
| Primary background | `#FFFFFF` (`canvas`) |
| Secondary background | `#F8F7F4` (`shell`) |
| Text | `#171717` (`ink`) |
| Secondary text | `#777777` (`muted`) |
| Borders | `#EAE8E4` (`line`) |
| Accent | `#A89683` (muted taupe) |

Type is **Manrope** for display and body, **Inter** for interface labels, both
self-hosted through `next/font`. The scale lives in `globals.css` as
`.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-lead`, `.t-body`, `.t-eyebrow`,
`.t-meta` — use those rather than ad-hoc sizes so hierarchy stays consistent.

Motion is deliberately restrained: 14 px reveals over 700 ms, 900 ms image
cross-fades, a single easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`), and
everything is disabled under `prefers-reduced-motion`.

---

## Product imagery

### The folder is the source of truth

```
public/products/<product-handle>/
  01-main.jpg                   <- required, the hero and the card image
  02-angle-three-quarter.jpg
  03-detail-control.jpg
  04-colour-walnut.jpg
  05-lifestyle-bedside.jpg
  06-packaging-in-the-box.jpg
```

Filenames follow `<NN>-<role>[-<description>].<ext>`:

| part | meaning |
|---|---|
| `NN` | two-digit display order; `01` is the hero |
| `role` | `main`, `angle`, `detail`, `colour`, `lifestyle` or `packaging` |
| `description` | optional; becomes the fallback caption and alt text |

A product's gallery is **exactly the contents of its own folder**, looked up by
handle, so images can never leak between products.

### Adding a product

1. Create `public/products/<handle>/` and drop the images in, named as above.
2. Add the product record to `src/lib/catalog/` — the same handle, no image
   paths. Optionally add `imageDetails` to supply hand-written alt text and
   captions, keyed by filename without the extension.
3. Run `npm run dev` or `npm run build`. The manifest regenerates
   automatically (`npm run images:manifest` runs it on its own).

That's it — unlimited images per product, unlimited products. A product whose
folder is correctly named renders a full gallery with no `imageDetails` at all;
the overlay only exists to improve the copy.

`scripts/build-image-manifest.mjs` scans the folders, records each image's real
width, height and a tiny inline blur placeholder, and **fails the build** if a
folder is empty, a filename doesn't match the convention, two images claim the
same order, or `01-main` is missing. `resolveProductImages()` additionally
throws if `imageDetails` names a file that isn't on disk, so a typo or a
deleted image surfaces at build time rather than as a broken page.

### How images are framed

Images are used at **whatever aspect ratio they are**. Nothing pads, stretches
or crops them, so the file on disk is exactly what a customer sees:

- **Product page** — the stage takes the active image's own aspect ratio, with
  the height capped at 78vh so a very tall photograph cannot take over the
  page. Switching thumbnails cross-fades and the frame follows.
- **Product cards** — a shared 4:5 frame with `object-contain` on the page
  background, which keeps the grid aligned without altering any image.
- **Thumbnails** — small square crops, purely navigational.

Everything is served through `next/image` as AVIF/WebP with explicit `sizes`
and a blur placeholder.

---

## Accessibility

Semantic landmarks and heading order, a skip link, visible focus rings,
`aria-current` on active navigation, labelled form controls, `aria-live` on
search results and cart confirmations, keyboard-operable gallery and lightbox
(Escape, arrow keys), Escape-to-close and scroll-lock on every overlay, and full
`prefers-reduced-motion` support.

---

## SEO

Per-page metadata and canonicals, OpenGraph and Twitter cards, `Product` and
`BreadcrumbList` JSON-LD on every product page (prices omitted rather than faked
while pricing is pending), a generated `sitemap.xml` covering all 41 routes, and
`robots.txt`.

---

## Licence and content

Product photography and specifications are the property of
**J L Industries Hub Pvt Ltd**. `Élume` is a placeholder retail brand name —
see `src/config/site.ts`.
