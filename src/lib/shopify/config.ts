/**
 * Shopify Storefront API configuration.
 *
 * The storefront runs in one of two modes:
 *
 *  • CATALOGUE MODE (default) — products come from src/lib/catalog. Nothing in
 *    this folder is called. This is what you get with no environment set.
 *
 *  • LIVE MODE — set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and
 *    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN and every data read in
 *    src/lib/commerce.ts transparently switches to Shopify.
 *
 * The Storefront API token is a *public* token by design; Shopify scopes it to
 * read-only storefront operations. Admin tokens and webhook secrets must never
 * carry the NEXT_PUBLIC_ prefix and are never imported into client components.
 */
export const shopifyConfig = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? '',
  token: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? '',
  apiVersion: process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION ?? '2025-01',
};

export const isShopifyEnabled: boolean = Boolean(shopifyConfig.domain && shopifyConfig.token);

export function storefrontEndpoint(): string {
  return `https://${shopifyConfig.domain}/api/${shopifyConfig.apiVersion}/graphql.json`;
}
