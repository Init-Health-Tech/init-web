import React from "react";

/**
 * PillarDiagram - abstract, on-brand SVG illustrations for each architecture pillar.
 * These should feel like premium technology imagery, not literal component diagrams.
 */

const C = {
  bright: "#52B36B",
  soft: "rgba(82,179,107,0.18)",
  mid: "#2E6A3A",
  dark: "#0B0F14",
  node: "#12151C",
  nodeStroke: "rgba(255,255,255,0.14)",
  edge: "rgba(255,255,255,0.16)",
  edgeGreen: "rgba(82,179,107,0.55)",
  label: "#9AA3B2",
  muted: "rgba(154,163,178,0.62)",
};

const particles = [
  [58, 90, 1.4],
  [92, 224, 1.8],
  [118, 132, 1.2],
  [154, 76, 1.6],
  [218, 236, 1.4],
  [262, 88, 1.7],
  [310, 206, 1.3],
  [342, 118, 1.8],
];

const ParticleField = ({ shift = 0, opacity = 0.55 }) => (
  <g opacity={opacity}>
    {particles.map(([x, y, r], index) => (
      <circle
        key={`${x}-${y}-${shift}`}
        cx={x + (index % 2 === 0 ? shift : -shift)}
        cy={y + (index % 3 === 0 ? shift * 0.6 : 0)}
        r={r}
        fill={index % 3 === 0 ? C.bright : C.label}
      />
    ))}
  </g>
);

const Aura = ({ cx, cy, r, opacity = 0.32, pulse }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.edgeGreen} strokeWidth="1.2" opacity={opacity} className={pulse ? "animate-pulse" : undefined} />
    <circle cx={cx} cy={cy} r={r * 0.68} fill="none" stroke={C.edge} strokeWidth="1" opacity={opacity + 0.08} />
  </g>
);

const Strand = ({ d, accent, width = 1.4, opacity = 0.7, dash }) => (
  <path
    d={d}
    fill="none"
    stroke={accent ? C.edgeGreen : C.edge}
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={dash}
    opacity={opacity}
  />
);

const Plane = ({ points, accent, opacity = 0.16 }) => (
  <polygon
    points={points}
    fill={accent ? C.soft : "rgba(255,255,255,0.06)"}
    stroke={accent ? C.edgeGreen : C.nodeStroke}
    strokeWidth="1"
    opacity={opacity}
  />
);

const Core = ({ cx, cy, r = 34 }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="rgba(82,179,107,0.12)" stroke={C.edgeGreen} strokeWidth="1.5" />
    <circle cx={cx} cy={cy} r={r * 0.42} fill={C.bright} opacity="0.72" />
    <circle cx={cx} cy={cy} r={r * 1.45} fill="none" stroke={C.edgeGreen} strokeWidth="1" opacity="0.18" className="animate-pulse" />
  </g>
);

const Surface = ({ x, y, w, h, accent }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill={accent ? "rgba(82,179,107,0.1)" : "rgba(255,255,255,0.055)"} stroke={accent ? C.edgeGreen : C.nodeStroke} />
    <circle cx={x + 14} cy={y + 14} r="2.5" fill={accent ? C.bright : C.label} opacity="0.75" />
    <path d={`M${x + 28} ${y + 14} H${x + w - 18}`} stroke={accent ? C.edgeGreen : C.edge} strokeWidth="1.2" opacity="0.7" />
    <path d={`M${x + 18} ${y + 32} H${x + w - 30} M${x + 18} ${y + 45} H${x + w - 54}`} stroke={C.edge} strokeWidth="1.1" opacity="0.58" />
  </g>
);

const Signal = ({ cx, cy, r = 18 }) => (
  <g>
    <circle cx={cx} cy={cy} r="4" fill={C.bright} />
    <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.edgeGreen} strokeWidth="1.3" opacity="0.48" className="animate-pulse" />
    <circle cx={cx} cy={cy} r={r + 12} fill="none" stroke={C.edgeGreen} strokeWidth="1" opacity="0.24" />
  </g>
);

