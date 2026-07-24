/** @type {import('tailwindcss').Config} */
// NOTE: In Tailwind v4 the design tokens live in the `@theme` block in
// src/index.css. This file only declares content sources and a couple of
// utilities that are easier to express here.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
