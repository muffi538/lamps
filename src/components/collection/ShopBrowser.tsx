'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/lib/catalog/types';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { ChevronIcon } from '@/components/site/Icons';
import { cn } from '@/lib/utils';

type SortKey = 'featured' | 'name-asc' | 'name-desc' | 'type';

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'name-asc', label: 'Name, A–Z' },
  { key: 'name-desc', label: 'Name, Z–A' },
  { key: 'type', label: 'Product type' },
];

export function ShopBrowser({
  products,
  showCollectionFilter = true,
}: {
  products: Product[];
  showCollectionFilter?: boolean;
}) {
  const [collection, setCollection] = useState<string>('all');
  const [types, setTypes] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const collectionOptions = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.collections.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [products]);

  const typeOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.productType))).sort(),
    [products],
  );

  const visible = useMemo(() => {
    let list = products;
    if (collection !== 'all') list = list.filter((p) => p.collections.includes(collection as Product['collections'][number]));
    if (types.length) list = list.filter((p) => types.includes(p.productType));

    const sorted = [...list];
    if (sort === 'name-asc') sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'name-desc') sorted.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === 'type') sorted.sort((a, b) => a.productType.localeCompare(b.productType) || a.title.localeCompare(b.title));
    if (sort === 'featured') sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return sorted;
  }, [products, collection, types, sort]);

  const labels: Record<string, string> = { diffusers: 'Diffusers', living: 'Living & Desk' };
  const hasFilters = collection !== 'all' || types.length > 0;

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[var(--header-h)] z-30 -mx-5 mb-10 border-y border-line bg-canvas/95 px-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
          <div className="hide-scrollbar flex items-center gap-6 overflow-x-auto">
            {showCollectionFilter ? (
              <div className="flex shrink-0 items-center gap-5">
                <button
                  type="button"
                  onClick={() => setCollection('all')}
                  aria-pressed={collection === 'all'}
                  className={cn(
                    'font-ui text-2xs uppercase tracking-wider2 transition-colors duration-300',
                    collection === 'all' ? 'text-ink' : 'text-muted hover:text-ink',
                  )}
                >
                  All
                </button>
                {collectionOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCollection(c)}
                    aria-pressed={collection === c}
                    className={cn(
                      'whitespace-nowrap font-ui text-2xs uppercase tracking-wider2 transition-colors duration-300',
                      collection === c ? 'text-ink' : 'text-muted hover:text-ink',
                    )}
                  >
                    {labels[c] ?? c}
                  </button>
                ))}
              </div>
            ) : null}

            {typeOptions.length > 1 ? (
              <div className="flex shrink-0 items-center gap-2 border-l border-line pl-6">
                {typeOptions.map((t) => {
                  const on = types.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTypes((cur) => (on ? cur.filter((x) => x !== t) : [...cur, t]))}
                      aria-pressed={on}
                      className={cn(
                        'whitespace-nowrap border px-3 py-1.5 font-ui text-2xs tracking-wide transition-all duration-300',
                        on ? 'border-ink text-ink' : 'border-line text-muted hover:border-muted hover:text-ink',
                      )}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-6">
            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setCollection('all');
                  setTypes([]);
                }}
                className="font-ui text-2xs uppercase tracking-wider2 text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Clear
              </button>
            ) : null}

            <span className="t-meta hidden tabular-nums sm:inline">
              {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
            </span>

            <div className="relative">
              <button
                type="button"
                onClick={() => setSortOpen((v) => !v)}
                aria-expanded={sortOpen}
                className="flex items-center gap-2 font-ui text-2xs uppercase tracking-wider2 text-ink"
              >
                {SORTS.find((s) => s.key === sort)?.label}
                <ChevronIcon className={cn('h-3 w-3 transition-transform duration-300', sortOpen && 'rotate-180')} />
              </button>

              {sortOpen ? (
                <>
                  <button type="button" className="fixed inset-0 z-10 cursor-default" onClick={() => setSortOpen(false)} tabIndex={-1} aria-hidden="true" />
                  <ul className="absolute right-0 top-full z-20 mt-3 min-w-[11rem] border border-line bg-canvas py-2 shadow-[0_18px_50px_-24px_rgba(23,23,23,0.28)]">
                    {SORTS.map((s) => (
                      <li key={s.key}>
                        <button
                          type="button"
                          onClick={() => {
                            setSort(s.key);
                            setSortOpen(false);
                          }}
                          className={cn(
                            'block w-full px-4 py-2 text-left font-ui text-[0.8125rem] transition-colors',
                            s.key === sort ? 'text-ink' : 'text-muted hover:text-ink',
                          )}
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="t-body py-20 text-center">No pieces match these filters.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 xl:grid-cols-4">
          {visible.map((product, i) => (
            <Reveal as="li" key={product.handle} delay={Math.min(i, 5) * 0.04} className="h-full">
              <ProductCard
                product={product}
                priority={i < 4}
                sizes="(min-width:1280px) 22vw, (min-width:768px) 30vw, 45vw"
              />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