const Panel = ({ label, children }) => (
  <div className="relative aspect-[4/3] rounded-xl border border-white/10 bg-surface-container/40 overflow-hidden shadow-2xl shadow-black/20">
    <div className="absolute inset-0 grid-pattern-lines opacity-50" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(70% 60% at 70% 20%, rgba(46,106,58,0.14), transparent 70%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-70"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 28%, rgba(82,179,107,0.08) 68%, transparent)",
      }}
    />
    <div className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] text-faint font-display">
      {label}
    </div>
    <div className="absolute top-4 right-4 z-10 h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_rgba(82,179,107,0.8)]" />
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label={label}
    >
      <rect x="18" y="42" width="364" height="236" rx="18" fill="rgba(8,11,16,0.32)" stroke="rgba(255,255,255,0.06)" />
      {children}
    </svg>
  </div>
);

const Sistemas = () => (
  <Panel label="Arquitectura de sistema">
    <ParticleField shift={4} />
    <Plane points="70,214 176,160 318,192 214,250" opacity="0.18" />
    <Plane points="84,160 190,104 330,136 224,194" accent opacity="0.28" />
    <Plane points="110,112 204,72 302,96 208,142" opacity="0.2" />
    <Surface x={78} y={88} w={92} h={64} />
    <Surface x={206} y={78} w={114} h={74} accent />
    <Surface x={142} y={182} w={118} h={62} />
    <Strand d="M62 210 C124 162, 168 140, 224 136 S318 150, 354 106" accent width="2" opacity="0.58" />
    <Strand d="M72 238 C132 204, 182 192, 238 204 S320 220, 346 176" width="1.4" opacity="0.42" />
    <Strand d="M102 92 C154 122, 200 128, 254 110 S326 88, 350 128" dash="5 9" opacity="0.5" />
    <Core cx={208} cy={152} r={30} />
    <Aura cx={208} cy={152} r={76} opacity={0.18} />
    <circle cx="116" cy="166" r="5" fill={C.bright} opacity="0.7" />
    <circle cx="286" cy="132" r="4" fill={C.bright} opacity="0.55" />
    <circle cx="248" cy="214" r="3" fill={C.label} opacity="0.5" />
  </Panel>
);

const Erp = () => (
  <Panel label="Núcleo operativo">
    <ParticleField shift={-3} opacity={0.48} />
    <Aura cx={200} cy={150} r={92} opacity={0.2} pulse />
    <Aura cx={200} cy={150} r={58} opacity={0.32} />
    <ellipse cx="200" cy="150" rx="132" ry="50" fill="none" stroke={C.edgeGreen} strokeWidth="1.5" opacity="0.38" transform="rotate(-14 200 150)" />
    <ellipse cx="200" cy="150" rx="126" ry="42" fill="none" stroke={C.edge} strokeWidth="1.1" opacity="0.45" transform="rotate(20 200 150)" />
    <ellipse cx="200" cy="150" rx="104" ry="88" fill="none" stroke={C.edge} strokeWidth="1" opacity="0.32" />
    <Plane points="108,150 168,88 258,106 296,170 214,214 136,200" accent opacity="0.2" />
    <Plane points="130,146 184,116 252,132 266,176 204,196 150,182" opacity="0.34" />
    <g transform="rotate(-14 200 150)" opacity="0.72">
      <rect x="82" y="136" width="46" height="28" rx="8" fill="rgba(255,255,255,0.055)" stroke={C.nodeStroke} />
      <rect x="272" y="136" width="46" height="28" rx="8" fill="rgba(255,255,255,0.055)" stroke={C.nodeStroke} />
      <rect x="177" y="80" width="46" height="28" rx="8" fill="rgba(82,179,107,0.1)" stroke={C.edgeGreen} />
      <rect x="177" y="192" width="46" height="28" rx="8" fill="rgba(255,255,255,0.055)" stroke={C.nodeStroke} />
    </g>
    <g opacity="0.58">
      <path d="M191 136 H210 M191 150 H218 M191 164 H208" stroke={C.edgeGreen} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M180 132 V170 M220 132 V170" stroke={C.edge} strokeWidth="1" />
    </g>
    <Core cx={200} cy={150} r={38} />
    <circle cx="104" cy="130" r="6" fill={C.bright} opacity="0.48" />
    <circle cx="296" cy="174" r="7" fill={C.bright} opacity="0.55" />
    <circle cx="242" cy="74" r="4" fill={C.label} opacity="0.44" />
    <circle cx="152" cy="224" r="4" fill={C.label} opacity="0.44" />
  </Panel>
);

