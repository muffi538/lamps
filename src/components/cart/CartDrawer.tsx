'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from './CartProvider';
import { QuantityStepper } from '@/components/product/QuantityStepper';
import { CloseIcon } from '@/components/site/Icons';
import { formatMoney } from '@/lib/money';
import { startCheckout } from '@/app/actions/checkout';

export function CartDrawer() {
  const { isOpen, close, lines, count, subtotal, hasPendingPrices, setQuantity, remove, lastAdded } = useCart();
  const [pending, startTransition] = useTransition();
  const [notice, setNotice] = useState<string | null>(null);

  function checkout() {
    setNotice(null);
    startTransition(async () => {
      const result = await startCheckout(
        lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })),
      );
      if (result.ok) {
        window.location.href = result.checkoutUrl;
      } else {
        setNotice(result.message);
      }
    });
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button type="button" className="absolute inset-0 bg-ink/25 backdrop-blur-sm" onClick={close} aria-label="Close bag" />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-canvas"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-line px-5 sm:px-7">
              <h2 className="font-ui text-2xs uppercase tracking-widest2">
                Your bag {count > 0 ? <span className="text-muted">({count})</span> : null}
              </h2>
              <button type="button" onClick={close} className="-mr-2 p-2 text-ink transition-opacity hover:opacity-60" aria-label="Close bag">
                <CloseIcon />
              </button>
            </header>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
                <p className="t-body">Your bag is empty.</p>
                <Link href="/collections/diffusers" onClick={close} className="btn-outline btn-sm">
                  Browse the collection
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-5 sm:px-7">
                  {lines.map((line) => (
                    <motion.li
                      key={line.variantId}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-4 border-b border-line py-6 last:border-0"
                    >
                      <Link href={`/products/${line.handle}`} onClick={close} className="media-frame h-28 w-[5.5rem] shrink-0">
                        <Image src={line.image} alt={line.imageAlt} fill sizes="88px" className="object-contain" />
                      </Link>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <Link href={`/products/${line.handle}`} onClick={close} className="block font-sans text-[0.9375rem] leading-snug text-ink">
                              {line.title}
                            </Link>
                            {line.variantTitle ? <p className="t-meta mt-1">{line.variantTitle}</p> : null}
                            {lastAdded === line.variantId ? (
                              <p className="t-meta mt-1 text-accent" role="status">
                                Just added
                              </p>
                            ) : null}
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(line.variantId)}
                            className="shrink-0 font-ui text-2xs uppercase tracking-wider2 text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                          <QuantityStepper
                            value={line.quantity}
                            onChange={(q) => setQuantity(line.variantId, q)}
                            min={0}
                            size="sm"
                            label={`Quantity for ${line.title}`}
                          />
                          <span className="font-sans text-[0.875rem] tabular-nums text-ink">
                            {line.price === null ? (
                              <span className="font-ui text-2xs uppercase tracking-wider2 text-muted">On request</span>
                            ) : (
                              formatMoney(line.price * line.quantity)
                            )}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <footer className="shrink-0 border-t border-line px-5 py-6 sm:px-7">
                  <div className="flex items-baseline justify-between">
                    <span className="font-ui text-2xs uppercase tracking-widest2">Subtotal</span>
                    <span className="font-sans text-lg tabular-nums text-ink">
                      {hasPendingPrices ? (
                        <span className="font-ui text-2xs uppercase tracking-wider2 text-muted">
                          Confirmed at checkout
                        </span>
                      ) : (
                        formatMoney(subtotal)
                      )}
                    </span>
                  </div>

                  <p className="t-meta mt-2">Taxes and delivery calculated at checkout.</p>

                  <button type="button" onClick={checkout} disabled={pending} className="btn-primary mt-5 w-full">
                    {pending ? 'Opening checkout…' : 'Checkout'}
                  </button>

                  {notice ? (
                    <p className="t-meta mt-4 border-l-2 border-accent pl-3" role="status">
                      {notice}
                    </p>
                  ) : null}

                  <button type="button" onClick={close} className="mt-4 w-full font-ui text-2xs uppercase tracking-wider2 text-muted transition-colors hover:text-ink">
                    Continue shopping
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
