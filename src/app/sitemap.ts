import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { allProducts, collections } from '@/lib/catalog';
import { policies } from '@/lib/policies';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  return [
    { url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/our-story'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: url('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    ...collections.map((c) => ({
      url: url(`/collections/${c.handle}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...allProducts.map((p) => ({
      url: url(`/products/${p.handle}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...policies.map((p) => ({
      url: url(`/policies/${p.slug}`),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
