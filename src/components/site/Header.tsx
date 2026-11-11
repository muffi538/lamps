'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/config/site';
import { useCart } from '@/components/cart/CartProvider';
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from './Icons';
import { SearchPanel } from './SearchPanel';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const { count, open, isHydrated } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 bg-canvas/90 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 ease-premium',
          'border-b',
          scrolled ? 'border-line' : 'border-transparent',
        )}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-shell items-center justify-between shell-x">
          {/* Left: mobile menu toggle + wordmark */}
          <div className="flex items-center gap-3 lg:gap-0">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="-ml-2 p-2 text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <MenuIcon />
            </button>

            <Link
              href="/"
              className="font-sans text-[0.9375rem] font-medium uppercase tracking-widest2 text-ink"
              aria-label={`${site.brand.name} — home`}
            >
              {site.brand.wordmark}
            </Link>
          </div>

          {/* Centre: primary navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {site.nav.map((item) => {
                const active =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'link-underline font-ui text-[0.8125rem] tracking-wide transition-colors duration-300',
                        active ? 'text-ink' : 'text-muted hover:text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: search + bag */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-ink transition-opacity duration-300 hover:opacity-60"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <button
              type="button"
              onClick={open}
              className="relative -mr-2 flex items-center gap-2 p-2 text-ink transition-opacity duration-300 hover:opacity-60"
              aria-label={`Shopping bag, ${count} item${count === 1 ? '' : 's'}`}
            >
              <BagIcon />
              <span
                className={cn(
                  'min-w-[1.25rem] font-ui text-2xs tabular-nums transition-opacity duration-300',
                  isHydrated && count > 0 ? 'opacity-100' : 'opacity-0',
                )}
                aria-hidden="true"
              >
                {count}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.nav
              aria-label="Mobile"
              className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-canvas"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-[var(--header-h)] items-center justify-between border-b border-line px-5">
                <span className="font-sans text-[0.9375rem] font-medium uppercase tracking-widest2">
                  {site.brand.wordmark}
                </span>
                <button type="button" onClick={() => setMenuOpen(false)} className="-mr-2 p-2" aria-label="Close menu">
                  <CloseIcon />
                </button>
              </div>

              <ul className="flex flex-col px-5 py-4">
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                    className="border-b border-line last:border-0"
                  >
                    <Link href={item.href} className="block py-5 font-sans text-2xl font-light tracking-[-0.02em]">
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto border-t border-line px-5 py-6">
                <Link href="/collections/living" className="t-meta link-underline">
                  Living &amp; Desk
                </Link>
                <p className="t-meta mt-4">{site.contact.email}</p>
                <p className="t-meta">{site.contact.phone}</p>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
