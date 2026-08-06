/**
 * Logos de clientes para marquee, casos de éxito y portafolio.
 */
export const clientLogos = [
  {
    id: "confe",
    name: "CONFE",
    logo: "/clients/confe.png",
    lightBg: false,
  },
  {
    id: "kairos",
    name: "KAIROS",
    logo: "/clients/kairos.png",
    lightBg: false,
  },
  {
    id: "transcom",
    name: "TRANSCOM",
    logo: "/clients/transcom.png",
    lightBg: false,
  },
  {
    id: "jofra",
    name: "JOFRA",
    logo: "/clients/jofra.png",
    lightBg: false,
  },
  {
    id: "carbiu",
    name: "Carbiu",
    logo: "/clients/carbiu.png",
    lightBg: false,
  },
  {
    id: "pololas",
    name: "Polola's",
    logo: "/clients/pololas.png",
    lightBg: false,
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
    (c) =>
      c.name.toLowerCase() === name.toLowerCase() ||
      c.id === name.toLowerCase() ||
      c.name.toLowerCase().replace(/\s+/g, "") === name.toLowerCase().replace(/\s+/g, "")
  );
