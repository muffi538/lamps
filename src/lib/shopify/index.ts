import 'server-only';
import { storefront } from './client';
import {
  CART_CREATE,
  GET_COLLECTION,
  GET_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCT_RECOMMENDATIONS,
} from './queries';
import { normalizeProduct } from './normalize';
import type { ShopifyCart, ShopifyCollection, ShopifyProduct } from './types';
import type { Product } from '@/lib/catalog/types';

export { isShopifyEnabled } from './config';
export type { ShopifyCart } from './types';

export async function fetchAllProducts(first = 100): Promise<Product[]> {
  const data = await storefront<{ products: { nodes: ShopifyProduct[] } }>({
    query: GET_PRODUCTS,
    variables: { first },
    tags: ['products'],
  });
  return data.products.nodes.map((n) => normalizeProduct(n));
}

export async function fetchProduct(handle: string): Promise<Product | undefined> {
  const data = await storefront<{ product: ShopifyProduct | null }>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
    tags: ['products', `product:${handle}`],
  });
  return data.product ? normalizeProduct(data.product) : undefined;
}

export async function fetchCollectionProducts(handle: string, first = 100): Promise<Product[]> {
  const data = await storefront<{ collection: ShopifyCollection | null }>({
    query: GET_COLLECTION,
    variables: { handle, first },
    tags: ['products', `collection:${handle}`],
  });
  return data.collection?.products.nodes.map((n) => normalizeProduct(n)) ?? [];
}

export async function fetchRecommendations(productId: string): Promise<Product[]> {
  const data = await storefront<{ productRecommendations: ShopifyProduct[] }>({
    query: GET_PRODUCT_RECOMMENDATIONS,
    variables: { productId },
    tags: ['products'],
  });
  return (data.productRecommendations ?? []).map((n) => normalizeProduct(n));
}

/**
 * Creates a Shopify cart from the lines held in the browser and returns the
 * hosted, PCI-compliant checkout URL. Payment never touches this application.
 */
export async function createCheckout(
  lines: { merchandiseId: string; quantity: number }[],
): Promise<{ checkoutUrl: string; cartId: string }> {
  const data = await storefront<{
    cartCreate: { cart: ShopifyCart | null; userErrors: { field: string[]; message: string }[] };
  }>({
    query: CART_CREATE,
    variables: { lines },
    revalidate: 0,
  });

  const errors = data.cartCreate.userErrors;
  if (errors?.length) throw new Error(errors.map((e) => e.message).join('; '));
  if (!data.cartCreate.cart) throw new Error('Shopify did not return a cart.');

  return { checkoutUrl: data.cartCreate.cart.checkoutUrl, cartId: data.cartCreate.cart.id };
}
