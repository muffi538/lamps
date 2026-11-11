'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, SearchIcon } from './Icons';
import { Price } from '@/components/ui/Price';

type Result = {
  handle: string;
  title: string;
  subtitle: string;
  productType: string;
  image: string;
  imageAlt: string;
  price: number | null;
};

export function SearchPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const controller = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal });
        const data = (await res.json()) as { results: Result[] };
        setResults(data.results);
      } catch {
        /* aborted */
      } finally {
        setLoading(false);
      }
    }, 180);
    return () => {
      clearTimeout(t);
      controller.abort();
    };
  }, [query, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <button type="button" className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onClick={onClose} aria-label="Close search" />

          <motion.div
            className="absolute inset-x-0 top-0 max-h-[85vh] overflow-y-auto bg-canvas"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-shell shell-x">
              <div className="flex h-[var(--header-h)] items-center gap-4 border-b border-line">
                <SearchIcon className="h-[18px] w-[18px] shrink-0 text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Search lamps, diffusers, desk objects…"
                  className="h-full w-full border-0 bg-transparent font-sans text-base font-light tracking-[-0.01em] text-ink outline-none placeholder:text-muted"
                  aria-label="Search products"
                />
                <button type="button" onClick={onClose} className="-mr-2 shrink-0 p-2 text-ink" aria-label="Close search">
                  <CloseIcon />
                </button>
              </div>

              <div className="py-8" aria-live="polite">
                {query.trim().length < 2 ? (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="t-eyebrow">Popular</span>
                    {['Flame', 'Rain', 'Wood grain', 'Lamp', 'Humidifier'].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="link-underline font-sans text-sm text-muted transition-colors hover:text-ink"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                ) : loading ? (
                  <p className="t-meta">Searching…</p>
                ) : results.length === 0 ? (
                  <p className="t-body">
                    No products match “{query.trim()}”. Try a product name, a material, or a collection.
                  </p>
                ) : (
                  <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {results.map((r) => (
                      <li key={r.handle}>
                        <Link href={`/products/${r.handle}`} className="group flex items-center gap-5" onClick={onClose}>
                          <div className="media-frame h-20 w-16 shrink-0">
                            <Image
                              src={r.image}
                              alt={r.imageAlt}
                              fill
                              sizes="64px"
                              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="t-eyebrow mb-1">{r.productType}</p>
                            <p className="truncate font-sans text-[0.9375rem] text-ink">{r.title}</p>
                            <Price amount={r.price} size="sm" className="mt-1 block" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {query.trim().length >= 2 && results.length > 0 ? (
                  <Link
                    href={`/search?q=${encodeURIComponent(query.trim())}`}
                    onClick={onClose}
                    className="link-underline mt-8 inline-block font-ui text-2xs uppercase tracking-wider2"
                  >
                    See all results
                  </Link>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
