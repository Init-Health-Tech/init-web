/**
 * Proyectos y clientes — proyectos narrados como decisiones estratégicas.
 */
export const portfolioClients = [
  {
    id: 2,
    name: "JOFRA",
    logo: "/clients/jofra.png",
    lightBg: false,
    dimmedColor: true,
    industry: "Manufactura industrial",
    sector: "Manufactura · Sistemas industriales",
    sectorDetail: "Sistemas y equipos industriales",
    contexto: "Operaciones fragmentadas. Sistemas que no conversaban.",
    decision: "Apostar por arquitectura de software empresarial desde cero — no parches.",
    estado: "Operaciones unificadas con sistemas que escalan con la operación.",
    summary: "De procesos manuales a un sistema nervioso central.",
    result: "Operaciones unificadas con arquitectura escalable.",
    initial: "J",
  },
  {
    id: 3,
    name: "TRANSCOM",
    logo: "/clients/transcom.png",
    lightBg: false,
    dimmedColor: true,
    engagement: "consultoria",
    industry: "Logística y transporte",
    sector: "Logística · Transporte",
    sectorDetail: "Logística y transporte",
    contexto: "Decisiones logísticas sin visibilidad en campo.",
    decision: "Priorizar claridad operativa antes de implementar tecnología.",
    estado: "Hoja de ruta definida hacia trazabilidad RFID e integración operativa.",
    summary: "La trazabilidad que la operación ya necesitaba.",
    result: "Claridad operativa antes de la implementación.",
    initial: "T",
  },
  {
    id: 1,
    name: "CONFE",
    logo: "/clients/confe.png",
    lightBg: true,
    industry: "Sector social e institucional",
    sector: "Institucional · Sector social",
    sectorDetail: "Organización institucional",
    contexto: "Procesos dispersos. Atención sin un eje central.",
    decision: "Unificar la operación institucional en un solo sistema.",
    estado: "Procesos y atención centralizados con seguimiento continuo.",
    summary: "Una institución que operaba en silos. Ahora, un sistema.",
    result: "Operación institucional con un solo eje.",
    initial: "C",
  },
  {
    id: 4,
    name: "GELLER ABOGADOS",
    logo: "/clients/geller-abogados.png",
    lightBg: false,
    engagement: "consultoria",
    industry: "Servicios jurídicos",
    sector: "Despacho jurídico",
    sectorDetail: "Despacho de abogados",
    contexto: "Gestión documental y expedientes sin visibilidad unificada.",
    decision: "Diagnosticar antes de implementar — criterio sobre velocidad.",
    estado: "Hoja de ruta clara para optimizar la operación del despacho.",
    summary: "Orden operativo antes de arquitectura.",
    result: "Diagnóstico y prioridades definidas.",
    initial: "G",
  },
  {
    id: 5,
    name: "CARBIU",
    logo: "/clients/carbiu.png",
    lightBg: false,
    dimmedColor: true,
    industry: "Corporativo",
    sector: "Corporativo",
    sectorDetail: "Cliente corporativo",
    contexto: "Presencia digital y procesos internos desconectados.",
    decision: "Construir canal digital y automatización en un solo criterio.",
    estado: "Presencia web optimizada y procesos automatizados.",
    summary: "Canal digital con automatización operativa.",
    result: "Operación digital unificada.",
    initial: "B",
  },
  {
    id: 6,
    name: "POLOLA'S",
    logo: "/clients/pololas.png",
    lightBg: true,
    industry: "Gastronomía y retail",
    sector: "Gastronomía",
    sectorDetail: "Productos gastronómicos",
    contexto: "Venta y pedidos sin un canal digital propio.",
    decision: "Un sistema que sostuviera venta, catálogo y gestión de órdenes.",
    estado: "Canal digital operativo desde un solo sistema.",
    summary: "De mostrador a sistema de pedidos propio.",
    result: "Venta y gestión centralizadas.",
    initial: "P",
  },
];

/** Tres casos destacados para home */
export const featuredEvidence = portfolioClients.filter((c) =>
  ["JOFRA", "TRANSCOM", "CONFE"].includes(c.name)
);

/** Sectores/industrias únicos trabajados — derivados de los proyectos reales. */
export const industries = [...new Set(portfolioClients.map((c) => c.industry))];

/** Cifras agregadas para la página de Proyectos y Clientes. */
export const projectStats = [
  { num: `${industries.length}`, label: "Sectores trabajados", sub: "industrias con criterio propio" },
  { num: `${portfolioClients.length}`, label: "Proyectos y clientes", sub: "relaciones de largo plazo" },
  { num: "100%", label: "Desarrollo in-house", sub: "sin subcontratar el criterio" },
  { num: "24 h", label: "Primera respuesta", sub: "directo con quien construye" },
];
