import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { getPolicy, policies } from '@/lib/policies';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return {};
  return {
    title: policy.title,
    description: policy.summary,
    alternates: { canonical: `/policies/${policy.slug}` },
  };
}

export default async function PolicyPage({ params }: Params) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return (
    <Container className="py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-3">
          <nav aria-label="Policies" className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
            <h2 className="t-eyebrow mb-5">Customer care</h2>
            <ul className="space-y-3">
              {policies.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/policies/${p.slug}`}
                    aria-current={p.slug === policy.slug ? 'page' : undefined}
                    className={
                      p.slug === policy.slug
                        ? 'font-sans text-sm text-ink'
                        : 'link-underline font-sans text-sm text-muted transition-colors hover:text-ink'
                    }
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <h1 className="t-h1">{policy.title}</h1>
          <p className="t-lead mt-5">{policy.summary}</p>

          <div className="mt-14 space-y-12">
            {policy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="t-h3">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className={
                        section.pending
                          ? 'border-l-2 border-dashed border-line pl-5 font-ui text-[0.875rem] leading-relaxed text-muted'
                          : 't-body text-[0.9375rem]'
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="t-meta mt-16 border-t border-line pt-8">
            This page is drafted scaffolding and is not legal advice. Sections shown in a dashed
            rule need merchant input before launch, and the final wording should be reviewed and
            mirrored in Shopify admin under Settings → Policies.
          </p>
        </article>
      </div>
    </Container>
  );
}
