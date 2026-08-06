import React from "react";

/**
 * Flat brand visuals for ready-made products — no photos, no people.
 * Accents: green ERP · teal CRM · RFID silver logistics.
 */
const ErpArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Hub */}
    <rect x="158" y="112" width="84" height="76" rx="14" fill="#1E8F41" />
    <rect x="172" y="128" width="56" height="8" rx="4" fill="#E8F8F0" fillOpacity="0.9" />
    <rect x="172" y="144" width="40" height="6" rx="3" fill="#E8F8F0" fillOpacity="0.55" />
    <rect x="172" y="158" width="48" height="6" rx="3" fill="#E8F8F0" fillOpacity="0.4" />
    {/* Modules */}
    <rect x="52" y="64" width="72" height="56" rx="12" fill="#E8F8F0" stroke="#1E8F41" strokeOpacity="0.35" />
    <rect x="64" y="78" width="36" height="6" rx="3" fill="#1E8F41" fillOpacity="0.55" />
    <rect x="64" y="92" width="48" height="5" rx="2.5" fill="#1E8F41" fillOpacity="0.28" />
    <rect x="276" y="64" width="72" height="56" rx="12" fill="#E8F8F0" stroke="#1E8F41" strokeOpacity="0.35" />
    <rect x="288" y="78" width="40" height="6" rx="3" fill="#1E8F41" fillOpacity="0.55" />
    <rect x="288" y="92" width="28" height="5" rx="2.5" fill="#1E8F41" fillOpacity="0.28" />
    <rect x="52" y="180" width="72" height="56" rx="12" fill="#E8F8F0" stroke="#1E8F41" strokeOpacity="0.35" />
    <rect x="64" y="194" width="32" height="6" rx="3" fill="#1E8F41" fillOpacity="0.55" />
    <rect x="64" y="208" width="44" height="5" rx="2.5" fill="#1E8F41" fillOpacity="0.28" />
    <rect x="276" y="180" width="72" height="56" rx="12" fill="#E8F8F0" stroke="#1E8F41" strokeOpacity="0.35" />
    <rect x="288" y="194" width="36" height="6" rx="3" fill="#1E8F41" fillOpacity="0.55" />
    <rect x="288" y="208" width="48" height="5" rx="2.5" fill="#1E8F41" fillOpacity="0.28" />
    {/* Connectors */}
    <path d="M124 92H158" stroke="#1E8F41" strokeWidth="2" strokeOpacity="0.45" />
    <path d="M242 92H276" stroke="#1E8F41" strokeWidth="2" strokeOpacity="0.45" />
    <path d="M124 208H158" stroke="#1E8F41" strokeWidth="2" strokeOpacity="0.45" />
    <path d="M242 208H276" stroke="#1E8F41" strokeWidth="2" strokeOpacity="0.45" />
    <circle cx="124" cy="92" r="3.5" fill="#1E8F41" />
    <circle cx="276" cy="92" r="3.5" fill="#1E8F41" />
    <circle cx="124" cy="208" r="3.5" fill="#1E8F41" />
    <circle cx="276" cy="208" r="3.5" fill="#1E8F41" />
  </svg>
);

const CrmArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Pipeline stages */}
    <rect x="56" y="88" width="68" height="124" rx="14" fill="#D4F3F3" />
    <rect x="68" y="104" width="44" height="8" rx="4" fill="#00A7A7" fillOpacity="0.7" />
    <circle cx="90" cy="148" r="16" fill="#00A7A7" fillOpacity="0.2" stroke="#00A7A7" strokeWidth="2" />
    <circle cx="90" cy="148" r="6" fill="#00A7A7" />
    <rect x="72" y="178" width="36" height="6" rx="3" fill="#00A7A7" fillOpacity="0.35" />

    <rect x="148" y="72" width="68" height="156" rx="14" fill="#00A7A7" fillOpacity="0.12" stroke="#00A7A7" strokeOpacity="0.4" />
    <rect x="160" y="92" width="44" height="8" rx="4" fill="#00A7A7" />
    <circle cx="182" cy="148" r="18" fill="#00A7A7" fillOpacity="0.18" stroke="#00A7A7" strokeWidth="2" />
    <circle cx="182" cy="148" r="7" fill="#00A7A7" />
    <rect x="164" y="186" width="36" height="6" rx="3" fill="#00A7A7" fillOpacity="0.45" />
    <rect x="164" y="200" width="28" height="5" rx="2.5" fill="#00A7A7" fillOpacity="0.3" />

    <rect x="240" y="56" width="68" height="188" rx="14" fill="#00A7A7" />
    <rect x="252" y="78" width="44" height="8" rx="4" fill="#F7F3EC" fillOpacity="0.95" />
    <circle cx="274" cy="148" r="20" fill="#F7F3EC" fillOpacity="0.2" stroke="#F7F3EC" strokeWidth="2" />
    <circle cx="274" cy="148" r="8" fill="#F7F3EC" />
    <rect x="256" y="188" width="36" height="6" rx="3" fill="#F7F3EC" fillOpacity="0.7" />
    <rect x="256" y="202" width="28" height="5" rx="2.5" fill="#F7F3EC" fillOpacity="0.45" />

    {/* Flow arrows */}
    <path d="M128 150H144" stroke="#00A7A7" strokeWidth="2.5" strokeOpacity="0.55" strokeLinecap="round" />
    <path d="M220 150H236" stroke="#00A7A7" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
    <path d="M138 145L146 150L138 155" stroke="#00A7A7" strokeWidth="2" strokeOpacity="0.55" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M230 145L238 150L230 155" stroke="#00A7A7" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />

    {/* Soft fourth stage hint */}
    <rect x="324" y="100" width="28" height="100" rx="10" fill="#00A7A7" fillOpacity="0.08" stroke="#00A7A7" strokeOpacity="0.25" strokeDasharray="4 4" />
  </svg>
);

