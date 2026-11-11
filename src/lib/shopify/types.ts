export type ShopifyMoney = { amount: string; currencyCode: string };

export type ShopifyImage = { url: string; altText: string | null; width: number; height: number };

export type ShopifyVariant = {
  id: string;
  title: string;
  sku: string | null;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  selectedOptions: { name: string; value: string }[];
  image: ShopifyImage | null;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  options: { id: string; name: string; values: string[] }[];
  priceRange: { minVariantPrice: ShopifyMoney; maxVariantPrice: ShopifyMoney };
  featuredImage: ShopifyImage | null;
  images: { nodes: ShopifyImage[] };
  variants: { nodes: ShopifyVariant[] };
  seo: { title: string | null; description: string | null };
  metafields?: ({ key: string; namespace: string; value: string } | null)[];
};

export type ShopifyCollection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ShopifyImage | null;
  products: { nodes: ShopifyProduct[] };
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: ShopifyMoney;
    totalAmount: ShopifyMoney;
    totalTaxAmount: ShopifyMoney | null;
  };
  lines: {
    nodes: {
      id: string;
      quantity: number;
      cost: { totalAmount: ShopifyMoney };
      merchandise: { id: string; title: string; product: { handle: string; title: string } };
    }[];
  };
};
