import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
  width = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  width?: 'default' | 'wide' | 'narrow' | 'full';
}) {
  const widths = {
    narrow: 'max-w-3xl',
    default: 'max-w-shell',
    wide: 'max-w-[110rem]',
    full: 'max-w-none',
  } as const;

  return <div className={cn('mx-auto w-full shell-x', widths[width], className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'md:flex-col md:items-center md:text-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
        {eyebrow ? <p className="t-eyebrow mb-4">{eyebrow}</p> : null}
        <h2 className="t-h2">{title}</h2>
        {description ? <p className="t-body mt-5 max-w-xl">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
