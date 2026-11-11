import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ShopBrowser } from '@/components/collection/ShopBrowser';
import { getProducts } from '@/lib/commerce';

export const metadata: Metadata = {
  title: 'Shop all',
  description:
    'The complete collection — aroma diffusers and humidifiers for the considered home.',
  alternates: { canonical: '/shop' },
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Container className="py-14 md:py-20">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="t-eyebrow">The collection</p>
        <h1 className="t-h1 mt-5">Shop all</h1>
        <p className="t-body mt-6">
          Every piece in the catalogue, in one place. Filter by collection or product type, or use
          search if you already know what you are looking for.
        </p>
      </header>

      <ShopBrowser products={products} />
    </Container>
  );
}
