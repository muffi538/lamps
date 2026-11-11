import 'server-only';
import { isShopifyEnabled, shopifyConfig, storefrontEndpoint } from './config';

export class ShopifyError extends Error {
  constructor(message: string, readonly details?: unknown) {
    super(message);
    this.name = 'ShopifyError';
  }
}

type RequestOptions = {
  query: string;
  variables?: Record<string, unknown>;
  /** ISR window in seconds. Pass 0 for mutations / always-fresh reads. */
  revalidate?: number;
  tags?: string[];
};

/**
 * Minimal, dependency-free Storefront API client.
 * Runs server-side only, so the token is never bundled into client JavaScript
 * even though the Storefront token is technically public-safe.
 */
export async function storefront<T>({ query, variables, revalidate = 300, tags }: RequestOptions): Promise<T> {
  if (!isShopifyEnabled) {
    throw new ShopifyError(
      'Shopify is not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN.',
    );
  }

  const res = await fetch(storefrontEndpoint(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': shopifyConfig.token,
    },
    body: JSON.stringify({ query, variables }),
    ...(revalidate === 0 ? { cache: 'no-store' as const } : { next: { revalidate, tags } }),
  });

  if (!res.ok) {
    throw new ShopifyError(`Storefront API responded ${res.status}`, await res.text().catch(() => undefined));
  }

  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (json.errors) throw new ShopifyError('Storefront API returned errors', json.errors);
  if (!json.data) throw new ShopifyError('Storefront API returned no data');
  return json.data;
}
