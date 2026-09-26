import type { Metadata } from "next";
import { site } from "@/lib/site";
import { restaurants } from "@/lib/restaurants";
import RestaurantList from "@/components/RestaurantList";

export const metadata: Metadata = {
  title: "Locations",
  description: `The participating restaurants in ${site.area} on The Triangle Card, with deals and maps.`,
};

export default function LocationsPage() {
  const count = restaurants.length;

  return (
    <>
      <section className="bg-ink py-16 text-white">
        <div className="container-page">
          <h1 className="font-serif text-4xl font-bold">Locations</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            The Triangle Card is accepted at these {count} local restaurants
            across {site.area}. Show your card at any location to redeem your
            deal — more are being added all the time.
          </p>
        </div>
      </section>

      <div className="container-page py-16">
        <RestaurantList />
      </div>
    </>
  );
}
