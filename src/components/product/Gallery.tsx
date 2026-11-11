'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ProductImage } from '@/lib/catalog/types';
import { CloseIcon, ZoomIcon } from '@/components/site/Icons';
import { cn } from '@/lib/utils';

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
  const stageRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const active = images[activeIndex] ?? images[0];

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }, []);

  // Keep the mobile carousel in sync when a variant changes the active image.
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
      {/* ── Desktop: thumbnail rail + zoomable stage ─────────────────────── */}
      <div className="hidden gap-6 md:flex">
        {images.length > 1 ? (
          <ul className="flex w-[72px] shrink-0 flex-col gap-3" aria-label={`${productTitle} images`}>
            {images.map((image, i) => (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => onActiveIndexChange(i)}
                  aria-label={image.caption ? `View ${image.caption}` : `View image ${i + 1}`}
                  aria-current={i === activeIndex}
                  className={cn(
                    'media-frame block aspect-[4/5] w-full transition-[opacity,box-shadow] duration-300',
                    i === activeIndex
                      ? 'opacity-100 ring-1 ring-inset ring-ink'
                      : 'opacity-70 hover:opacity-100',
                  )}
                >
                  <Image src={image.src} alt="" fill sizes="72px" className="object-contain" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="min-w-0 flex-1">
          <div
            ref={stageRef}
            onMouseEnter={() => setZooming(true)}
            onMouseLeave={() => setZooming(false)}
            onMouseMove={onMouseMove}
            onClick={() => setLightbox(true)}
            className="media-frame group aspect-[4/5] w-full cursor-zoom-in"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightbox(true);
              }
            }}
            aria-label="Open full-size image"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  priority
                  sizes="(min-width:1280px) 46vw, (min-width:768px) 55vw, 100vw"
                  className="object-contain transition-transform duration-[600ms] ease-premium"
                  style={{ transformOrigin: origin, transform: zooming ? 'scale(1.75)' : 'scale(1)' }}
                />
              </motion.div>
            </AnimatePresence>

            <span className="pointer-events-none absolute bottom-4 right-4 grid h-9 w-9 place-items-center bg-canvas/85 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIcon />
            </span>
          </div>

          {active.caption ? <p className="t-meta mt-3">{active.caption}</p> : null}
        </div>
      </div>

      {/* ── Mobile: snap carousel ────────────────────────────────────────── */}
      <div className="md:hidden">
        <div
          ref={mobileRef}
          className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5"
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / (el.clientWidth * 0.88 + 12));
            if (index !== activeIndex && index >= 0 && index < images.length) onActiveIndexChange(index);
          }}
        >
          {images.map((image) => (
            <div key={image.src} className="media-frame aspect-[4/5] w-[88%] shrink-0 snap-start">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="88vw"
                className="object-contain"
                priority={image === images[0]}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="t-meta">{active.caption ?? `${activeIndex + 1} / ${images.length}`}</p>
          <div className="flex gap-1.5" aria-hidden="true">
            {images.map((image, i) => (
              <span
                key={image.src}
                className={cn('h-px w-5 transition-colors duration-300', i === activeIndex ? 'bg-ink' : 'bg-line')}
              />
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
                        'media-frame relative aspect-[4/5] h-16 shrink-0 transition-opacity',
                        i === activeIndex ? 'opacity-100 ring-1 ring-inset ring-ink' : 'opacity-60 hover:opacity-100',
                      )}
                      aria-label={`Image ${i + 1}`}
                    >
                      <Image src={image.src} alt="" fill sizes="64px" className="object-contain" />
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
