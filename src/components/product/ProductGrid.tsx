import type { Product } from '@/lib/catalog/types';
import { ProductCard } from './ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function ProductGrid({
  products,
  columns = 4,
  priorityCount = 0,
  className,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
  priorityCount?: number;
  className?: string;
}) {
  const colClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4',
  } as const;

  const sizes = {
    2: '(min-width:768px) 45vw, 88vw',
    3: '(min-width:1024px) 30vw, (min-width:640px) 45vw, 88vw',
    4: '(min-width:1280px) 22vw, (min-width:768px) 30vw, 45vw',
  } as const;

  return (
    <ul className={cn('grid gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16', colClasses[columns], className)}>
      {products.map((product, i) => (
        <Reveal as="li" key={product.handle} delay={Math.min(i, 5) * 0.05} className="h-full">
          <ProductCard product={product} priority={i < priorityCount} sizes={sizes[columns]} />
        </Reveal>
      ))}
    </ul>
  );
}
