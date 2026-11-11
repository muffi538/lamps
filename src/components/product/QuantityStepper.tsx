'use client';

import { MinusIcon, PlusIcon } from '@/components/site/Icons';
import { cn } from '@/lib/utils';

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'base',
  label = 'Quantity',
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'base';
  label?: string;
}) {
  const pad = size === 'sm' ? 'h-9 w-9' : 'h-12 w-12';

  return (
    <div className="inline-flex items-center border border-line" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={cn(pad, 'grid place-items-center text-ink transition-opacity duration-200 hover:opacity-60 disabled:opacity-25')}
        aria-label="Decrease quantity"
      >
        <MinusIcon />
      </button>

      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const n = Number.parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
        }}
        aria-label={label}
        className={cn(
          'w-10 border-0 bg-transparent text-center font-ui tabular-nums text-ink outline-none',
          size === 'sm' ? 'text-[0.8125rem]' : 'text-sm',
          '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        )}
      />

      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={cn(pad, 'grid place-items-center text-ink transition-opacity duration-200 hover:opacity-60 disabled:opacity-25')}
        aria-label="Increase quantity"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
