import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand theme — tweak these in one place to restyle the whole site.
        ink: "#0a0a0a", // near-black used for header/footer
        gold: {
          DEFAULT: "#CAB167", // exact gold sampled from the card artwork
          light: "#E2D2A0",
          dark: "#8C763A", // darker shade for gold text on white (kept readable)
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
