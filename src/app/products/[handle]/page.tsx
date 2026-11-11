import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ProductTop } from '@/components/product/ProductTop';
import { SpecTable } from '@/components/product/SpecTable';
import { ProductGrid } from '@/components/product/ProductGrid';
import { allProducts } from '@/lib/catalog';
import { getProductByHandle, getRelated } from '@/lib/commerce';
import { hasPricing } from '@/lib/money';

type Params = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return allProducts.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return {};

  return {
    title: product.title,
    description: `${product.subtitle} ${product.description[0] ?? ''}`.trim().slice(0, 300),
    alternates: { canonical: `/products/${product.handle}` },
    openGraph: {
      type: 'website',
      title: `${product.title} — ${site.brand.name}`,
      description: product.subtitle,
      images: product.images.slice(0, 2).map((img) => ({ url: img.src, alt: img.alt })),
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) notFound();

  const related = await getRelated(product, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.subtitle,
    image: product.images.map((i) => `${site.url}${i.src}`),
    brand: { '@type': 'Brand', name: site.brand.name },
    category: product.productType,
    ...(product.variants[0]?.sku ? { sku: product.variants[0].sku } : {}),
    offers: product.variants.map((v) => ({
      '@type': 'Offer',
      sku: v.sku,
      name: v.title,
      url: `${site.url}/products/${product.handle}`,
      priceCurrency: site.currency,
      ...(hasPricing(v.price) ? { price: v.price } : {}),
      availability: v.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${site.url}/shop` },
      { '@type': 'ListItem', position: 3, name: product.title, item: `${site.url}/products/${product.handle}` },
    ],
  };

  const inTheBox = product.inTheBox.filter(Boolean) as string[];
  const boxIncomplete = product.inTheBox.some((i) => i === null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Container className="py-6 md:py-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-ui text-2xs uppercase tracking-wider2 text-muted">
            <li><Link href="/" className="transition-colors hover:text-ink">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/shop" className="transition-colors hover:text-ink">Shop</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/collections/${product.collections[0]}`} className="transition-colors hover:text-ink">
                {product.collections[0] === 'living' ? 'Living & Desk' : product.collections[0]}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">{product.title}</li>
          </ol>
        </nav>
      </Container>

      <Container className="pb-16 md:pb-24">
        <ProductTop product={product} />
      </Container>

      {/* ── Description ──────────────────────────────────────────────────── */}
      <section className="border-t border-line py-16 md:py-24" aria-labelledby="description-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 id="description-heading" className="t-h2">
                The piece
              </h2>
              {product.catalogueTagline ? (
                <p className="mt-5 font-sans text-base font-light italic text-accent">{product.catalogueTagline}</p>
              ) : null}
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="t-body space-y-5 text-[1rem]">
                {product.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      {product.features.length ? (
        <section className="bg-shell py-16 md:py-24" aria-labelledby="features-heading">
          <Container>
            <h2 id="features-heading" className="t-h2 mb-12 md:mb-16">
              Key features and benefits
            </h2>
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <Reveal as="li" key={feature.title} delay={Math.min(i, 5) * 0.05}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-sans text-[1.0625rem] font-normal tracking-[-0.01em] text-ink">
                      {feature.title}
                    </h3>
                    <p className="t-body mt-3 text-[0.9375rem]">{feature.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ── Specifications ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="specs-heading">
        <Container>
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <h2 id="specs-heading" className="t-h2">
              Specifications
            </h2>
            <p className="t-meta max-w-sm md:text-right">
              Values are taken from the manufacturer catalogue. Anything not yet published is marked
              <span className="mx-1 pending-chip">To be confirmed</span>
              rather than estimated.
            </p>
          </div>

          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
            <div>
              <SpecTable rows={product.specs} caption="Technical specifications" />
            </div>
            <div className="space-y-14">
              <SpecTable rows={product.dimensions} caption="Dimensions and measurements" />
              <SpecTable rows={product.materials} caption="Materials and finish" />

              {inTheBox.length ? (
                <div>
                  <h3 className="t-eyebrow mb-4">In the box</h3>
                  <ul className="space-y-2.5">
                    {inTheBox.map((item) => (
                      <li key={item} className="flex gap-3 font-sans text-[0.875rem] leading-relaxed text-ink">
                        <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                    {boxIncomplete ? (
                      <li className="pt-2">
                        <span className="pending-chip">Full pack contents to be confirmed</span>
                      </li>
                    ) : null}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Usage & care ─────────────────────────────────────────────────── */}
      <section className="border-t border-line py-16 md:py-24" aria-labelledby="care-heading">
        <Container>
          <h2 id="care-heading" className="t-h2 mb-12 md:mb-16">
            Using and caring for it
          </h2>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="t-eyebrow mb-6">
                {product.productType === 'Table Lamp' ? 'Installation and use' : 'Usage instructions'}
              </h3>
              <ol className="space-y-5">
                {product.usage.map((step, i) => (
                  <li key={step.slice(0, 30)} className="flex gap-5">
                    <span className="mt-0.5 w-5 shrink-0 font-ui text-2xs tabular-nums text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="t-body text-[0.9375rem]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="t-eyebrow mb-6">Care and maintenance</h3>
              <ul className="space-y-5">
                {product.care.map((item) => (
                  <li key={item.slice(0, 30)} className="flex gap-5">
                    <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    <span className="t-body text-[0.9375rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="t-eyebrow mb-4">Shipping</h3>
              <p className="t-body text-[0.9375rem]">
                Dispatched from New Delhi. Carriers, delivery windows and charges are confirmed at
                checkout once Shopify Shipping is configured — see the{' '}
                <Link href="/policies/shipping" className="link-underline text-ink">shipping policy</Link>.
              </p>
            </div>
            <div>
              <h3 className="t-eyebrow mb-4">Returns</h3>
              <p className="t-body text-[0.9375rem]">
                Unused items in original packaging can be returned within the published window. Read
                the{' '}
                <Link href="/policies/returns" className="link-underline text-ink">returns policy</Link>{' '}
                before sending anything back.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related ──────────────────────────────────────────────────────── */}
      {related.length ? (
        <section className="bg-shell py-16 md:py-24" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="t-h2 mb-12 md:mb-16">
              You may also like
            </h2>
            <ProductGrid products={related} columns={3} />
          </Container>
        </section>
      ) : null}
    </>
  );
}
