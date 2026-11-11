'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Product, ProductVariant } from '@/lib/catalog/types';
import { Gallery } from './Gallery';
import { QuantityStepper } from './QuantityStepper';
import { Accordion } from './Accordion';
import { Price } from '@/components/ui/Price';
import { useCart } from '@/components/cart/CartProvider';
import { cn } from '@/lib/utils';

function matchVariant(product: Product, selected: Record<string, string>): ProductVariant | undefined {
  if (!product.options.length) return product.variants[0];
  return product.variants.find((v) =>
    v.selectedOptions.every((o) => selected[o.name] === o.value),
  );
}

export function ProductTop({ product }: { product: Product }) {
  const { add, open } = useCart();

  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.options.map((o) => [o.name, o.values[0]])),
  );
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const variant = useMemo(() => matchVariant(product, selected), [product, selected]);
  const unavailable = !variant || !variant.availableForSale;

  function chooseOption(name: string, value: string) {
    const next = { ...selected, [name]: value };
    setSelected(next);
    const v = matchVariant(product, next);
    if (v?.imageIndex !== undefined && v.imageIndex >= 0 && v.imageIndex < product.images.length) {
      setImageIndex(v.imageIndex);
    }
  }

  function addToBag() {
    if (!variant) return;
    add(
      {
        variantId: variant.id,
        handle: product.handle,
        title: product.title,
        variantTitle: variant.title === 'Default' ? null : variant.title,
        sku: variant.sku,
        image: product.images[variant.imageIndex ?? 0]?.src ?? product.images[0]?.src ?? '',
        imageAlt: product.images[0]?.alt ?? product.title,
        price: variant.price,
      },
      quantity,
    );
    setJustAdded(true);
    open();
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Gallery
          images={product.images}
          activeIndex={imageIndex}
          onActiveIndexChange={setImageIndex}
          productTitle={product.title}
        />
      </div>

      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
          <p className="t-eyebrow">{product.productType}</p>
          <h1 className="t-h1 mt-4">{product.title}</h1>
          <p className="t-lead mt-5">{product.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <Price amount={variant?.price ?? product.price} size="lg" />
            {variant?.price === null ? (
              <span className="t-meta">Pricing confirmed before dispatch</span>
            ) : null}
          </div>

          {/* Options */}
          {product.options.map((option) => (
            <fieldset key={option.name} className="mt-8">
              <legend className="t-eyebrow mb-3">
                {option.name}
                <span className="ml-2 normal-case tracking-normal text-ink">{selected[option.name]}</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const isActive = selected[option.name] === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => chooseOption(option.name, value)}
                      aria-pressed={isActive}
                      className={cn(
                        'border px-5 py-2.5 font-ui text-[0.8125rem] transition-all duration-300 ease-premium',
                        isActive ? 'border-ink text-ink' : 'border-line text-muted hover:border-muted hover:text-ink',
                      )}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {/* Quantity + add */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <button
              type="button"
              onClick={addToBag}
              disabled={unavailable}
              className="btn-primary min-w-[14rem] flex-1"
            >
              {unavailable ? 'Unavailable' : justAdded ? 'Added to bag' : 'Add to bag'}
            </button>
          </div>

          {variant?.sku ? (
            <p className="t-meta mt-4">
              SKU <span className="text-ink">{variant.sku}</span>
              <span className="mx-2 text-line">|</span>
              Provisional reference until Shopify inventory is connected
            </p>
          ) : null}

          {/* Quick facts */}
          <ul className="mt-8 space-y-2.5 border-t border-line pt-8">
            {product.features.slice(0, 4).map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                <span className="font-sans text-[0.875rem] leading-relaxed text-ink">
                  {f.title}
                  <span className="text-muted"> — {f.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Accordion title="Shipping">
              <div className="t-body space-y-3">
                <p>
                  Orders are dispatched from New Delhi. Delivery timelines, carriers and charges are
                  confirmed at checkout once Shopify Shipping is configured.
                </p>
                <p>
                  Full detail is on the{' '}
                  <Link href="/policies/shipping" className="link-underline text-ink">
                    shipping policy
                  </Link>{' '}
                  page.
                </p>
              </div>
            </Accordion>
            <Accordion title="Returns">
              <div className="t-body space-y-3">
                <p>
                  Unused items in original packaging may be returned. The return window and who pays
                  return postage are set in the{' '}
                  <Link href="/policies/returns" className="link-underline text-ink">
                    returns policy
                  </Link>
                  .
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