const Logistics = () => (
  <Panel label="Trazabilidad en tiempo real">
    <ParticleField shift={6} opacity={0.42} />
    <path d="M58 222 L112 186 L168 202 L226 160 L286 176 L346 118" fill="none" stroke={C.edge} strokeWidth="12" opacity="0.16" strokeLinecap="round" strokeLinejoin="round" />
    <Strand d="M46 214 C96 148, 146 120, 206 140 S300 208, 354 88" accent width="2.4" opacity="0.72" dash="8 9" />
    <Strand d="M42 238 C100 196, 158 188, 214 202 S304 232, 354 174" width="1.4" opacity="0.42" />
    <Strand d="M58 186 C104 124, 160 92, 222 108 S306 158, 342 114" width="1.2" opacity="0.34" />
    <Signal cx={330} cy={92} r={18} />
    <Aura cx={126} cy={158} r={26} opacity={0.2} />
    <Plane points="62,222 124,178 198,196 138,246" opacity="0.18" />
    <Plane points="204,142 274,104 340,126 270,168" accent opacity="0.18" />
    <g opacity="0.8">
      <path d="M108 178 L142 160 L176 178 V212 L142 232 L108 212 Z" fill="rgba(18,21,28,0.72)" stroke={C.nodeStroke} />
      <path d="M108 178 L142 198 L176 178 M142 198 V232" fill="none" stroke={C.edge} strokeWidth="1.1" />
      <path d="M140 158 L152 151 L164 158 L152 165 Z" fill={C.soft} stroke={C.edgeGreen} />
    </g>
    <circle cx="126" cy="158" r="5" fill={C.bright} opacity="0.58" />
    <circle cx="212" cy="142" r="4" fill={C.bright} opacity="0.48" />
    <circle cx="286" cy="174" r="4" fill={C.label} opacity="0.48" />
  </Panel>
);

const Ia = () => (
  <Panel label="Pipeline de decisión">
    <ParticleField shift={-6} opacity={0.62} />
    <g stroke={C.edge} strokeWidth="1" opacity="0.48">
      <path d="M106 128 L164 96 L220 126 L268 96 L318 134" />
      <path d="M106 182 L164 156 L220 188 L268 154 L318 178" />
      <path d="M164 96 L164 156 M220 126 L220 188 M268 96 L268 154" />
    </g>
    {[
      [106, 128],
      [106, 182],
      [164, 96],
      [164, 156],
      [220, 126],
      [220, 188],
      [268, 96],
      [268, 154],
      [318, 134],
      [318, 178],
    ].map(([x, y], index) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 3 === 0 ? "5" : "3.5"} fill={index % 3 === 0 ? C.bright : C.label} opacity="0.72" />
    ))}
    <Strand d="M58 156 C108 92, 172 88, 206 136 S286 218, 342 128" accent width="1.8" opacity="0.54" />
    <Strand d="M82 206 C130 158, 174 150, 224 170 S296 186, 328 96" dash="4 8" opacity="0.44" />
    <Strand d="M88 96 C142 148, 188 166, 256 142 S324 112, 354 180" width="1.2" opacity="0.34" />
    <Plane points="150,96 222,70 286,118 258,190 176,208 116,150" accent opacity="0.18" />
    <Plane points="178,116 226,104 260,138 242,176 194,184 160,150" opacity="0.32" />
    <polygon points="206,82 262,136 238,210 164,202 132,132" fill="rgba(82,179,107,0.08)" stroke={C.edgeGreen} strokeWidth="1.1" opacity="0.62" />
    <Aura cx={210} cy={148} r={82} opacity={0.2} pulse />
    <Core cx={210} cy={148} r={32} />
    <circle cx="156" cy="104" r="5" fill={C.bright} opacity="0.48" />
    <circle cx="266" cy="120" r="4" fill={C.bright} opacity="0.6" />
    <circle cx="242" cy="210" r="3.5" fill={C.label} opacity="0.5" />
    <circle cx="128" cy="182" r="3.5" fill={C.label} opacity="0.42" />
  </Panel>
);

const MAP = {
  sistemas: Sistemas,
  erp: Erp,
  logistics: Logistics,
  ia: Ia,
};

const PillarDiagram = ({ slug }) => {
  const Cmp = MAP[slug] ?? Sistemas;
  return <Cmp />;
};

export default PillarDiagram;
