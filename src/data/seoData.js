/**
 * SEO por ruta: títulos, descripciones y palabras clave.
 * Las descriptions deben mantenerse entre ~150–160 caracteres cuando sea posible.
 */
export const SITE_URL = "https://init.com.mx";
export const SITE_NAME = "INIT";

export const defaultKeywords = [
  "desarrollo de software a medida",
  "software empresarial México",
  "aplicaciones web a medida",
  "consultoría en digitalización",
  "transformación digital",
  "desarrollo web México",
  "sistemas empresariales",
  "automatización de procesos",
  "integración de sistemas",
  "desarrollo de software Estado de México",
  "software para pymes México",
  "INIT",
].join(", ");

export const pageSeo = {
  home: {
    path: "/",
    title: "Desarrollo de Software a Medida en México",
    description:
      "Consultora de software a medida y digitalización en México. Primero evaluamos si podemos ayudar. Si no hay fit, te lo decimos — no vendemos por vender.",
    keywords: [
      "desarrollo de software a medida México",
      "aplicaciones web empresariales",
      "consultoría digitalización empresas",
      "transformación digital pymes",
      "software empresarial Estado de México",
      "sistemas de gestión a medida",
      "desarrollo web Ciudad López Mateos",
      "automatización procesos empresariales",
    ].join(", "),
  },
  team: {
    path: "/team",
    title: "Equipo de Desarrollo de Software y Consultoría Digital",
    description:
      "Equipo de desarrollo de software, consultoría en digitalización y transformación digital en México. Cofundadores, consultora senior y talento técnico de INIT.",
    keywords: [
      "equipo desarrollo software México",
      "consultores transformación digital",
      "desarrolladores software a medida",
      "empresa tecnología Estado de México",
      "equipo INIT",
    ].join(", "),
  },
  services: {
    path: "/services",
    title: "Servicios: Software a Medida y Digitalización",
    description:
      "Software a medida, digitalización e integración de sistemas para empresas en México. Pocos proyectos. Estándar alto. INIT.",
    keywords: [
      "servicios desarrollo software a medida",
      "consultoría transformación digital México",
      "desarrollo aplicaciones web empresariales",
      "integración de sistemas",
      "data analysis empresas",
      "cyberseguridad empresarial",
      "automatización procesos",
    ].join(", "),
  },
  solutions: {
    path: "/soluciones",
    title: "ERPinit e initlogistics: Software Listo para Empresas",
    description:
      "ERPinit e initlogistics: ERP y plataforma logística con trazabilidad RFID para empresas en México. Software listo para usar sin desarrollo a medida.",
    keywords: [
      "ERP México",
      "software ERP empresas",
      "logística RFID México",
      "initlogistics",
      "ERPinit",
      "software listo para usar",
      "trazabilidad logística",
    ].join(", "),
  },
  portfolio: {
    path: "/portfolio",
    title: "Proyectos y Clientes: Casos de Éxito en Software",
    description:
      "Casos de éxito de INIT: desarrollo web, software a medida y consultoría digital para CONFE, JOFRA, Carbiu, Polola's, TRANSCOM y Geller Abogados en México.",
    keywords: [
      "casos de éxito desarrollo software",
      "clientes software a medida México",
      "portafolio desarrollo web",
      "proyectos transformación digital",
      "empresa desarrollo software clientes",
    ].join(", "),
  },
  contact: {
    path: "/contact",
    title: "Evaluar fit: Consultoría de Software | INIT",
    description:
      "Conversación para determinar si INIT puede ayudar a tu empresa. Software a medida y digitalización en México. Si no hay encaje, te lo decimos.",
    keywords: [
      "contacto consultoría software México",
      "evaluar desarrollo software a medida",
      "consultoría digitalización México",
      "empresa software Estado de México",
    ].join(", "),
  },
};

export const getPageSeo = (key) => pageSeo[key] ?? pageSeo.home;
