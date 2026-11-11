'use server';

import { isShopifyEnabled } from '@/lib/shopify/config';

export type CheckoutResult =
  | { ok: true; checkoutUrl: string }
  | { ok: false; reason: 'not-configured' | 'error'; message: string };

/**
 * Hands the browser cart to Shopify and returns the hosted checkout URL.
 *
 * Payment details never pass through this application: Shopify's checkout is
 * PCI-DSS compliant and handles cards, UPI, wallets and order confirmation.
 *
 * Until NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN / _STOREFRONT_TOKEN are set, this
 * returns `not-configured` and the UI explains that pricing and checkout go
 * live once Shopify is connected.
 */
export async function startCheckout(
  lines: { merchandiseId: string; quantity: number }[],
): Promise<CheckoutResult> {
  if (!isShopifyEnabled) {
    return {
      ok: false,
      reason: 'not-configured',
      message: 'Secure checkout goes live when the Shopify Storefront API credentials are configured.',
    };
  }

  if (!lines.length) {
    return { ok: false, reason: 'error', message: 'Your bag is empty.' };
  }

  try {
    const { createCheckout } = await import('@/lib/shopify');
    const { checkoutUrl } = await createCheckout(lines);
    return { ok: true, checkoutUrl };
  } catch (error) {
    console.error('[checkout] failed', error);
    return {
      ok: false,
      reason: 'error',
      message: 'We could not reach the checkout just now. Please try again in a moment.',
    };
  }
}
