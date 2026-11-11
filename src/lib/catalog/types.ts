export type Spec = {
  label: string;
  /** `null` means "not stated in the source catalogue" — rendered as a visible placeholder. */
  value: string | null;
};

export type ProductOption = {
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  /** Merchant SKU. Provisional until Shopify is connected. */
  sku: string;
  title: string;
  selectedOptions: { name: string; value: string }[];
  availableForSale: boolean;
  /** `null` until pricing is supplied. */
  price: number | null;
  /** Index into `Product.images` so picking a colour swaps the gallery. */
  imageIndex?: number;
};

export type ProductImage = {
  src: string;
  alt: string;
  /** Short caption used under gallery thumbnails on the product page. */
  caption?: string;
};

export type Feature = { title: string; body: string };

export type CollectionHandle = 'lamps' | 'diffusers' | 'living';

export type Product = {
  handle: string;
  title: string;
  /** One-line editorial introduction used on cards and at the top of the PDP. */
  subtitle: string;
  /** Verbatim positioning line from the supplied catalogue page. */
  catalogueTagline: string | null;
  productType: 'Table Lamp' | 'Aroma Diffuser' | 'Humidifier' | 'Living & Desk';
  collections: CollectionHandle[];
  /** Page of the supplied PDF this SKU was extracted from. */
  sourcePage: number;
  price: number | null;
  compareAtPrice?: number | null;
  description: string[];
  features: Feature[];
  /** Technical specifications. */
  specs: Spec[];
  dimensions: Spec[];
  materials: Spec[];
  inTheBox: (string | null)[];
  usage: string[];
  care: string[];
  options: ProductOption[];
  variants: ProductVariant[];
  images: ProductImage[];
  related: string[];
  featured?: boolean;
  bestseller?: boolean;
};

export type Collection = {
  handle: CollectionHandle;
  title: string;
  /** Short line used in nav and card overlays. */
  strapline: string;
  description: string;
  /** 4:5 portrait tile used on the homepage. */
  image: string;
  imageAlt: string;
  /** Wide banner used at the top of the collection page. */
  heroImage: string;
  heroImageAlt: string;
};
