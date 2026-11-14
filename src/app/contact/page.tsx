import type { Metadata } from 'next';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.brand.name} about orders, products, trade enquiries and aftercare.`,
  alternates: { canonical: '/contact' },
};

const blocks = [
  {
    heading: 'Customer care',
    body: 'Questions about an order, a delivery or a return. We reply within two working days.',
    links: [
      { label: site.contact.email, href: `mailto:${site.contact.email}` },
      { label: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, '')}` },
    ],
  },
  {
    heading: 'Trade and wholesale',
    body: 'Interior designers, hospitality and stockists — ask for the trade price list, minimum order quantities and lead times.',
    links: [{ label: site.contact.email, href: `mailto:${site.contact.email}` }],
  },
  {
    heading: 'Press',
    body: 'Product imagery, specifications and samples for editorial use.',
    links: [{ label: site.contact.email, href: `mailto:${site.contact.email}` }],
  },
];

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="t-eyebrow">Contact</p>
        <h1 className="t-h1 mt-5">We are easy to reach</h1>
        <p className="t-body mt-6">
          Write to us about an order, a product specification still being confirmed, or a trade
          account. Everything reaches the same small team.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
        {blocks.map((block) => (
          <div key={block.heading} className="border-t border-line pt-7">
            <h2 className="t-h3">{block.heading}</h2>
            <p className="t-body mt-3 text-[0.9375rem]">{block.body}</p>
            <ul className="mt-5 space-y-1.5">
              {block.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline font-sans text-[0.9375rem] text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="t-eyebrow mb-4">Registered address</h2>
        <address className="not-italic">
          <p className="font-sans text-[0.9375rem] text-ink">{site.brand.legalEntity}</p>
          {site.contact.addressLines.map((line) => (
            <p key={line} className="t-meta">{line}</p>
          ))}
        </address>
      </div>
    </Container>
  );
}
