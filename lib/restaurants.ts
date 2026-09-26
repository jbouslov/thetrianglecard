// -----------------------------------------------------------------------------
// The participating restaurants on The Triangle Card, with the exact deal from
// the card and a confirmed street address for the map embed.
//
// The "Get directions" link and the embedded map are generated automatically
// from the `address` + `city`, so to add/change a location you only edit here.
// -----------------------------------------------------------------------------

export type Restaurant = {
  name: string;
  cuisine: string;
  address: string;
  city: "Cary" | "Apex" | "Morrisville" | string;
  zip: string;
  /** The deal on the card, e.g. "40% off menu items". */
  offer: string;
  /** Optional logo in /public/restaurants. Leave undefined to show initials. */
  logo?: string;
};

export const restaurants: Restaurant[] = [
  {
    name: "Papa John's Pizza",
    cuisine: "Pizza",
    address: "6470 Tryon Rd",
    city: "Cary",
    zip: "27518",
    offer: "40% off menu items",
  },
  {
    name: "Johnny's Pizza",
    cuisine: "Pizza",
    address: "96 Cornerstone Dr",
    city: "Cary",
    zip: "27519",
    offer: "Buy a large 2-topping pizza, get a medium cheese pizza free",
  },
  {
    name: "Mamacita Modern Mexican + Cocktails",
    cuisine: "Modern Mexican",
    address: "2045 Creekside Landing Dr",
    city: "Apex",
    zip: "27502",
    offer: "$10 off any purchase of $40 or more",
  },
  {
    name: "Red Robin Gourmet Burgers & Brews",
    cuisine: "Burgers & American",
    address: "1431 Beaver Creek Commons Dr",
    city: "Apex",
    zip: "27502",
    offer: "Free appetizer with purchase of 2 entrées",
  },
  {
    name: "Dunkin' Donuts",
    cuisine: "Coffee & Donuts",
    address: "2740 NC Hwy 55",
    city: "Cary",
    zip: "27519",
    offer: "Free donut with the purchase of a med/large drink",
  },
  {
    name: "Smithfield's Chicken 'N Bar-B-Q",
    cuisine: "BBQ & Chicken",
    address: "3578 Davis Dr",
    city: "Morrisville",
    zip: "27560",
    offer: "10% off",
  },
  {
    name: "Zaxby's",
    cuisine: "Chicken",
    address: "1171 Pine Plaza Dr",
    city: "Apex",
    zip: "27523",
    offer: "10% off",
  },
  {
    name: "Feng Cha",
    cuisine: "Boba Tea & Café",
    address: "3037 Village Market Pl",
    city: "Morrisville",
    zip: "27560",
    offer: "10% off",
  },
  {
    name: "La Cocina Mexican Restaurant",
    cuisine: "Mexican",
    address: "100 MacGregor Pines Dr",
    city: "Apex",
    zip: "27523",
    offer: "10% off",
  },
  {
    name: "My Dessert",
    cuisine: "Chè, Smoothies & Desserts",
    address: "90 Cornerstone Dr",
    city: "Cary",
    zip: "27519",
    offer: "10% off",
  },
  {
    name: "Greek Fiesta",
    cuisine: "Greek & Mediterranean",
    address: "319 Crossroads Blvd",
    city: "Cary",
    zip: "27511",
    // Not printed on the current card — TODO: confirm the real deal.
    offer: "New partner — deal coming soon",
  },
];

/** Full address string used for maps and directions. */
export function fullAddress(r: Restaurant): string {
  return `${r.name}, ${r.address}, ${r.city}, NC ${r.zip}`;
}

/** Google Maps directions link (opens in a new tab). No API key needed. */
export function directionsUrl(r: Restaurant): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress(r))}`;
}

/** Embeddable Google Maps URL for an <iframe>. No API key needed. */
export function mapEmbedUrl(r: Restaurant): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress(r))}&output=embed`;
}
