import Link from "next/link";
import { site } from "@/lib/site";
import { triangleCard } from "@/lib/products";
import { restaurants } from "@/lib/restaurants";
import AddToCart from "@/components/ProductCard";
import { RestaurantStrip } from "@/components/RestaurantList";
import FlipCard from "@/components/FlipCard";

export default function HomePage() {
  const count = restaurants.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              {site.area}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              One card.{" "}
              <span className="text-gold">{count} local favorites.</span> Save
              all year.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/70">
              The Triangle Card is a reusable coupon card packed with deals at the
              best independent restaurants in Cary, Apex, and Morrisville — for
              just ${site.price}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AddToCart product={triangleCard} />
              <Link href="/products" className="font-semibold text-gold hover:underline">
                See what&apos;s included →
              </Link>
            </div>
          </div>

          <FlipCard className="mx-auto w-full max-w-lg" />
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-ink">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Grab your card",
              body: `Pick up a Triangle Card for just $${site.price} — for yourself or as a gift.`,
            },
            {
              step: "2",
              title: "Show it & save",
              body: `Present your card at any of the ${count} participating restaurants to unlock the deal.`,
            },
            {
              step: "3",
              title: "Use it again",
              body: "The coupons are reusable — enjoy your savings all year long.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-bold text-gold">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-neutral-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants */}
      <section className="bg-neutral-50 py-16">
        <div className="container-page text-center">
          <h2 className="font-serif text-3xl font-bold text-ink">
            Featuring {count} local restaurants
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            Your favorite spots across the Triangle — all on one card.
          </p>
          <div className="mt-10">
            <RestaurantStrip />
          </div>
          <div className="mt-10">
            <Link href="/locations" className="btn-outline">
              View all locations
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-16 text-center text-white">
        <div className="container-page">
          <h2 className="font-serif text-3xl font-bold">
            Ready to start saving?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            Get your Triangle Card today and support local restaurants while you
            save.
          </p>
          <div className="mt-8 flex justify-center">
            <AddToCart product={triangleCard} />
          </div>
        </div>
      </section>
    </>
  );
}
