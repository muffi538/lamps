import { NextResponse } from 'next/server';
import { searchProducts } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams.get('q') ?? '';
  const results = searchProducts(q)
    .slice(0, 8)
    .map((p) => ({
      handle: p.handle,
      title: p.title,
      subtitle: p.subtitle,
      productType: p.productType,
      image: p.images[0]?.src ?? '',
      imageAlt: p.images[0]?.alt ?? p.title,
      price: p.price,
    }));

  return NextResponse.json({ results });
}
