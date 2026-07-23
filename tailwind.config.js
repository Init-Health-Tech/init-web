/** @type {import('tailwindcss').Config} */
// Design tokens (colors, fonts, base keyframes) now live in the CSS-first
// @theme block in src/index.css — this file only keeps content globs plus
// the one animation (ping-slow, used by FloatingContactButton's pulse ring)
// that doesn't have a CSS-side equivalent yet. Avoid re-adding colors/fonts
// here: it creates two sources of truth that silently drift apart.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pingSlow: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "75%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
