import React from "react";

/**
 * Flat brand visual for the marketing giro — teal, no photos, no people.
 */
const MarketingArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Signal origin */}
    <circle cx="200" cy="150" r="22" fill="#00A7A7" />
    <circle cx="200" cy="150" r="8" fill="#F7F3EC" />
    {/* Clarity rings */}
    <circle cx="200" cy="150" r="48" stroke="#00A7A7" strokeWidth="2" strokeOpacity="0.55" fill="none" />
    <circle cx="200" cy="150" r="78" stroke="#00A7A7" strokeWidth="1.5" strokeOpacity="0.32" fill="none" />
    <circle cx="200" cy="150" r="108" stroke="#00A7A7" strokeWidth="1" strokeOpacity="0.18" fill="none" />
    {/* Message cards */}
    <rect x="52" y="72" width="72" height="48" rx="12" fill="#D4F3F3" />
    <rect x="64" y="86" width="40" height="6" rx="3" fill="#00A7A7" fillOpacity="0.7" />
    <rect x="64" y="100" width="28" height="5" rx="2.5" fill="#00A7A7" fillOpacity="0.35" />
    <rect x="276" y="180" width="72" height="48" rx="12" fill="#D4F3F3" />
    <rect x="288" y="194" width="44" height="6" rx="3" fill="#00A7A7" fillOpacity="0.7" />
    <rect x="288" y="208" width="24" height="5" rx="2.5" fill="#00A7A7" fillOpacity="0.35" />
  </svg>
);

const MarketingIllustration = ({ title }) => (
  <div
    className="relative overflow-hidden rounded-[var(--radius-exec)] border border-secondary/25 aspect-[4/3] bg-background"
    role="img"
    aria-label={title || "Ilustración: señal y claridad"}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full max-w-[720px] mx-auto [&_svg]:w-full [&_svg]:h-full">
        <MarketingArt />
      </div>
    </div>
  </div>
);

export default MarketingIllustration;
