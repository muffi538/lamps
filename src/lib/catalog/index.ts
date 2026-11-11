import { diffusers } from './diffusers';
import { lamps } from './lamps';
import { living } from './living';
import { collections } from './collections';
import type { Collection, CollectionHandle, Product } from './types';

export type { Product, Collection, CollectionHandle } from './types';

/** Single source of truth for the local catalogue, in merchandising order. */
export const allProducts: Product[] = [...lamps, ...diffusers, ...living];

export const productsByHandle: Record<string, Product> = Object.fromEntries(
  allProducts.map((p) => [p.handle, p]),
);

export function getProduct(handle: string): Product | undefined {
  return productsByHandle[handle];
}

export function getCollection(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function getProductsInCollection(handle: CollectionHandle): Product[] {
  return allProducts.filter((p) => p.collections.includes(handle));
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const explicit = product.related
    .map((h) => productsByHandle[h])
    .filter((p): p is Product => Boolean(p) && p.handle !== product.handle);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  // Fall back to other products in the same collection.
  const seen = new Set([product.handle, ...explicit.map((p) => p.handle)]);
  const fallback = allProducts.filter(
    (p) => !seen.has(p.handle) && p.collections.some((c) => product.collections.includes(c)),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

export function getBestsellers(limit = 8): Product[] {
  const marked = allProducts.filter((p) => p.bestseller);
  return (marked.length ? marked : allProducts).slice(0, limit);
}

export function getFeatured(): Product[] {
  return allProducts.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return allProducts
    .map((p) => {
      const haystack = [
        p.title,
        p.subtitle,
        p.productType,
        p.catalogueTagline ?? '',
        ...p.collections,
        ...p.features.map((f) => f.title),
        ...p.variants.map((v) => v.sku),
      ]
        .join(' ')
        .toLowerCase();
      const score = terms.reduce((acc, t) => {
        if (p.title.toLowerCase().includes(t)) return acc + 3;
        if (haystack.includes(t)) return acc + 1;
        return acc;
      }, 0);
      return { product: p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.product);
}

export { collections };
