import { diffusers } from './diffusers';
import { collections } from './collections';
import { resolveProductImages } from './images';
import type { Collection, CollectionHandle, Product, ProductInput } from './types';

export type { Product, ProductInput, Collection, CollectionHandle, ProductImage, ImageRole } from './types';

/**
 * Attaches the gallery held in public/products/<handle>/ to an authored
 * product record. Throws at module load if a product has no image folder or
 * references a file that isn't there, so the mistake surfaces at build time
 * rather than as a broken page.
 */
function withImages(input: ProductInput): Product {
  const { imageDetails, ...product } = input;
  const images = resolveProductImages(input.handle, input.title, imageDetails);

  const optionValues = new Set(input.options.flatMap((o) => o.values));
  const unknown = images
    .filter((i) => i.variant && !optionValues.has(i.variant))
    .map((i) => `${i.src} -> "${i.variant}"`);
  if (unknown.length) {
    throw new Error(
      `"${input.handle}" scopes images to option values that do not exist:\n  ${unknown.join('\n  ')}\n` +
        `Known values: ${[...optionValues].join(', ') || '(none)'}`,
    );
  }

  return { ...product, images };
}

/** Single source of truth for the local catalogue, in merchandising order. */
export const allProducts: Product[] = [...diffusers].map(withImages);

/**
 * Cross-links are plain handles, so deleting a product can leave another
 * product pointing at something that no longer exists. Catch that at module
 * load — during the build — rather than letting the related-products row
 * quietly come up short.
 */
(function assertRelatedHandlesResolve() {
  const known = new Set(allProducts.map((p) => p.handle));
  const broken = allProducts
    .flatMap((p) => p.related.filter((h) => !known.has(h)).map((h) => `${p.handle} -> ${h}`))
    .sort();
  if (broken.length) {
    throw new Error(
      `Products reference related products that do not exist:\n  ${broken.join('\n  ')}\n` +
        `Update the \`related\` arrays in src/lib/catalog/.`,
    );
  }
})();

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
