type IconProps = { className?: string };

const base = 'h-[18px] w-[18px]';

export function BagIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 6h13l-1 11.5h-11L3.5 6Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M7.25 8V5.5a2.75 2.75 0 0 1 5.5 0V8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.1" />
      <path d="m13.4 13.4 3.1 3.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h14M3 13h14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <path d="M1.5 6h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ZoomIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.1" />
      <path d="M9 6.75v4.5M6.75 9h4.5M13.4 13.4l3.1 3.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
