import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { site } from '@/config/site';
import { Container, SectionHeading } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CollectionTile } from '@/components/site/CollectionTile';
import { NewsletterForm } from '@/components/site/Newsletter';
import { ArrowIcon } from '@/components/site/Icons';
import { Price } from '@/components/ui/Price';
import {
  getBestsellers,
  getCollectionProducts,
  getCollections,
  getProductByHandle,
} from '@/lib/commerce';

export const metadata: Metadata = {
  title: `${site.brand.name} — ${site.brand.tagline}`,
  description: site.brand.description,
  alternates: { canonical: '/' },
};

const FEATURED_HANDLE = 'raindrop-aroma-diffuser';

export default async function HomePage() {
  const [bestsellers, collections, diffuserProducts, featured] = await Promise.all([
    getBestsellers(4),
    getCollections(),
    getCollectionProducts('diffusers'),
    getProductByHandle(FEATURED_HANDLE),
  ]);

  const counts: Record<string, number> = {
    diffusers: diffuserProducts.length,
  };

  return (
    <>
      {/* ── A. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative" aria-labelledby="hero-heading">
        <div className="grid min-h-[78svh] lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12">
          <div className="order-2 flex items-center bg-canvas py-14 lg:order-1 lg:col-span-5 lg:py-20">
            <Container className="max-w-none lg:pl-12 xl:pl-16">
              <p className="t-eyebrow animate-fade-in">New collection</p>
              <h1 id="hero-heading" className="t-display mt-6 animate-fade-up">
                Scent that
                <br />
                settles a room.
              </h1>
              <p className="t-lead mt-7 max-w-md animate-fade-up [animation-delay:120ms]">
                Aroma diffusers for the considered home — made for the hour when the overhead
                lights go off and everything softens.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up [animation-delay:200ms]">
                <Link href="/collections/diffusers" className="btn-primary">
                  Shop collection
                </Link>
                <Link href="/our-story" className="link-underline font-ui text-[0.8125rem] tracking-wide text-muted">
                  Our story
                </Link>
              </div>
            </Container>
          </div>

          <div className="relative order-1 min-h-[52svh] lg:order-2 lg:col-span-7 lg:min-h-0">
            <Image
              src="/editorial/hero-candlelight.jpg"
              alt="The Candlelight Style Electric Diffuser lit and releasing a fine mist on a round walnut table in a warm living room"
              fill
              priority
              quality={85}
              sizes="(min-width:1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── C. FEATURED COLLECTIONS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28" aria-labelledby="collections-heading">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The collection"
              title="One idea, carefully made"
              description="Every diffuser we carry is built around a single visual idea — a contained rainfall, a column of water that falls upward, mist shaped like a jellyfish."
              className="mb-12 md:mb-16"
            />
          </Reveal>

          <div className="grid gap-5 md:gap-8">
            {collections.map((collection, i) => (
              <Reveal key={collection.handle} delay={i * 0.08}>
                <CollectionTile
                  collection={collection}
                  count={counts[collection.handle] ?? 0}
                  priority={i === 0}
                  wide={collections.length === 1}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── D. BESTSELLERS ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="bestsellers-heading">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Most requested"
              title="Bestsellers"
              action={
                <Link href="/collections/diffusers" className="link-underline inline-flex items-center gap-2 font-ui text-2xs uppercase tracking-wider2">
                  View all <ArrowIcon className="h-3 w-3" />
                </Link>
              }
              className="mb-12 md:mb-16"
            />
          </Reveal>

          <ProductGrid products={bestsellers} columns={4} />
        </Container>
      </section>

      {/* ── E. BRAND PHILOSOPHY ──────────────────────────────────────────── */}
      <section className="bg-shell py-20 md:py-28" aria-labelledby="philosophy-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="media-frame aspect-[4/5] w-full">
                <Image
                  src="/products/jellyfish-aroma-diffuser/01-main.jpg"
                  alt="The Jellyfish Aroma Diffuser on a marble surface with five mist plumes rising and folding over"
                  fill
                  sizes="(min-width:1024px) 46vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="t-eyebrow">Our approach</p>
              <h2 id="philosophy-heading" className="t-h2 mt-5">
                A room is made at the edges of the day
              </h2>
              <div className="t-body mt-7 space-y-5">
                <p>
                  Most homes are designed for daylight and then left to fend for themselves after
                  dark. We make the objects that take over at that point — a slow mist, a
                  contained rainfall, a column of water that falls upward — each one built around
                  a single idea rather than a list of functions.
                </p>
                <p>
                  Every piece is chosen for how it behaves when it is switched on and how it looks
                  when it is not. That second test is the harder one, and it is the reason the
                  collection is small.
                </p>
                <p>
                  We publish the specifications we can stand behind, and we mark the ones still
                  being confirmed. Nothing is dressed up.
                </p>
              </div>
              <Link href="/our-story" className="btn-outline mt-9">
                Read our story
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── F. FEATURED PRODUCT ──────────────────────────────────────────── */}
      {featured ? (
        <section className="py-20 md:py-28" aria-labelledby="featured-heading">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <Reveal className="order-2 lg:order-1 lg:col-span-5">
                <p className="t-eyebrow">Featured piece</p>
                <h2 id="featured-heading" className="t-h2 mt-5">
                  {featured.title}
                </h2>
                {featured.catalogueTagline ? (
                  <p className="mt-4 font-sans text-base font-light italic text-accent">
                    {featured.catalogueTagline}
                  </p>
                ) : null}

                <div className="t-body mt-7 space-y-5">
                  {featured.description.slice(0, 2).map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8">
                  {featured.features.slice(0, 4).map((f) => (
                    <div key={f.title}>
                      <dt className="font-sans text-[0.875rem] text-ink">{f.title}</dt>
                      <dd className="t-meta mt-1">{f.body}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <Link href={`/products/${featured.handle}`} className="btn-primary">
                    View product
                  </Link>
                  <Price amount={featured.price} />
                </div>
              </Reveal>

              <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
                <div className="media-frame aspect-[4/5] w-full">
                  <Image
                    src="/products/raindrop-aroma-diffuser/01-main.jpg"
                    alt="The Raindrop Aroma Diffuser lit warmly on a wooden table"
                    fill
                    sizes="(min-width:1024px) 48vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── G. NEWSLETTER ────────────────────────────────────────────────── */}
      <section className="border-y border-line py-20 md:py-24" aria-labelledby="newsletter-heading">
        <Container width="narrow" className="text-center">
          <Reveal>
            <p className="t-eyebrow">Keep in touch</p>
            <h2 id="newsletter-heading" className="t-h2 mt-5">
              New pieces, quietly announced
            </h2>
            <p className="t-body mx-auto mt-5 max-w-md">
              Occasional letters about new arrivals, restocks and the thinking behind them. No more
              than once a month.
            </p>
            <div className="mt-10">
              <NewsletterForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
