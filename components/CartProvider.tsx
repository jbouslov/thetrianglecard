"use client";

// -----------------------------------------------------------------------------
// Client-side cart state, shared across the whole app via React Context.
// Persists to localStorage so the cart survives a page refresh.
// No backend required — checkout is wired separately (see app/cart/page.tsx).
// -----------------------------------------------------------------------------

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  /** Add an item (or increase its quantity if already in the cart). */
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  /** Total number of items (sum of quantities). */
  count: number;
  /** Total price of everything in the cart. */
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "triangle-card-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved cart on first mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      // Ignore malformed storage.
    }
    setHydrated(true);
  }, []);

  // Persist whenever the cart changes (after initial hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be unavailable (private mode) — safe to ignore.
    }
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem: CartContextValue["removeItem"] = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (id, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
