import type { Product } from './types';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LAMPS — extracted from the supplied J L Industries Hub Pvt Ltd catalogue.
 *
 *  Note for the merchant: the catalogue contains exactly one dedicated lamp
 *  (the Floating Wireless Charging Lamp, page 5). Two further pieces — the
 *  Anti Gravity Diffuser (page 3) and the Candlelight Style Electric Diffuser
 *  (page 13) — are listed in BOTH `lamps` and `diffusers` because their
 *  catalogue pages lead on ambient light. Remove 'lamps' from their
 *  `collections` array in src/lib/catalog/diffusers.ts if you would rather keep
 *  the two collections strictly separate.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const lamps: Product[] = [
  {
    handle: 'floating-wireless-charging-lamp',
    title: 'Floating Wireless Charging Lamp',
    subtitle: 'A spiral ribbon holding a lit globe, over a 15W Qi charging base.',
    catalogueTagline: 'Light. Motion. Power. — A brighter way to elevate your everyday.',
    productType: 'Table Lamp',
    collections: ['lamps'],
    sourcePage: 5,
    price: null,
    featured: true,
    bestseller: true,
    description: [
      'The Floating Wireless Charging Lamp is the signature piece of the collection, and the only one that genuinely does two jobs at once. A single ribbon of metal sweeps from a weighted circular base up and over itself, cradling an opal globe that appears suspended in the middle of the curve. Above it, a flat disc closes the composition.',
      'The base is a 15W fast Qi charger. Set a compatible phone down on it and the lamp keeps it topped up through the evening, which is what makes it work on a bedside or a desk rather than simply on a shelf.',
      'The lamp rotates — the catalogue describes a unique rotating design — and brightness is set by touch, with three levels. The light itself is warm and soft, intended to be looked at directly without glare. The catalogue positions the piece for the home, the bedroom, the office, and as a gift.',
    ],
    features: [
      { title: '15W fast Qi wireless charging', body: 'Charges compatible devices from the lamp base. Stated at 15W in the catalogue.' },
      { title: 'Rotating lamp', body: 'A rotating design described in the catalogue as giving a mesmerising effect.' },
      { title: 'Touch control', body: 'Adjustable brightness across three light levels, set by touch.' },
      { title: 'Warm ambient light', body: 'Soft, eye-friendly warm light suited to evening use.' },
      { title: 'Modern and elegant design', body: 'A sculptural spiral in a dark finish with an opal globe.' },
      { title: 'For home, bedroom and office', body: 'Catalogue lists all three settings, and gifting.' },
    ],
    specs: [
      { label: 'Lighting type', value: 'Warm ambient table lamp with an opal globe diffuser' },
      { label: 'Light source', value: 'Integrated — non-replaceable globe (bulb fitting not specified in the catalogue)' },
      { label: 'Brightness levels', value: 'Three, selected by touch control' },
      { label: 'Colour temperature', value: 'Described as warm light — exact Kelvin value to be confirmed' },
      { label: 'Wireless charging output', value: '15W fast Qi charging for compatible devices' },
      { label: 'Rotation', value: 'Rotating lamp design' },
      { label: 'Controls', value: 'Touch control on the base' },
      { label: 'Power source', value: null },
      { label: 'Input voltage', value: null },
      { label: 'Rated power', value: null },
      { label: 'Lumen output', value: null },
      { label: 'Bulb compatibility', value: null },
      { label: 'Model / article number', value: null },
      { label: 'Country of origin', value: null },
      { label: 'Warranty', value: null },
    ],
    dimensions: [
      { label: 'Height', value: null },
      { label: 'Base diameter', value: null },
      { label: 'Globe diameter', value: null },
      { label: 'Net weight', value: null },
      { label: 'Cable length', value: null },
    ],
    materials: [
      { label: 'Spiral and base', value: 'Metal ribbon and weighted disc base in a dark finish' },
      { label: 'Globe', value: 'Opal diffuser globe' },
      { label: 'Charging surface', value: 'Qi charging pad set into the base' },
      { label: 'Finish', value: null },
    ],
    inTheBox: ['Floating Wireless Charging Lamp', null],
    usage: [
      'Stand the lamp on a firm, level surface — the spiral is deliberately weighted and needs a true base.',
      'Connect the power supply to the lamp base and switch on at the mains.',
      'Touch the control on the base to switch the lamp on and to cycle the three brightness levels.',
      'To charge, lay a Qi-compatible phone flat and centred on the charging pad in the base. Remove thick cases and any metal card holders first.',
      'Do not place keys, coins or cards on the charging pad while it is active.',
    ],
    care: [
      'Unplug the lamp before cleaning.',
      'Wipe the metal spiral with a dry microfibre cloth; a damp cloth may mark the finish.',
      'Clean the opal globe with a soft dry cloth only — do not use glass cleaner or solvents.',
      'Keep the charging pad free of dust and grit so devices sit flat on it.',
      'Do not immerse any part of the lamp, and do not use it in a bathroom or outdoors.',
    ],
    options: [],
    variants: [
      { id: 'floating-wireless-charging-lamp-default', sku: 'JL-LMP-FLOAT-QI', title: 'Default', selectedOptions: [], availableForSale: true, price: null },
    ],
    images: [
      { src: '/products/floating-wireless-charging-lamp/main.jpg', alt: 'Floating Wireless Charging Lamp with a lit opal globe held in a dark metal spiral', caption: 'Lit' },
      { src: '/products/floating-wireless-charging-lamp/wireless-charging.jpg', alt: 'Phone charging on the lamp base charging pad', caption: '15W charging' },
      { src: '/products/floating-wireless-charging-lamp/rotating.jpg', alt: 'The rotating globe and spiral of the lamp', caption: 'Rotating design' },
      { src: '/products/floating-wireless-charging-lamp/touch-control.jpg', alt: 'A finger operating the touch control on the lamp base', caption: 'Touch control' },
      { src: '/products/floating-wireless-charging-lamp/brightness-levels.jpg', alt: 'The lamp shown at three brightness levels', caption: 'Three levels' },
    ],
    related: ['anti-gravity-diffuser', 'candlelight-style-electric-diffuser', 'circuitra-rotating-charging-dock'],
  },
];
