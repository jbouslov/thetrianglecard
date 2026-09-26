import {
  restaurants,
  directionsUrl,
  mapEmbedUrl,
  type Restaurant,
} from "@/lib/restaurants";

function LocationCard({ r }: { r: Restaurant }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="grid md:grid-cols-2">
        {/* Info */}
        <div className="flex flex-col p-6">
          <h3 className="text-xl font-semibold text-ink">{r.name}</h3>
          <p className="mt-1 text-sm text-neutral-500">{r.cuisine}</p>

          <div className="mt-4 rounded-lg bg-gold/15 px-4 py-3 text-ink">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
              Your deal
            </p>
            <p className="mt-1 font-medium">{r.offer}</p>
          </div>

          <div className="mt-4 flex-1 text-sm text-neutral-600">
            <p>{r.address}</p>
            <p>
              {r.city}, NC {r.zip}
            </p>
          </div>

          <a
            href={directionsUrl(r)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-gold-dark hover:underline"
          >
            Get directions →
          </a>
        </div>

        {/* Embedded map */}
        <div className="min-h-[240px] bg-neutral-100">
          <iframe
            title={`Map showing ${r.name}`}
            src={mapEmbedUrl(r)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[240px] w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// Renders all participating restaurants as stacked cards, each with its deal
// and an embedded, interactive map.
export default function RestaurantList() {
  return (
    <div className="space-y-6">
      {restaurants.map((r) => (
        <LocationCard key={r.name} r={r} />
      ))}
    </div>
  );
}

// A compact strip of restaurant names + their deal, for the home/product pages.
export function RestaurantStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {restaurants.map((r) => (
        <span
          key={r.name}
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
        >
          {r.name}
        </span>
      ))}
    </div>
  );
}
