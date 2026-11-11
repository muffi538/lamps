'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export type CartLine = {
  /** Shopify variant GID once live; local variant id until then. */
  variantId: string;
  handle: string;
  title: string;
  variantTitle: string | null;
  sku: string;
  image: string;
  imageAlt: string;
  price: number | null;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  isHydrated: boolean;
  count: number;
  subtotal: number | null;
  /** True when at least one line has no price yet. */
  hasPendingPrices: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: Omit<CartLine, 'quantity'>, quantity?: number) => void;
  remove: (variantId: string) => void;
  setQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
  /** Set after an add so the drawer can highlight the new line. */
  lastAdded: string | null;
};

const STORAGE_KEY = 'elume.cart.v1';
const MAX_QTY = 99;

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const addedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed.filter((l) => l && typeof l.variantId === 'string'));
      }
    } catch {
      /* storage unavailable — cart simply starts empty */
    }
    setIsHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* quota or privacy mode — ignore */
    }
  }, [lines, isHydrated]);

  // Lock scroll while the drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => () => {
    if (addedTimer.current) clearTimeout(addedTimer.current);
  }, []);

  const add = useCallback((line: Omit<CartLine, 'quantity'>, quantity = 1) => {
    setLines((current) => {
      const index = current.findIndex((l) => l.variantId === line.variantId);
      if (index === -1) return [...current, { ...line, quantity: Math.min(quantity, MAX_QTY) }];
      const next = [...current];
      next[index] = { ...next[index], quantity: Math.min(next[index].quantity + quantity, MAX_QTY) };
      return next;
    });
    setLastAdded(line.variantId);
    if (addedTimer.current) clearTimeout(addedTimer.current);
    addedTimer.current = setTimeout(() => setLastAdded(null), 2600);
  }, []);

  const remove = useCallback((variantId: string) => {
    setLines((current) => current.filter((l) => l.variantId !== variantId));
  }, []);

  const setQuantity = useCallback((variantId: string, quantity: number) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((l) => l.variantId !== variantId);
      return current.map((l) =>
        l.variantId === variantId ? { ...l, quantity: Math.min(quantity, MAX_QTY) } : l,
      );
    });
  }, []);

  const value = useMemo<CartState>(() => {
    const count = lines.reduce((sum, l) => sum + l.quantity, 0);
    const hasPendingPrices = lines.some((l) => l.price === null);
    const subtotal = hasPendingPrices
      ? null
      : lines.reduce((sum, l) => sum + (l.price ?? 0) * l.quantity, 0);

    return {
      lines,
      isOpen,
      isHydrated,
      count,
      subtotal,
      hasPendingPrices,
      lastAdded,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      add,
      remove,
      setQuantity,
      clear: () => setLines([]),
    };
  }, [lines, isOpen, isHydrated, lastAdded, add, remove, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