const LogisticsArt = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="400" height="300" fill="#F7F3EC" />
    <rect x="28" y="36" width="344" height="228" rx="18" fill="#FFFFFF" stroke="#0F172A" strokeOpacity="0.08" />
    {/* Route */}
    <path
      d="M64 210C110 210 118 120 168 120C218 120 226 210 276 210C310 210 328 168 348 152"
      stroke="#C0C7D1"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="10 8"
    />
    <circle cx="64" cy="210" r="8" fill="#0F172A" />
    <circle cx="168" cy="120" r="8" fill="#0F172A" />
    <circle cx="276" cy="210" r="8" fill="#0F172A" />
    {/* Package */}
    <g transform="translate(236 88)">
      <rect x="0" y="12" width="72" height="58" rx="10" fill="#C0C7D1" fillOpacity="0.55" stroke="#0F172A" strokeOpacity="0.2" />
      <path d="M0 32H72" stroke="#0F172A" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M36 12V70" stroke="#0F172A" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M12 12L36 0L60 12" stroke="#0F172A" strokeOpacity="0.25" strokeWidth="2" strokeLinejoin="round" />
    </g>
    {/* RFID waves */}
    <g className="solution-rfid-pulse" transform="translate(272 48)">
      <circle cx="0" cy="0" r="10" fill="#C0C7D1" />
      <circle cx="0" cy="0" r="22" stroke="#C0C7D1" strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="0" cy="0" r="34" stroke="#C0C7D1" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="0" cy="0" r="46" stroke="#C0C7D1" strokeWidth="1" fill="none" opacity="0.22" />
    </g>
    {/* Small tag */}
    <rect x="72" y="72" width="52" height="36" rx="8" fill="#C0C7D1" fillOpacity="0.35" stroke="#0F172A" strokeOpacity="0.15" />
    <circle cx="88" cy="90" r="5" fill="#0F172A" fillOpacity="0.45" />
    <rect x="98" y="84" width="18" height="4" rx="2" fill="#0F172A" fillOpacity="0.25" />
    <rect x="98" y="92" width="12" height="3" rx="1.5" fill="#0F172A" fillOpacity="0.18" />
  </svg>
);

const ART = {
  erp: ErpArt,
  crm: CrmArt,
  logistics: LogisticsArt,
};

const ALT = {
  erp: "Ilustración: módulos de ERP conectados",
  crm: "Ilustración: pipeline de CRM",
  logistics: "Ilustración: logística con trazabilidad RFID",
};

/**
 * Product illustration panel for Solutions.
 */
const SolutionIllustration = ({ kind, title, accent = "green", wide = false }) => {
  const Art = ART[kind] || ErpArt;
  const frame =
    accent === "teal"
      ? "border-secondary/25"
      : accent === "rfid"
        ? "border-rfid/50"
        : "border-primary/20";

  return (
    <div
      className={`relative overflow-hidden bg-background ${
        wide
          ? "aspect-[16/9] sm:aspect-[2/1] border-b border-on-surface/10 rounded-none"
          : `rounded-[var(--radius-exec)] border aspect-[4/3] ${frame}`
      }`}
      role="img"
      aria-label={title || ALT[kind] || ALT.erp}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[720px] mx-auto [&_svg]:w-full [&_svg]:h-full">
          <Art />
        </div>
      </div>
    </div>
  );
};

export default SolutionIllustration;
