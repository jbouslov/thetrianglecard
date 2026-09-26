"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "./CartProvider";

// Reusable "add to cart" control for a product. Used on the product page.
export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(
      { id: product.id, name: product.name, price: product.price },
      1
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      {added ? "Added to cart ✓" : `Add to Cart — $${product.price}`}
    </button>
  );
}

// A visual product tile (image + name + price) that links to the products page.
export function ProductTile({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{product.blurb}</p>
        <p className="mt-3 text-xl font-bold text-gold-dark">${product.price}</p>
      </div>
    </div>
  );
}
