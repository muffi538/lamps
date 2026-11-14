'use client';

import { useState } from 'react';
import { ArrowIcon } from './Icons';

/**
 * Minimal subscription block.
 *
 * TODO (merchant): wire `onSubmit` to your email platform — Shopify Customer
 * Accounts / Klaviyo / Mailchimp. Today it validates and confirms locally so
 * the interaction is complete without a fake backend call.
 */
export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'done' | 'error'>('idle');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setState(valid ? 'done' : 'error');
  }

  if (state === 'done') {
    return (
      <p className="font-sans text-[0.9375rem] text-ink" role="status">
        Thank you — we will be in touch when the collection opens.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? 'max-w-sm' : 'mx-auto max-w-md'}>
      <div className="flex items-end gap-4 border-b border-line pb-3 transition-colors duration-300 focus-within:border-ink">
        <label htmlFor={compact ? 'newsletter-footer' : 'newsletter'} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? 'newsletter-footer' : 'newsletter'}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === 'error') setState('idle');
          }}
          placeholder="Email address"
          aria-invalid={state === 'error'}
          aria-describedby={state === 'error' ? 'newsletter-error' : undefined}
          className="w-full border-0 bg-transparent font-sans text-[0.9375rem] text-ink outline-none placeholder:text-muted"
        />
        <button type="submit" className="btn-ghost shrink-0 text-muted transition-colors hover:text-ink" aria-label="Subscribe">
          <ArrowIcon />
        </button>
      </div>
      {state === 'error' ? (
        <p id="newsletter-error" className="t-meta mt-3 text-ink" role="alert">
          Please enter a valid email address.
        </p>
      ) : null}
    </form>
  );
}
