import React from "react";

/**
 * PillarDiagram — schematic, on-brand SVG diagrams for each architecture pillar.
 * Replaces stock/AI-looking photography with technical component diagrams.
 * Palette is fixed to the brand greens so it reads as "system", not "picture".
 */

const C = {
  bright: "#52B36B",
  mid: "#2E6A3A",
  node: "#12151C",
  nodeStroke: "rgba(255,255,255,0.14)",
  edge: "rgba(255,255,255,0.16)",
  edgeGreen: "rgba(82,179,107,0.55)",
  label: "#9AA3B2",
};

const Box = ({ x, y, w, h, label, accent }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="6"
      fill={C.node}
      stroke={accent ? C.edgeGreen : C.nodeStroke}
    />
    <text
      x={x + w / 2}
      y={y + h / 2 + 3.5}
      textAnchor="middle"
      fontSize="11"
      fontFamily="Space Grotesk, sans-serif"
      fill={accent ? C.bright : C.label}
    >
      {label}
    </text>
  </g>
);

const Panel = ({ label, children }) => (
  <div className="relative aspect-[4/3] rounded-lg border border-white/10 bg-surface-container/40 overflow-hidden">
    <div className="absolute inset-0 grid-pattern-lines opacity-50" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(70% 60% at 70% 20%, rgba(46,106,58,0.14), transparent 70%)",
      }}
    />
    <div className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] text-faint font-display">
      {label}
    </div>
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-hidden
    >
      {children}
    </svg>
  </div>
);

const Sistemas = () => (
  <Panel label="Arquitectura de sistema">
    {/* connectors */}
    <g stroke={C.edge} strokeWidth="1.5" fill="none">
      <path d="M90 108 V150" />
      <path d="M200 108 V150" />
      <path d="M310 108 V150" />
      <path d="M200 178 V210" />
      <path d="M90 238 V210 H310 V238" />
    </g>
    {/* tier 1 — surfaces */}
    <Box x={48} y={78} w={84} h={30} label="Web App" />
    <Box x={158} y={78} w={84} h={30} label="Portal" />
    <Box x={268} y={78} w={84} h={30} label="Dashboard" />
    {/* tier 2 — API */}
    <Box x={110} y={150} w={180} h={30} label="API · Integraciones" accent />
    {/* tier 3 — services */}
    <Box x={48} y={238} w={84} h={30} label="Datos" />
    <Box x={158} y={238} w={84} h={30} label="Servicios" />
    <Box x={268} y={238} w={84} h={30} label="Seguridad" />
  </Panel>
);

const Erp = () => {
  const cx = 200;
  const cy = 152;
  const nodes = [
    { x: 70, y: 74, label: "Finanzas" },
    { x: 268, y: 74, label: "Inventario" },
    { x: 70, y: 208, label: "Ventas" },
    { x: 268, y: 208, label: "Reportes" },
  ];
  return (
    <Panel label="Núcleo operativo">
      <g stroke={C.edgeGreen} strokeWidth="1.5" fill="none">
        {nodes.map((n) => (
          <line key={n.label} x1={cx} y1={cy} x2={n.x + 42} y2={n.y + 15} />
        ))}
      </g>
      {nodes.map((n) => (
        <Box key={n.label} x={n.x} y={n.y} w={84} h={30} label={n.label} />
      ))}
      <circle cx={cx} cy={cy} r="40" fill={C.node} stroke={C.edgeGreen} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke={C.bright} strokeWidth="1.5" opacity="0.4" className="animate-pulse" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill={C.bright} fontWeight="600">
        ERPinit
      </text>
    </Panel>
  );
};

const Logistics = () => (
  <Panel label="Trazabilidad en tiempo real">
    {/* route */}
    <path
      d="M96 150 C 150 90, 250 210, 316 118"
      fill="none"
      stroke={C.edgeGreen}
      strokeWidth="2"
      strokeDasharray="5 6"
    />
    {/* waypoints */}
    {[
      [150, 122],
      [200, 150],
      [250, 168],
    ].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={C.bright} />
    ))}
    {/* warehouse */}
    <Box x={54} y={135} w={72} h={30} label="Almacén" />
    {/* asset + RFID scan */}
    <g>
      <circle cx={316} cy={118} r="7" fill={C.node} stroke={C.bright} strokeWidth="1.5" />
      <circle cx={316} cy={118} r="14" fill="none" stroke={C.edgeGreen} strokeWidth="1.5" opacity="0.6" className="animate-pulse" />
      <circle cx={316} cy={118} r="22" fill="none" stroke={C.edgeGreen} strokeWidth="1" opacity="0.3" />
      <text x={316} y={158} textAnchor="middle" fontSize="11" fontFamily="Space Grotesk, sans-serif" fill={C.label}>
        Activo · RFID
      </text>
    </g>
    {/* IoT tag chips */}
    <g>
      <Box x={150} y={220} w={64} h={26} label="IoT" />
      <Box x={228} y={220} w={64} h={26} label="Sensor" />
      <line x1={182} y1={220} x2={200} y2={158} stroke={C.edge} strokeWidth="1.2" />
      <line x1={260} y1={220} x2={250} y2={176} stroke={C.edge} strokeWidth="1.2" />
    </g>
  </Panel>
);

const Ia = () => {
  const inputs = [90, 150, 210];
  const layerA = [110, 170, 230];
  const layerB = [130, 200];
  const l1x = 150;
  const l2x = 240;
  const inX = 70;
  const outX = 330;
  const outY = 150;
  return (
    <Panel label="Pipeline de decisión">
      {/* edges input -> layerA */}
      <g stroke={C.edge} strokeWidth="1" fill="none">
        {inputs.map((iy) =>
          layerA.map((ay) => <line key={`a${iy}-${ay}`} x1={inX} y1={iy} x2={l1x} y2={ay} />)
        )}
        {layerA.map((ay) =>
          layerB.map((by) => <line key={`b${ay}-${by}`} x1={l1x} y1={ay} x2={l2x} y2={by} />)
        )}
        {layerB.map((by) => (
          <line key={`o${by}`} x1={l2x} y1={by} x2={outX - 16} y2={outY} stroke={C.edgeGreen} />
        ))}
      </g>
      {/* input nodes */}
      {inputs.map((iy) => (
        <circle key={`in${iy}`} cx={inX} cy={iy} r="6" fill={C.node} stroke={C.nodeStroke} />
      ))}
      <text x={inX} y={245} textAnchor="middle" fontSize="10" fontFamily="Space Grotesk, sans-serif" fill={C.label}>Datos</text>
      {/* hidden layers */}
      {layerA.map((ay) => (
        <circle key={`la${ay}`} cx={l1x} cy={ay} r="8" fill={C.node} stroke={C.edgeGreen} />
      ))}
      {layerB.map((by) => (
        <circle key={`lb${by}`} cx={l2x} cy={by} r="8" fill={C.node} stroke={C.edgeGreen} />
      ))}
      <text x={195} y={245} textAnchor="middle" fontSize="10" fontFamily="Space Grotesk, sans-serif" fill={C.label}>Modelo · Agentes</text>
      {/* output */}
      <circle cx={outX} cy={outY} r="16" fill={C.node} stroke={C.bright} strokeWidth="1.5" />
      <circle cx={outX} cy={outY} r="16" fill="none" stroke={C.bright} strokeWidth="1.5" opacity="0.35" className="animate-pulse" />
      <text x={outX} y={outY + 3.5} textAnchor="middle" fontSize="9.5" fontFamily="Space Grotesk, sans-serif" fill={C.bright}>Decisión</text>
    </Panel>
  );
};

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
