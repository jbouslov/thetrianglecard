import type { Metadata } from "next";
import { triangleCard } from "@/lib/products";
import { restaurants } from "@/lib/restaurants";
import AddToCart from "@/components/ProductCard";
import { RestaurantStrip } from "@/components/RestaurantList";
import FlipCard from "@/components/FlipCard";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Triangle Card — a reusable coupon card for local restaurants in Cary, Apex & Morrisville.",
};

export default function ProductsPage() {
  const count = restaurants.length;

  return (
    <div className="container-page py-16">
      <div className="grid items-start gap-12 md:grid-cols-2">
        {/* Card (flips to reveal the deals) */}
        <FlipCard className="w-full" />

        {/* Details */}
        <div>
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            {triangleCard.name}
          </h1>
          <p className="mt-2 text-2xl font-bold text-gold-dark">
            ${triangleCard.price}
          </p>
          <p className="mt-6 leading-relaxed text-neutral-700">
            {triangleCard.description}
          </p>

          <ul className="mt-6 space-y-3">
            {triangleCard.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-neutral-700">
                <span className="mt-1 flex-none text-gold-dark">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AddToCart product={triangleCard} />
          </div>
        </div>
      </div>

      {/* Restaurants included */}
      <section className="mt-20 text-center">
        <h2 className="font-serif text-2xl font-bold text-ink">
          {count} restaurants on the card
        </h2>
        <div className="mt-8">
          <RestaurantStrip />
        </div>
      </section>
    </div>
  );
}
