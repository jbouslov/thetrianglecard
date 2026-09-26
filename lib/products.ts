// -----------------------------------------------------------------------------
// The product(s) sold on the site. Right now there is a single product:
// The Triangle Card. Add more objects to this array if you ever sell more.
// -----------------------------------------------------------------------------

import { site } from "./site";

export type Product = {
  id: string;
  name: string;
  price: number;
  /** Short one-liner shown on cards/tiles. */
  blurb: string;
  /** Longer description shown on the product page. */
  description: string;
  /** Path to the image in /public. Replace card.png with your real card art. */
  image: string;
  /** Bullet points of what's included / how it works. */
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "triangle-card",
    name: "The Triangle Card",
    price: site.price,
    blurb: "Reusable coupons at 11 local restaurants — one card, all year.",
    description:
      "The Triangle Card is your all-year pass to savings at the best independent restaurants in Cary, Apex, and Morrisville. Each card features 11 local restaurants (with more being added), and the coupons are reusable — so the card pays for itself again and again while you support local business.",
    image: "/card-front.png",
    highlights: [
      "11 participating local restaurants (with more being added)",
      "Reusable coupons — use them again and again",
      "Supports independent restaurants in the Triangle",
      "Valid for a full year",
      "The perfect local gift",
    ],
  },
];

/** Convenience helper — the main card product. */
export const triangleCard = products[0];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
