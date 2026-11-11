'use client';

import { useState } from 'react';
import type { Product } from '@/lib/catalog/types';
import { useCart } from '@/components/cart/CartProvider';
import { cn } from '@/lib/utils';

/**
 * Adds the single variant straight to the bag. When a product has options the
 * button links through to the product page instead, so a size or colour is
 * never chosen on the customer's behalf.
 */
export function QuickAdd({ product }: { product: Product }) {
  const { add, open } = useCart();
  const [added, setAdded] = useState(false);
  const hasOptions = product.options.length > 0;
  const variant = product.variants[0];

  if (hasOptions || !variant) {
    return (
      <span className="relative z-10 flex w-full items-center justify-center bg-canvas/95 py-3.5 font-ui text-2xs uppercase tracking-wider2 text-ink shadow-[0_1px_0_0_#EAE8E4_inset,0_-1px_0_0_#EAE8E4_inset]">
        Choose options
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        add(
          {
            variantId: variant.id,
            handle: product.handle,
            title: product.title,
            variantTitle: variant.title === 'Default' ? null : variant.title,
            sku: variant.sku,
            image: product.images[0]?.src ?? '',
            imageAlt: product.images[0]?.alt ?? product.title,
            price: variant.price,
          },
          1,
        );
        setAdded(true);
        open();
        setTimeout(() => setAdded(false), 1800);
      }}
      className={cn(
        'relative z-10 w-full bg-canvas/95 py-3.5 font-ui text-2xs uppercase tracking-wider2 text-ink',
        'shadow-[0_1px_0_0_#EAE8E4_inset,0_-1px_0_0_#EAE8E4_inset]',
        'transition-colors duration-300 hover:bg-ink hover:text-white',
      )}
      aria-label={`Add ${product.title} to bag`}
    >
      {added ? 'Added' : 'Quick add'}
    </button>
  );
}
