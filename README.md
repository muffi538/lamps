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
npm run typecheck    # tsc --noEmit
npm run lint
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

The source PDF is 18 full-page marketing posters with headlines and feature
icons baked into the artwork, so images could not be used as supplied. Each
product shot was isolated from its page with a crop manifest, keeping the
original proportions — nothing is stretched or squashed. Where a crop is not
4:5, the frame is completed with a soft blurred extension of the same photograph
rather than by cropping into the product.

All product frames are 4:5 and rendered with `object-contain`, so proportions
are preserved while the grid stays aligned. Images are served through
`next/image` as AVIF/WebP with explicit `sizes`.

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
