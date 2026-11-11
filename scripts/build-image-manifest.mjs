#!/usr/bin/env node
/**
 * Scans public/products/<product-handle>/ and generates a typed manifest.
 *
 * The folder is the source of truth: to add a product you create its folder,
 * drop images in using the naming convention below, run this script (it runs
 * automatically on `npm run dev` and `npm run build`) and add the product's
 * copy to src/lib/catalog/.
 *
 *   public/products/<product-handle>/
 *     01-main.jpg                 <- required, shown first and used on cards
 *     02-angle-three-quarter.jpg
 *     03-detail-control.jpg
 *     04-colour-walnut.jpg
 *     05-lifestyle-bedside.jpg
 *     06-packaging-in-the-box.jpg
 *
 *   <NN>-<role>[-<description>].<ext>
 *     NN          two-digit display order, 01 first
 *     role        main | angle | detail | colour | lifestyle | packaging
 *     description optional, becomes the fallback caption
 *
 * Images can never be shared between products: a product's gallery is exactly
 * the contents of its own folder, resolved by handle.
 *
 * Images are used at whatever aspect ratio they happen to be — the gallery
 * frame follows the photograph. Nothing here pads, stretches or crops, so a
 * file on disk is exactly what a customer sees. Cards in the product grid use
 * a shared 4:5 frame and letterbox onto the page background, which is what
 * keeps the grid aligned without altering any image.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'public', 'products');
const OUT = path.join(ROOT, 'src', 'lib', 'catalog', 'product-images.generated.ts');

const ROLES = ['main', 'angle', 'detail', 'colour', 'lifestyle', 'packaging'];
const FILE_RE = new RegExp(`^(\\d{2})-(${ROLES.join('|')})(?:-([a-z0-9-]+))?\\.(jpe?g|png|webp|avif)$`);
const HANDLE_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** Below this the image will look soft on a retina product page. */
const MIN_LONG_EDGE = 600;

const errors = [];
const warnings = [];

async function build() {
  if (!fs.existsSync(DIR)) {
    throw new Error(`Missing ${path.relative(ROOT, DIR)}`);
  }

  const handles = fs
    .readdirSync(DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const manifest = {};
  let total = 0;

  for (const handle of handles) {
    if (!HANDLE_RE.test(handle)) {
      errors.push(`${handle}/ — folder name must be a lowercase, hyphen-separated handle`);
      continue;
    }

    const files = fs
      .readdirSync(path.join(DIR, handle))
      .filter((f) => !f.startsWith('.'))
      .sort();

    if (files.length === 0) {
      errors.push(`${handle}/ — folder is empty`);
      continue;
    }

    const seen = new Map();
    const images = [];

    for (const file of files) {
      const m = FILE_RE.exec(file);
      if (!m) {
        errors.push(
          `${handle}/${file} — expected <NN>-<role>[-<description>].<ext>, role one of ${ROLES.join(', ')}`,
        );
        continue;
      }

      const [, order, role, description] = m;
      if (seen.has(order)) {
        errors.push(`${handle}/ — order "${order}" used by both ${seen.get(order)} and ${file}`);
      }
      seen.set(order, file);

      const abs = path.join(DIR, handle, file);
      const meta = await sharp(abs).metadata();
      const { width, height } = meta;

      if (!width || !height) {
        errors.push(`${handle}/${file} — could not read image dimensions`);
        continue;
      }

      if (Math.max(width, height) < MIN_LONG_EDGE) {
        warnings.push(`${handle}/${file} — ${width}x${height} is small and may look soft on a retina screen.`);
      }

      const blur = await sharp(abs).resize(10, 13, { fit: 'fill' }).jpeg({ quality: 50 }).toBuffer();

      images.push({
        file: file.replace(/\.[^.]+$/, ''),
        src: `/products/${handle}/${file}`,
        role,
        description: description ?? null,
        order: Number(order),
        width,
        height,
        blurDataURL: `data:image/jpeg;base64,${blur.toString('base64')}`,
      });
      total += 1;
    }

    if (images.length && images[0].role !== 'main') {
      errors.push(`${handle}/ — first image must be 01-main.<ext>, found ${images[0].file}`);
    }

    manifest[handle] = images;
  }

  if (errors.length) {
    console.error('\n✗ Product image manifest failed:\n');
    for (const e of errors) console.error(`   ${e}`);
    console.error('');
    process.exit(1);
  }

  const body = `// GENERATED FILE — do not edit by hand.
// Run \`npm run images:manifest\` (it also runs on dev and build).
// Source of truth: public/products/<product-handle>/
//
// Naming: <NN>-<role>[-<description>].<ext>
// Roles:  ${ROLES.join(' | ')}

export type ImageRole = ${ROLES.map((r) => `'${r}'`).join(' | ')};

export type GeneratedImage = {
  /** Filename without extension — the key used in a product's \`imageDetails\`. */
  file: string;
  src: string;
  role: ImageRole;
  description: string | null;
  order: number;
  width: number;
  height: number;
  blurDataURL: string;
};

/** Keyed by product handle. A product's gallery is exactly its own folder. */
export const productImages: Record<string, GeneratedImage[]> = ${JSON.stringify(manifest, null, 2)};

export const IMAGE_ROLES: ImageRole[] = ${JSON.stringify(ROLES)};
`;

  fs.writeFileSync(OUT, body);

  if (warnings.length) {
    console.warn(`\n⚠ ${warnings.length} image(s) worth a second look:\n`);
    for (const w of warnings) console.warn(`   ${w}`);
    console.warn('');
  }

  checkHandWrittenReferences();

  console.log(
    `✓ Image manifest: ${total} images across ${Object.keys(manifest).length} products -> ${path.relative(ROOT, OUT)}`,
  );
}

/**
 * A few images are referenced by hand rather than through the manifest —
 * collection tiles and the editorial photography on the home and story pages.
 * Those paths can silently rot when a file is renamed, so verify every one of
 * them points at a file that exists.
 */
function checkHandWrittenReferences() {
  const sourceFiles = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(ts|tsx)$/.test(entry.name) && !entry.name.endsWith('.generated.ts')) sourceFiles.push(full);
    }
  };
  walk(path.join(ROOT, 'src'));

  const broken = [];
  for (const file of sourceFiles) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/['"`](\/(?:products|editorial)\/[^'"`$]+?\.(?:jpe?g|png|webp|avif|svg))['"`]/g)) {
      const asset = path.join(ROOT, 'public', match[1]);
      if (!fs.existsSync(asset)) broken.push(`${path.relative(ROOT, file)} -> ${match[1]}`);
    }
  }

  if (broken.length) {
    console.error('\n✗ Image references point at files that do not exist:\n');
    for (const b of broken) console.error(`   ${b}`);
    console.error('');
    process.exit(1);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
