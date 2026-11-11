'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="font-sans text-[0.9375rem] text-ink">{title}</span>
          <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink" />
            <span
              className={cn(
                'absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-premium',
                open ? 'scale-y-0' : 'scale-y-100',
              )}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-2">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
