/**
 * Portafolio: sectores donde hemos trabajado + vínculo a logos de clientes.
 * Detalle por cliente queda para la conversación de fit — no en tarjetas públicas.
 */
import { clientLogos, getClientLogo } from "./clientsData";

export const portfolioSectors = [
  {
    id: "social",
    clientIds: ["confe"],
  },
  {
    id: "industrial",
    clientIds: ["jofra"],
  },
  {
    id: "logistics",
    clientIds: ["transcom"],
  },
  {
    id: "legal",
    clientIds: ["geller"],
  },
  {
    id: "digital",
    clientIds: ["carbiu", "kairos"],
  },
  {
    id: "food",
    clientIds: ["pololas"],
  },
];

/** @deprecated Prefer portfolioSectors — kept for any leftover refs */
export const portfolioClients = [
  {
    id: 1,
    name: "CONFE",
    logo: "/clients/confe.png",
    lightBg: false,
    sectorId: "social",
    sector: "Sector social / institucional",
    initial: "C",
  },
  {
    id: 2,
    name: "JOFRA",
    logo: "/clients/jofra.png",
    lightBg: false,
    sectorId: "industrial",
    sector: "Sistemas y equipos",
    initial: "J",
  },
  {
    id: 3,
    name: "TRANSCOM",
    logo: "/clients/transcom.png",
    lightBg: false,
    engagement: "consultoria",
    sectorId: "logistics",
    sector: "Logística / Transporte",
    initial: "T",
  },
  {
    id: 4,
    name: "GELLER ABOGADOS",
    logo: "/clients/geller-abogados.png",
    lightBg: false,
    engagement: "consultoria",
    sectorId: "legal",
    sector: "Despacho jurídico",
    initial: "G",
  },
  {
    id: 5,
    name: "CARBIU",
    logo: "/clients/carbiu.png",
    lightBg: false,
    sectorId: "digital",
    sector: "Digital corporativo",
    initial: "B",
  },
  {
    id: 6,
    name: "POLOLA'S",
    logo: "/clients/pololas.png",
    lightBg: false,
    sectorId: "food",
    sector: "Gastronomía / Repostería",
    initial: "P",
  },
];

export const getSectorClients = (sectorId) => {
  const sector = portfolioSectors.find((s) => s.id === sectorId);
  if (!sector) return [];
  return sector.clientIds
    .map((id) => getClientLogo(id))
    .filter(Boolean);
};

export { clientLogos };
