'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/catalog/types';
import { Price } from '@/components/ui/Price';
import { QuickAdd } from './QuickAdd';
import { cn } from '@/lib/utils';

export function ProductCard({
  product,
  priority = false,
  sizes = '(min-width:1280px) 22vw, (min-width:768px) 31vw, (min-width:640px) 45vw, 88vw',
  showQuickAdd = true,
}: {
  product: Product;
  priority?: boolean;
  sizes?: string;
  showQuickAdd?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const primary = product.images[0];
  const secondary = product.images[1];

  return (
    <article
      className="group relative flex h-full flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="media-frame aspect-[4/5] w-full">
        {primary ? (
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              'object-contain transition-[opacity,transform] duration-[900ms] ease-premium',
              secondary && hovered ? 'scale-[1.03] opacity-0' : 'scale-100 opacity-100',
            )}
          />
        ) : null}

        {secondary ? (
          <Image
            src={secondary.src}
            alt=""
            fill
            sizes={sizes}
            className={cn(
              'object-contain transition-[opacity,transform] duration-[900ms] ease-premium',
              hovered ? 'scale-[1.02] opacity-100' : 'scale-100 opacity-0',
            )}
          />
        ) : null}

        {showQuickAdd ? (
          <div
            className={cn(
              'absolute inset-x-3 bottom-3 z-20 transition-all duration-500 ease-premium',
              'pointer-events-none translate-y-2 opacity-0',
              'group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100',
              'group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100',
              'max-md:pointer-events-auto max-md:translate-y-0 max-md:opacity-100',
            )}
          >
            <QuickAdd product={product} />
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="t-h3 text-[0.9375rem] md:text-base">
          <Link
            href={`/products/${product.handle}`}
            className="after:absolute after:inset-0 after:z-10 after:content-['']"
          >
            {product.title}
          </Link>
        </h3>
        <p className="t-meta mt-2 line-clamp-2">{product.subtitle}</p>
        <Price amount={product.price} size="sm" className="mt-auto block pt-4" />
      </div>
    </article>
  );
}
