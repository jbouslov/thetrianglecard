"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, count, clear } = useCart();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Sends the cart to our /api/checkout route, which creates a Stripe Checkout
  // session and returns its URL. We then redirect the customer to Stripe's
  // secure hosted payment page.
  async function handleCheckout() {
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url; // go to Stripe Checkout
        return;
      }

      if (res.status === 503) {
        // Payments not configured yet — fall back to a contact message.
        setMessage(
          `Online checkout isn't live yet. To purchase now, email us at ${site.contactEmail} and we'll get your card to you.`
        );
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (count === 0) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-serif text-3xl font-bold text-ink">Your cart is empty</h1>
        <p className="mt-3 text-neutral-600">
          Add a Triangle Card to start saving at local restaurants.
        </p>
        <Link href="/products" className="btn-gold mt-8">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">Your Cart</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {/* Line items */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-5">
                <div className="flex-1">
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-neutral-500">${item.price} each</p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center rounded-md border border-black/15">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-lg text-ink hover:bg-neutral-100"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-ink">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-lg text-ink hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>

                <p className="w-20 text-right font-semibold text-ink">
                  ${item.price * item.quantity}
                </p>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-neutral-400 hover:text-red-600"
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={clear}
            className="mt-4 text-sm text-neutral-500 hover:text-ink"
          >
            Clear cart
          </button>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-xl border border-black/10 bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold text-ink">Order summary</h2>
          <div className="mt-4 flex justify-between text-neutral-700">
            <span>Subtotal ({count} item{count === 1 ? "" : "s"})</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-black/10 pt-4 text-lg font-bold text-ink">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Redirecting to checkout…" : "Checkout"}
          </button>

          {message && (
            <p className="mt-4 rounded-md bg-gold/10 p-3 text-sm text-ink">{message}</p>
          )}

          <Link
            href="/products"
            className="mt-4 block text-center text-sm text-neutral-600 hover:text-ink"
          >
            ← Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
