import { site } from '@/config/site';

export type PolicySection = { heading: string; paragraphs: string[]; pending?: boolean };
export type Policy = { slug: string; title: string; summary: string; sections: PolicySection[] };

/**
 * ⚠️ These policies are drafted scaffolding, not legal advice.
 *
 * Sections marked `pending: true` contain the decisions only the merchant can
 * make — return windows, carriers, charges. Fill those in, have the final text
 * reviewed, and keep this file in sync with the policies you publish inside
 * Shopify admin (Settings → Policies), which are what the Shopify checkout
 * shows at the point of payment.
 */
export const policies: Policy[] = [
  {
    slug: 'shipping',
    title: 'Shipping policy',
    summary: `How orders from ${site.brand.name} are packed, dispatched and delivered.`,
    sections: [
      {
        heading: 'Where we ship from',
        paragraphs: [
          `All orders are packed and dispatched by ${site.brand.legalEntity} from ${site.contact.addressLines.join(', ')}.`,
          'Each piece is shipped in its retail box inside an outer carton. Glass components are additionally protected.',
        ],
      },
      {
        heading: 'Processing time',
        paragraphs: ['TO BE CONFIRMED — state how many working days pass between an order being placed and it leaving the warehouse, and whether orders placed at weekends or on public holidays are processed on the next working day.'],
        pending: true,
      },
      {
        heading: 'Delivery areas and timelines',
        paragraphs: ['TO BE CONFIRMED — list the regions you ship to (domestic only, or international), the carriers you use, and the expected transit time for each region.'],
        pending: true,
      },
      {
        heading: 'Shipping charges',
        paragraphs: ['TO BE CONFIRMED — state your delivery charges, any free-shipping threshold, and whether duties and taxes are included for international destinations. Once Shopify Shipping is configured, live rates are calculated at checkout and this section should describe them.'],
        pending: true,
      },
      {
        heading: 'Tracking',
        paragraphs: [
          'A dispatch confirmation with a tracking number is emailed as soon as your parcel leaves us. Tracking can take up to 24 hours to show movement.',
        ],
      },
      {
        heading: 'Damaged or missing parcels',
        paragraphs: [
          `Inspect your parcel on delivery. If anything has arrived damaged, photograph the outer carton and the item and email ${site.contact.email} within 48 hours of delivery so we can arrange a replacement or refund.`,
        ],
      },
    ],
  },
  {
    slug: 'returns',
    title: 'Returns policy',
    summary: 'Changing your mind, faulty items and how refunds are issued.',
    sections: [
      {
        heading: 'Return window',
        paragraphs: ['TO BE CONFIRMED — state how many days after delivery a customer may request a return, and whether the window differs for sale items.'],
        pending: true,
      },
      {
        heading: 'Condition of returned items',
        paragraphs: [
          'Items must be unused, with all accessories and documentation, in their original retail packaging. Diffusers and humidifiers that have had water or oil added cannot be returned unless they are faulty.',
          'We may reduce a refund to reflect any loss in value caused by handling beyond what is necessary to establish the nature and function of the product.',
        ],
      },
      {
        heading: 'How to start a return',
        paragraphs: [
          `Email ${site.contact.email} with your order number and the reason for the return. We will confirm the return address and, where applicable, issue a return label.`,
        ],
      },
      {
        heading: 'Who pays return postage',
        paragraphs: ['TO BE CONFIRMED — state whether the customer or the merchant pays return postage for a change of mind, and confirm that return postage for faulty goods is always covered by the merchant.'],
        pending: true,
      },
      {
        heading: 'Faulty items',
        paragraphs: [
          'If a product develops a fault, contact us with your order number, a description of the fault and, where possible, a short video. Faulty items are repaired, replaced or refunded.',
          'Warranty terms are set by the manufacturer and are listed on each product page as soon as they are confirmed.',
        ],
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'Approved refunds are issued to the original payment method once the returned item has been received and inspected. Your bank or card issuer may take a further few working days to show the credit.',
        ],
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy policy',
    summary: 'What data this store collects, why, and how it is handled.',
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          `This store is operated by ${site.brand.legalEntity}, ${site.contact.addressLines.join(', ')}. For any privacy question, write to ${site.contact.email}.`,
        ],
      },
      {
        heading: 'What we collect',
        paragraphs: [
          'When you place an order we collect your name, billing and delivery addresses, email address, telephone number and order contents. Payment card details are entered on Shopify’s hosted checkout and are never received or stored by this website.',
          'If you subscribe to our newsletter we store your email address until you unsubscribe.',
          'Your shopping bag is stored in your own browser’s local storage so it survives a refresh. It is not transmitted to us until you proceed to checkout.',
        ],
      },
      {
        heading: 'Why we process it',
        paragraphs: [
          'To fulfil your order and provide aftercare; to meet our legal and tax obligations; and, where you have asked for it, to send you marketing email.',
        ],
      },
      {
        heading: 'Processors we use',
        paragraphs: [
          'Shopify Inc. processes orders, payments and customer records. Our hosting provider serves the pages of this website. Any additional analytics or email platform will be named here before it is enabled.',
          'TO BE CONFIRMED — name your analytics provider, email platform and any advertising pixels once you add them, and update your cookie notice accordingly.',
        ],
        pending: true,
      },
      {
        heading: 'Your rights',
        paragraphs: [
          `You may request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. Write to ${site.contact.email}.`,
        ],
      },
      {
        heading: 'Retention',
        paragraphs: ['TO BE CONFIRMED — state how long order records are retained, which is usually governed by the tax and company-law requirements of your jurisdiction.'],
        pending: true,
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of service',
    summary: 'The terms on which this store sells to you.',
    sections: [
      {
        heading: 'These terms',
        paragraphs: [
          `By placing an order you agree to these terms. The seller is ${site.brand.legalEntity}.`,
        ],
      },
      {
        heading: 'Products and descriptions',
        paragraphs: [
          'We describe each product as accurately as we can and mark any specification that has not yet been confirmed by the manufacturer. Product photography shows the manufacturer’s own imagery; colour reproduction varies between screens.',
          'Where a specification is shown as "to be confirmed", it does not form part of the contract of sale. Ask us before ordering if a particular figure matters to you.',
        ],
      },
      {
        heading: 'Pricing',
        paragraphs: ['TO BE CONFIRMED — confirm the currency, whether displayed prices include tax, and how pricing errors are handled. While the store shows "Price on request", no price is being offered and no contract is formed.'],
        pending: true,
      },
      {
        heading: 'Orders and acceptance',
        paragraphs: [
          'Your order is an offer to buy. A contract is formed when we send a dispatch confirmation. We may decline an order where an item is out of stock or where a pricing error has occurred.',
        ],
      },
      {
        heading: 'Electrical safety',
        paragraphs: [
          'Products are for indoor domestic use unless stated otherwise. Use only the supplied power adapter and cable. Do not immerse any electrical part in water, and keep diffusers and humidifiers away from soft furnishings.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: ['TO BE CONFIRMED — state the governing law and the courts that have jurisdiction.'],
        pending: true,
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
