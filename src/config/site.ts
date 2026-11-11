/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Everything brand-level lives here so it can be changed in one place.
 *
 *  ⚠️ PLACEHOLDER: `brand.name` / `brand.wordmark` are a working storefront name.
 *     The legal entity behind the catalogue is J L Industries Hub Pvt Ltd.
 *     Replace the two fields below with your final retail brand and the whole
 *     site — titles, metadata, footer, emails — follows automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  brand: {
    name: 'Élume',
    wordmark: 'ÉLUME',
    legalEntity: 'J L Industries Hub Pvt Ltd',
    tagline: 'Scent and atmosphere for the considered home',
    description:
      'Aroma diffusers for the considered home — designed around warmth, quiet and the atmosphere of everyday living.',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  contact: {
    // Taken from the supplied catalogue cover page.
    email: 'jlindustrieshub@gmail.com',
    phone: '+91 98910 01961',
    addressLines: ['E2/253, 3rd Floor', 'Near ICICI Bank, Shastri Nagar', 'New Delhi 110052', 'India'],
  },
  social: [
    // PLACEHOLDER — replace with your real handles, or delete the entries.
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Diffusers', href: '/collections/diffusers' },
    { label: 'Our Story', href: '/our-story' },
  ],
  currency: 'INR',
  /**
   * While `pricingMode` is 'placeholder' the storefront shows "Price on request"
   * everywhere instead of inventing figures, and the checkout button explains
   * that Shopify is not connected yet. Set each product's `price` in
   * src/lib/catalog/* and flip this to 'live' to switch the whole store on.
   */
  pricingMode: (process.env.NEXT_PUBLIC_PRICING_MODE ?? 'placeholder') as 'placeholder' | 'live',
} as const;

export type Site = typeof site;
