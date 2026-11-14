/** @type {import('next').NextConfig} */
const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [96, 128, 200, 256, 320, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com', pathname: '/**' },
      ...(shopifyDomain ? [{ protocol: 'https', hostname: shopifyDomain, pathname: '/**' }] : []),
    ],
  },
  async redirects() {
    // With a single collection, /shop and /collections/diffusers listed the
    // same products. /shop is gone from the navigation; this keeps any
    // existing link to it working and gives the listing one canonical URL.
    return [{ source: '/shop', destination: '/collections/diffusers', permanent: true }];
  },

  // NOTE: do not add `Cache-Control: immutable` for /products/* or /editorial/*.
  // Those are stable filenames (main.jpg, hero.jpg) whose contents get replaced
  // when better photography arrives. `immutable` tells browsers AND the Vercel
  // image optimiser never to revalidate, so a replaced image keeps serving the
  // old bytes until the max-age expires. Next's defaults revalidate via ETag,
  // which is correct here and still cheap. Only content-hashed URLs — which
  // Next already emits for /_next/static — may be marked immutable.
};

export default nextConfig;
