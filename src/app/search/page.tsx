import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ProductGrid } from '@/components/product/ProductGrid';
import { search } from '@/lib/commerce';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search the collection by product name, material or type.',
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const query = q.trim();
  const results = query ? await search(query) : [];

  return (
    <Container className="py-14 md:py-20">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="t-eyebrow">Search</p>
        <h1 className="t-h1 mt-5">{query ? `“${query}”` : 'Search the collection'}</h1>
        <p className="t-body mt-5">
          {query
            ? `${results.length} ${results.length === 1 ? 'piece matches' : 'pieces match'} your search.`
            : 'Use the search control in the header to look up a product by name, material or type.'}
        </p>
      </header>

      {query && results.length === 0 ? (
        <div className="max-w-md">
          <p className="t-body">
            Nothing matched. Try a broader term, or{' '}
            <Link href="/collections/diffusers" className="link-underline text-ink">browse the full collection</Link>.
          </p>
        </div>
      ) : null}

      {results.length ? <ProductGrid products={results} columns={4} priorityCount={4} /> : null}
    </Container>
  );
}
