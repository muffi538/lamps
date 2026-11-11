import type { Spec } from '@/lib/catalog/types';

/**
 * Renders a specification table. Any value the supplied catalogue did not
 * state is shown as a visible "To be confirmed" placeholder rather than being
 * hidden or invented, so gaps are obvious to the merchant and honest to the
 * customer.
 */
export function SpecTable({ rows, caption }: { rows: Spec[]; caption?: string }) {
  if (!rows.length) return null;

  return (
    <table className="w-full border-collapse text-left">
      {caption ? <caption className="t-eyebrow mb-4 text-left">{caption}</caption> : null}
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-line last:border-0">
            <th scope="row" className="w-[46%] py-3.5 pr-4 align-top font-ui text-[0.8125rem] font-normal text-muted">
              {row.label}
            </th>
            <td className="py-3.5 align-top font-sans text-[0.875rem] leading-relaxed text-ink">
              {row.value ?? <span className="pending-chip">To be confirmed</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
