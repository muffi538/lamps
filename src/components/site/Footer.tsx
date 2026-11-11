import Link from 'next/link';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { NewsletterForm } from './Newsletter';

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'All products', href: '/shop' },
      { label: 'Lamps', href: '/collections/lamps' },
      { label: 'Diffusers', href: '/collections/diffusers' },
      { label: 'Living & Desk', href: '/collections/living' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our story', href: '/our-story' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Customer care',
    links: [
      { label: 'Shipping policy', href: '/policies/shipping' },
      { label: 'Returns policy', href: '/policies/returns' },
      { label: 'Privacy policy', href: '/policies/privacy' },
      { label: 'Terms of service', href: '/policies/terms' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-shell md:mt-32">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-sans text-[0.9375rem] font-medium uppercase tracking-widest2 text-ink">
              {site.brand.wordmark}
            </p>
            <p className="t-body mt-5 max-w-xs">{site.brand.description}</p>
            <p className="t-meta mt-6">Sign up for new arrivals and quiet news.</p>
            <div className="mt-3">
              <NewsletterForm compact />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-6">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="t-eyebrow mb-5">{col.heading}</h2>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-underline font-sans text-sm text-muted transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="md:col-span-2">
            <h2 className="t-eyebrow mb-5">Follow</h2>
            <ul className="space-y-3">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="link-underline font-sans text-sm text-muted transition-colors hover:text-ink"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule my-12" />

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="t-meta space-y-1">
            <p>{site.contact.addressLines.join(' · ')}</p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="link-underline">
                {site.contact.email}
              </a>
              <span className="mx-2 text-line">|</span>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="link-underline">
                {site.contact.phone}
              </a>
            </p>
          </div>
          <p className="t-meta md:text-right">
            © {year} {site.brand.legalEntity}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
