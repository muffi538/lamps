import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

/**
 * On-demand cache purge for Shopify webhooks.
 *
 * Point a Shopify webhook (products/create, products/update, inventory_levels/update)
 * at:  https://your-domain.com/api/revalidate?secret=REVALIDATION_SECRET&tag=products
 *
 * Until Shopify is connected nothing calls this and the storefront is fully
 * static, so there is no cost to leaving it in place.
 */
export async function POST(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get('secret');
  const tag = url.searchParams.get('tag') ?? 'products';

  if (!process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ ok: false, error: 'REVALIDATION_SECRET is not configured.' }, { status: 503 });
  }

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ ok: false, error: 'Invalid secret.' }, { status: 401 });
  }

  revalidateTag(tag);
  return NextResponse.json({ ok: true, revalidated: tag, now: Date.now() });
}
