import { productImages, type GeneratedImage, type ImageRole } from './product-images.generated';
import type { ImageDetail, ProductImage } from './types';

export type { ImageRole } from './product-images.generated';

const ROLE_LABEL: Record<ImageRole, string> = {
  main: '',
  angle: 'Alternate view',
  detail: 'Detail',
  colour: 'Colourway',
  lifestyle: 'In a room',
  packaging: 'Packaging',
};

function humanise(value: string): string {
  const s = value.replace(/-/g, ' ').trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Caption shown under the gallery when the product data doesn't supply one. */
function fallbackCaption(image: GeneratedImage): string | undefined {
  if (image.role === 'main') return undefined;
  if (image.description) return humanise(image.description);
  return ROLE_LABEL[image.role] || undefined;
}

/** Alt text used when the product data doesn't supply one. */
function fallbackAlt(title: string, image: GeneratedImage): string {
  const parts = [title];
  const detail = image.description ? humanise(image.description).toLowerCase() : ROLE_LABEL[image.role].toLowerCase();
  if (image.role !== 'main' && detail) parts.push(detail);
  return parts.join(' — ');
}

/**
 * Builds a product's gallery from the contents of its own folder.
 *
 * Order, and therefore which image is the hero, comes from the filename
 * prefix. `imageDetails` is an optional overlay keyed by filename (without
 * extension) that supplies hand-written alt text and captions; anything it
 * doesn't cover falls back to the filename, so a product with a folder of
 * correctly named images renders correctly with no product data at all.
 *
 * Because the lookup is by handle into that product's own folder, images can
 * never leak between products.
 */
export function resolveProductImages(
  handle: string,
  title: string,
  details?: Record<string, ImageDetail>,
): ProductImage[] {
  const generated = productImages[handle];

  if (!generated || generated.length === 0) {
    throw new Error(
      `No images found for "${handle}". Create public/products/${handle}/ and add at least 01-main.jpg, ` +
        `then run \`npm run images:manifest\`.`,
    );
  }

  if (details) {
    const known = new Set(generated.map((i) => i.file));
    for (const key of Object.keys(details)) {
      if (!known.has(key)) {
        throw new Error(
          `"${handle}" has imageDetails for "${key}" but public/products/${handle}/${key}.* does not exist. ` +
            `Known files: ${[...known].join(', ')}`,
        );
      }
    }
  }

  return generated.map((image) => {
    const detail = details?.[image.file];
    return {
      src: image.src,
      alt: detail?.alt ?? fallbackAlt(title, image),
      caption: detail?.caption ?? fallbackCaption(image),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL,
      role: image.role,
      ...(detail?.variant ? { variant: detail.variant } : {}),
    };
  });
}

/** Every handle that has a folder of images, for validation and tooling. */
export function handlesWithImages(): string[] {
  return Object.keys(productImages);
}
