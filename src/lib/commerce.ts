import 'server-only';
import {
  allProducts,
  collections as localCollections,
  getBestsellers as localBestsellers,
  getCollection as localCollection,
  getFeatured as localFeatured,
  getProduct as localProduct,
  getProductsInCollection,
  getRelatedProducts,
  searchProducts as localSearch,
} from '@/lib/catalog';
import type { Collection, CollectionHandle, Product } from '@/lib/catalog/types';
import { isShopifyEnabled } from '@/lib/shopify/config';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  COMMERCE FACADE
 *
 *  Every page reads through this module and never imports the catalogue or the
 *  Shopify client directly. Switching the store to live Shopify data is a
 *  matter of setting two environment variables — no component changes.
 *
 *  While Shopify is unconfigured, each function falls back to the catalogue
 *  extracted from the supplied PDF. When Shopify IS configured and a request
 *  fails, we fall back rather than throwing, so a transient API problem
 *  degrades to the static catalogue instead of a blank storefront.
 * ─────────────────────────────────────────────────────────────────────────────
 */

async function withShopify<T>(live: () => Promise<T>, fallback: () => T): Promise<T> {
  if (!isShopifyEnabled) return fallback();
  try {
    const result = await live();
    const isEmptyArray = Array.isArray(result) && result.length === 0;
    return isEmptyArray || result === undefined ? fallback() : result;
  } catch (error) {
    console.error('[commerce] Shopify request failed, serving local catalogue.', error);
    return fallback();
  }
}

export async function getProducts(): Promise<Product[]> {
  return withShopify(
    async () => (await import('@/lib/shopify')).fetchAllProducts(),
    () => allProducts,
  );
}

export async function getProductByHandle(handle: string): Promise<Product | undefined> {
  return withShopify(
    async () => (await import('@/lib/shopify')).fetchProduct(handle),
    () => localProduct(handle),
  );
}

export async function getCollectionProducts(handle: CollectionHandle): Promise<Product[]> {
  return withShopify(
    async () => (await import('@/lib/shopify')).fetchCollectionProducts(handle),
    () => getProductsInCollection(handle),
  );
}

export async function getCollections(): Promise<Collection[]> {
  // Collection presentation (hero imagery, straplines) is curated locally even
  // in live mode, so the storefront keeps its editorial voice.
  return localCollections;
}

export async function getCollectionByHandle(handle: string): Promise<Collection | undefined> {
  return localCollection(handle);
}

export async function getBestsellers(limit = 8): Promise<Product[]> {
  const products = await getProducts();
  const marked = products.filter((p) => p.bestseller);
  return (marked.length ? marked : localBestsellers(limit)).slice(0, limit);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  const marked = products.filter((p) => p.featured);
  return marked.length ? marked : localFeatured();
}

export async function getRelated(product: Product, limit = 3): Promise<Product[]> {
  return getRelatedProducts(product, limit);
}

export async function search(query: string): Promise<Product[]> {
  return localSearch(query);
}

export { isShopifyEnabled };
