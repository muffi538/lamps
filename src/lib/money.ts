import { site } from '@/config/site';

export const PRICE_PLACEHOLDER = 'Price on request';

/**
 * Formats an amount for display. Returns the placeholder string whenever a
 * price has not been supplied yet, so no component has to special-case nulls.
 */
export function formatMoney(amount: number | null | undefined, currency: string = site.currency): string {
  if (amount === null || amount === undefined) return PRICE_PLACEHOLDER;
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

export function hasPricing(amount: number | null | undefined): amount is number {
  return typeof amount === 'number' && Number.isFinite(amount);
}
