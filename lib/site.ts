// -----------------------------------------------------------------------------
// Site-wide configuration.
// Edit these values to update the business name, contact info, and social links
// everywhere on the site at once.
// -----------------------------------------------------------------------------

export const site = {
  name: "The Triangle Card",
  shortName: "Triangle Card",
  tagline: "One card. Local favorites. Save all year.",
  description:
    "The Triangle Card is a reusable coupon card featuring the best local restaurants in Cary, Apex, and Morrisville, NC. One card, unlimited savings.",
  area: "Cary, Apex & Morrisville, NC",
  price: 20,

  contactEmail: "thetrianglecard@gmail.com",

  // Optional — leave as empty string to hide a social link in the footer.
  social: {
    instagram: "",
    facebook: "",
  },

  // Used for SEO / metadata once the domain is live.
  url: "https://thetrianglecard.com",
} as const;
