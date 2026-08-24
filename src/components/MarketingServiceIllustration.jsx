import React from "react";

/**
 * Flat teal art for the three marketing paths — no photos, no people.
 */
const DigitalArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Feed */}
    <rect x="48" y="56" width="120" height="188" rx="14" fill="#D4F3F3" />
    <rect x="64" y="76" width="88" height="10" rx="5" fill="#00A7A7" fillOpacity="0.7" />
    <rect x="64" y="96" width="64" height="8" rx="4" fill="#00A7A7" fillOpacity="0.35" />
    <rect x="64" y="122" width="88" height="52" rx="10" fill="#FFFFFF" />
    <rect x="64" y="188" width="88" height="8" rx="4" fill="#00A7A7" fillOpacity="0.35" />
    <rect x="64" y="204" width="52" height="8" rx="4" fill="#00A7A7" fillOpacity="0.22" />
    {/* Search */}
    <rect x="188" y="56" width="164" height="44" rx="22" fill="#F7F3EC" stroke="#00A7A7" strokeWidth="1.5" strokeOpacity="0.45" />
    <circle cx="210" cy="78" r="8" stroke="#00A7A7" strokeWidth="2" fill="none" />
    <path d="M216 84 L222 90" stroke="#00A7A7" strokeWidth="2" strokeLinecap="round" />
    <rect x="232" y="74" width="96" height="8" rx="4" fill="#00A7A7" fillOpacity="0.28" />
    {/* Ads + mail */}
    <rect x="188" y="118" width="76" height="96" rx="12" fill="#D4F3F3" />
    <rect x="204" y="138" width="44" height="8" rx="4" fill="#00A7A7" fillOpacity="0.7" />
    <rect x="204" y="154" width="32" height="6" rx="3" fill="#00A7A7" fillOpacity="0.35" />
    <rect x="280" y="118" width="72" height="96" rx="12" fill="#FFFFFF" stroke="#00A7A7" strokeOpacity="0.35" />
    <path d="M292 148 L316 164 L340 148" stroke="#00A7A7" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <rect x="292" y="148" width="48" height="36" rx="4" stroke="#00A7A7" strokeWidth="1.5" fill="none" />
  </svg>
);

const NeuroArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    <circle cx="200" cy="150" r="22" fill="#00A7A7" />
    <circle cx="200" cy="150" r="8" fill="#F7F3EC" />
    <circle cx="200" cy="150" r="48" stroke="#00A7A7" strokeWidth="2" strokeOpacity="0.55" fill="none" />
    <circle cx="200" cy="150" r="78" stroke="#00A7A7" strokeWidth="1.5" strokeOpacity="0.32" fill="none" />
    <circle cx="200" cy="150" r="108" stroke="#00A7A7" strokeWidth="1" strokeOpacity="0.18" fill="none" />
    <circle cx="118" cy="92" r="10" fill="#D4F3F3" stroke="#00A7A7" strokeOpacity="0.5" />
    <circle cx="292" cy="198" r="10" fill="#D4F3F3" stroke="#00A7A7" strokeOpacity="0.5" />
    <circle cx="286" cy="86" r="7" fill="#00A7A7" fillOpacity="0.45" />
    <circle cx="108" cy="208" r="7" fill="#00A7A7" fillOpacity="0.35" />
  </svg>
);

const TraditionalArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Billboard */}
    <rect x="52" y="64" width="140" height="88" rx="10" fill="#D4F3F3" />
    <rect x="68" y="82" width="108" height="10" rx="5" fill="#00A7A7" fillOpacity="0.7" />
    <rect x="68" y="102" width="72" height="8" rx="4" fill="#00A7A7" fillOpacity="0.35" />
    <rect x="114" y="152" width="16" height="44" fill="#00A7A7" fillOpacity="0.22" />
    {/* Event platform */}
    <rect x="214" y="80" width="134" height="10" rx="5" fill="#00A7A7" fillOpacity="0.28" />
    <rect x="228" y="90" width="106" height="8" rx="4" fill="#00A7A7" fillOpacity="0.18" />
    <rect x="248" y="56" width="66" height="24" rx="8" fill="#00A7A7" />
    {/* POS stand */}
    <rect x="88" y="198" width="224" height="44" rx="12" fill="#F7F3EC" stroke="#00A7A7" strokeOpacity="0.35" />
    <rect x="108" y="212" width="72" height="16" rx="8" fill="#D4F3F3" />
    <rect x="196" y="212" width="96" height="16" rx="8" fill="#00A7A7" fillOpacity="0.35" />
  </svg>
);

const ARTS = {
  digital: DigitalArt,
  neuro: NeuroArt,
  traditional: TraditionalArt,
};

const MarketingServiceIllustration = ({ kind, title }) => {
  const Art = ARTS[kind] || NeuroArt;

  return (
    <div
      className="relative overflow-hidden rounded-[var(--radius-exec)] border border-secondary/25 aspect-[4/3] bg-background"
      role="img"
      aria-label={title || "Ilustración de marketing"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[720px] mx-auto [&_svg]:w-full [&_svg]:h-full">
          <Art />
        </div>
      </div>
    </div>
  );
};

export default MarketingServiceIllustration;
