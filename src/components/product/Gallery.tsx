'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ProductImage } from '@/lib/catalog/types';
import { CloseIcon, ZoomIcon } from '@/components/site/Icons';
import { cn } from '@/lib/utils';

/**
 * Product gallery.
 *
 * Images are shown at their own aspect ratio — the frame follows the
 * photograph rather than the photograph being padded or cropped to fit a fixed
 * frame. Height is capped so a very tall image cannot take over the page.
 *
 * Handles any number of images: the desktop thumbnail rail scrolls once it
 * runs out of room, and the mobile carousel is a snap scroller.
 */
const MAX_STAGE_VH = 78;

/** Caps the stage height so a very tall photograph cannot take over the page. */
function stageWidthCap(image: ProductImage) {
  return { maxWidth: `calc(${MAX_STAGE_VH}vh * ${image.width / image.height})` };
}

export function Gallery({
  images,
  activeIndex,
  onActiveIndexChange,
  productTitle,
}: {
  images: ProductImage[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  productTitle: string;
}) {
  const [zooming, setZooming] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const [lightbox, setLightbox] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const active = images[activeIndex] ?? images[0];

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin(`${((event.clientX - rect.left) / rect.width) * 100}% ${((event.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  // Keep the mobile carousel in step when a variant changes the active image.
  useEffect(() => {
    const el = mobileRef.current;
    if (!el) return;
    const target = el.children[activeIndex] as HTMLElement | undefined;
    if (target) el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  }, [activeIndex]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowRight') onActiveIndexChange((activeIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onActiveIndexChange((activeIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, activeIndex, images.length, onActiveIndexChange]);

  if (!active) return null;

  return (
    <>
      {/* ── Desktop: thumbnail rail + stage ──────────────────────────────── */}
      <div className="hidden gap-6 md:flex">
        {images.length > 1 ? (
          <ul
            className="hide-scrollbar flex max-h-[78vh] w-[72px] shrink-0 flex-col gap-3 overflow-y-auto"
            aria-label={`${productTitle} images`}
          >
            {images.map((image, i) => (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => onActiveIndexChange(i)}
                  aria-label={image.caption ? `View ${image.caption}` : `View image ${i + 1} of ${images.length}`}
                  aria-current={i === activeIndex}
                  className={cn(
                    'relative block aspect-square w-full overflow-hidden bg-shell transition-[opacity,box-shadow] duration-300',
                    i === activeIndex ? 'opacity-100 ring-1 ring-inset ring-ink' : 'opacity-60 hover:opacity-100',
                  )}
                >
                  <Image src={image.src} alt="" fill sizes="72px" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="mx-auto w-full" style={stageWidthCap(active)}>
          <div
            onMouseEnter={() => setZooming(true)}
            onMouseLeave={() => setZooming(false)}
            onMouseMove={onMouseMove}
            onClick={() => setLightbox(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightbox(true);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Open full-size image"
            style={{ aspectRatio: `${active.width} / ${active.height}` }}
            className="group relative w-full cursor-zoom-in overflow-hidden bg-shell transition-[aspect-ratio] duration-500 ease-premium"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  priority
                  sizes="(min-width:1280px) 46vw, (min-width:768px) 55vw, 100vw"
                  {...(active.blurDataURL ? { placeholder: 'blur' as const, blurDataURL: active.blurDataURL } : {})}
                  className="object-cover transition-transform duration-[600ms] ease-premium"
                  style={{ transformOrigin: origin, transform: zooming ? 'scale(1.75)' : 'scale(1)' }}
                />
              </motion.div>
            </AnimatePresence>

            <span className="pointer-events-none absolute bottom-4 right-4 grid h-9 w-9 place-items-center bg-canvas/85 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIcon />
            </span>
          </div>

          <p className="t-meta mt-3" aria-live="polite">
            {active.caption ?? `${activeIndex + 1} of ${images.length}`}
          </p>
          </div>
        </div>
      </div>

      {/* ── Mobile: snap carousel ────────────────────────────────────────── */}
      <div className="md:hidden">
        <div
          ref={mobileRef}
          className="hide-scrollbar -mx-5 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto scroll-smooth px-5"
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / (el.clientWidth * 0.88 + 12));
            if (index !== activeIndex && index >= 0 && index < images.length) onActiveIndexChange(index);
          }}
        >
          {images.map((image, i) => (
            <div key={image.src} className="w-[88%] shrink-0 snap-start bg-shell">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="88vw"
                priority={i === 0}
                {...(image.blurDataURL ? { placeholder: 'blur' as const, blurDataURL: image.blurDataURL } : {})}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="t-meta truncate">{active.caption ?? `${activeIndex + 1} of ${images.length}`}</p>
          <div className="flex shrink-0 gap-1.5" aria-hidden="true">
            {images.map((image, i) => (
              <span key={image.src} className={cn('h-px w-5 transition-colors duration-300', i === activeIndex ? 'bg-ink' : 'bg-line')} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${productTitle} — full size image`}
          >
            <button
              type="button"
              onClick={() => setLightbox(false)}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center text-ink transition-opacity hover:opacity-60"
              aria-label="Close"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="flex h-full flex-col">
              <div className="relative flex-1">
                <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain p-6 md:p-16" />
              </div>

              {images.length > 1 ? (
                <div className="hide-scrollbar flex shrink-0 justify-start gap-3 overflow-x-auto border-t border-line px-5 py-4 md:justify-center">
                  {images.map((image, i) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => onActiveIndexChange(i)}
                      className={cn(
                        'relative aspect-square h-16 shrink-0 overflow-hidden bg-shell transition-opacity',
                        i === activeIndex ? 'opacity-100 ring-1 ring-inset ring-ink' : 'opacity-60 hover:opacity-100',
                      )}
                      aria-label={`Image ${i + 1}`}
                    >
                      <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
