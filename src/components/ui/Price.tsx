import { formatMoney, hasPricing } from '@/lib/money';
import { cn } from '@/lib/utils';

export function Price({
  amount,
  className,
  size = 'base',
}: {
  amount: number | null | undefined;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}) {
  const sizes = {
    sm: 'text-[0.8125rem]',
    base: 'text-[0.9375rem]',
    lg: 'text-lg',
  } as const;

  if (!hasPricing(amount)) {
    return (
      <span
        className={cn('font-ui uppercase tracking-wider2 text-muted', sizes[size], className)}
        title="Pricing is being finalised"
      >
        Price on request
      </span>
    );
  }

  return (
    <span className={cn('font-sans tabular-nums text-ink', sizes[size], className)}>
      {formatMoney(amount)}
    </span>
  );
}
