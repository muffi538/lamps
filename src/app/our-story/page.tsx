import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Our story',
  description:
    'How we choose the diffusers we sell — a small collection built around atmosphere, restraint and honest specification.',
  alternates: { canonical: '/our-story' },
};

const principles = [
  {
    title: 'One idea per object',
    body: 'Every piece in the collection is built around a single effect — a contained rainfall, a column of water that falls upward, mist shaped like a jellyfish. Objects that try to do five things rarely do any of them beautifully.',
  },
  {
    title: 'It has to look right switched off',
    body: 'A diffuser spends most of its life switched off and empty. We judge each piece by how it sits on a table in daylight, before we judge what it does at night.',
  },
  {
    title: 'Specifications we can stand behind',
    body: 'Where the manufacturer has published a figure, we publish it. Where they have not, we mark it as still to be confirmed rather than filling the gap with a guess.',
  },
  {
    title: 'A short list, kept short',
    body: 'We would rather carry eight pieces we can describe properly than two hundred we cannot. New arrivals are added slowly and announced quietly.',
  },
];

export default function OurStoryPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="t-eyebrow">Our story</p>
          <h1 className="t-display mt-6">The hour after the overhead lights go off</h1>
          <p className="t-lead mt-8 max-w-2xl">
            {site.brand.name} began with a simple observation: most homes are furnished for daylight.
            The pieces that actually set the mood of a room — the diffuser on the console, the one
            on the bathroom shelf — are usually the last thing anyone chooses, and it shows.
          </p>
        </div>
      </Container>

      <section className="relative h-[46svh] min-h-[300px] w-full md:h-[64svh]">
        <Image
          src="/editorial/story.jpg"
          alt="Walnut and oak wood grain aroma diffusers releasing mist on a table beside books and an essential oil bottle"
          fill
          priority
          quality={84}
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2">A collection, not a catalogue</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="t-body space-y-5 text-[1rem]">
              <p>
                We work with {site.brand.legalEntity}, a New Delhi manufacturer and importer, and we
                select from what they make rather than commissioning anything from scratch. That
                keeps the range honest: these are real production pieces with real supply behind
                them, not renders waiting on a minimum order.
              </p>
              <p>
                What we do add is editing. Of everything available we carry eight pieces, and
                each one earned its place by being good at a single thing — warmth, quiet, scent,
                or the small theatre of watching mist move.
              </p>
              <p>
                We photograph each piece as it actually is, from the manufacturer&apos;s own product
                imagery, rather than dressing it up in a borrowed interior. If a specification has
                not been published yet, the product page says so plainly, and we update it the day
                it arrives.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <section className="bg-shell py-16 md:py-24">
        <Container>
          <h2 className="t-h2 mb-12 md:mb-16">What we hold to</h2>
          <ul className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="border-t border-line pt-7">
                  <p className="font-ui text-2xs tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="t-h3 mt-4">{p.title}</h3>
                  <p className="t-body mt-4 text-[0.9375rem]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="media-frame aspect-[3/4] w-full">
              <Image
                src="/editorial/story-detail.jpg"
                alt="A flame aromatherapy diffuser on a wooden table with an essential oil bottle and USB cable"
                fill
                sizes="(min-width:1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <h2 className="t-h2">Where to begin</h2>
            <p className="t-body mt-6 text-[1rem]">
              If you are buying one piece, buy the one you will see most often. A diffuser on a
              hallway console works harder than one in a spare room. If you are buying for
              someone else, the wood-grain diffuser and the candlelight diffuser are the two that
              suit almost any interior.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-outline">Shop the collection</Link>
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="t-eyebrow mb-4">Made and shipped by</h2>
              <p className="font-sans text-[0.9375rem] text-ink">{site.brand.legalEntity}</p>
              <p className="t-meta mt-2">{site.contact.addressLines.join(', ')}</p>
            </div>
            <div>
              <h2 className="t-eyebrow mb-4">Talk to us</h2>
              <p className="t-meta">
                <a href={`mailto:${site.contact.email}`} className="link-underline">{site.contact.email}</a>
              </p>
              <p className="t-meta mt-1">
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="link-underline">{site.contact.phone}</a>
              </p>
            </div>
            <div>
              <h2 className="t-eyebrow mb-4">Trade and wholesale</h2>
              <p className="t-meta">
                Interior designers, hotels and retailers — write to us for a trade price list and
                lead times.
              </p>
              <Link href="/contact" className="link-underline mt-3 inline-block font-ui text-2xs uppercase tracking-wider2">
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
