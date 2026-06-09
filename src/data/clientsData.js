/**
 * Logos de clientes para marquee, casos de éxito y portafolio.
 */
export const clientLogos = [
  {
    id: "confe",
    name: "CONFE",
    logo: "/clients/confe.png",
    lightBg: true,
  },
  {
    id: "kairos",
    name: "KAIROS",
    logo: "/clients/kairos.png",
    lightBg: true,
  },
  {
    id: "transcom",
    name: "TRANSCOM",
    logo: "/clients/transcom.png",
    lightBg: false,
    dimmedColor: true,
  },
  {
    id: "geller",
    name: "Geller Abogados",
    logo: "/clients/geller-abogados.png",
    lightBg: false,
  },
];

export const getClientLogo = (name) =>
  clientLogos.find(
    (c) => c.name.toLowerCase() === name.toLowerCase() || c.id === name.toLowerCase()
  );
