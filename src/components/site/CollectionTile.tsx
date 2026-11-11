import Image from 'next/image';
import Link from 'next/link';
import type { Collection } from '@/lib/catalog/types';
import { ArrowIcon } from './Icons';

export function CollectionTile({
  collection,
  count,
  priority = false,
  image,
}: {
  collection: Collection;
  count: number;
  priority?: boolean;
  image?: string;
}) {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      className="group relative block"
      aria-label={`${collection.title} — ${count} pieces`}
    >
      <div className="media-frame aspect-[4/5] w-full md:aspect-[3/4]">
        <Image
          src={image ?? collection.image}
          alt={collection.imageAlt}
          fill
          priority={priority}
          sizes="(min-width:768px) 48vw, 92vw"
          className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.035]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
          <p className="font-ui text-2xs uppercase tracking-widest2 text-white/70">{collection.strapline}</p>
          <h3 className="mt-3 font-sans text-2xl font-light tracking-[-0.02em] text-white md:text-3xl">
            {collection.title}
          </h3>
          <span className="mt-5 inline-flex items-center gap-2 font-ui text-2xs uppercase tracking-wider2 text-white">
            <span className="link-underline">Explore {count} pieces</span>
            <ArrowIcon className="h-3 w-3 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
