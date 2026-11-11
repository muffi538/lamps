import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ShopBrowser } from '@/components/collection/ShopBrowser';
import { collections } from '@/lib/catalog';
import { getCollectionByHandle, getCollectionProducts } from '@/lib/commerce';
import type { CollectionHandle } from '@/lib/catalog/types';

type Params = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollectionByHandle(handle);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.handle}` },
    openGraph: {
      title: `${collection.title} — ${collection.strapline}`,
      description: collection.description,
      images: [{ url: collection.image }],
    },
  };
}

export default async function CollectionPage({ params }: Params) {
  const { handle } = await params;
  const collection = await getCollectionByHandle(handle);
  if (!collection) notFound();

  const products = await getCollectionProducts(collection.handle as CollectionHandle);

  return (
    <>
      <section className="relative">
        <div className="relative h-[42svh] min-h-[280px] w-full md:h-[52svh]">
          <Image
            src={collection.heroImage}
            alt={collection.heroImageAlt}
            fill
            priority
            quality={82}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/25 to-ink/10" aria-hidden="true" />
          <Container className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-14">
            <p className="font-ui text-2xs uppercase tracking-widest2 text-white/75">{collection.strapline}</p>
            <h1 className="t-h1 mt-4 text-white">{collection.title}</h1>
          </Container>
        </div>
      </section>

      <Container className="py-12 md:py-16">
        <p className="t-body mb-12 max-w-2xl md:mb-16">{collection.description}</p>
        <ShopBrowser products={products} showCollectionFilter={false} />
      </Container>
    </>
  );
}
