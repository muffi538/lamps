import type { Product, ProductVariant, Spec } from '@/lib/catalog/types';
import type { ShopifyProduct } from './types';

const PRODUCT_TYPE_MAP: Record<string, Product['productType']> = {
  diffuser: 'Aroma Diffuser',
  'aroma diffuser': 'Aroma Diffuser',
  humidifier: 'Humidifier',
};

/**
 * Converts a Shopify product into the same shape the local catalogue uses, so
 * every component in the app renders identically in either mode.
 *
 * Rich editorial content (features, specs, usage, care) lives in Shopify
 * metafields under the `custom` namespace. If a metafield is absent the
 * corresponding section simply does not render — see SHOPIFY.md for the exact
 * metafield definitions to create.
 */
export function normalizeProduct(
  node: ShopifyProduct,
  editorial?: Partial<Pick<Product, 'features' | 'specs' | 'dimensions' | 'materials' | 'inTheBox' | 'usage' | 'care' | 'subtitle' | 'catalogueTagline'>>,
): Product {
  const variants: ProductVariant[] = node.variants.nodes.map((v, i) => ({
    id: v.id,
    sku: v.sku ?? '',
    title: v.title,
    selectedOptions: v.selectedOptions,
    availableForSale: v.availableForSale,
    price: Number.parseFloat(v.price.amount),
    imageIndex: v.image ? node.images.nodes.findIndex((img) => img.url === v.image!.url) : i,
  }));

  const typeKey = node.productType.trim().toLowerCase();
  const collectionsFromTags = node.tags
    .map((t) => t.toLowerCase())
    .filter((t): t is Product['collections'][number] => t === 'diffusers' || t === 'living');

  const emptySpecs: Spec[] = [];

  return {
    handle: node.handle,
    title: node.title,
    subtitle: editorial?.subtitle ?? node.seo.description ?? '',
    catalogueTagline: editorial?.catalogueTagline ?? null,
    productType: PRODUCT_TYPE_MAP[typeKey] ?? 'Living & Desk',
    collections: collectionsFromTags.length ? collectionsFromTags : ['living'],
    sourcePage: 0,
    price: Number.parseFloat(node.priceRange.minVariantPrice.amount),
    description: node.description.split(/\n{2,}/).filter(Boolean),
    features: editorial?.features ?? [],
    specs: editorial?.specs ?? emptySpecs,
    dimensions: editorial?.dimensions ?? emptySpecs,
    materials: editorial?.materials ?? emptySpecs,
    inTheBox: editorial?.inTheBox ?? [],
    usage: editorial?.usage ?? [],
    care: editorial?.care ?? [],
    options: node.options.map((o) => ({ name: o.name, values: o.values })),
    variants,
    images: node.images.nodes.map((img, i) => ({
      src: img.url,
      alt: img.altText ?? node.title,
      width: img.width,
      height: img.height,
      // Shopify can supply a blurred placeholder via its CDN transforms; until
      // that is wired up an empty string disables the placeholder cleanly.
      blurDataURL: '',
      role: i === 0 ? ('main' as const) : ('angle' as const),
    })),
    related: [],
  };
}
