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
      "Desarrollo de software a medida, aplicaciones web y consultoría en digitalización para empresas y pymes en México. Sistemas empresariales, automatización e integración de sistemas.",
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
    title: "Servicios de Desarrollo de Software y Consultoría Digital",
    description:
      "Desarrollo de software a medida, consultoría en transformación digital, Data Analysis, Data Science y cyberseguridad para empresas en México.",
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
    title: "Contacto: Solicita tu Proyecto de Software",
    description:
      "Solicita una propuesta de desarrollo de software a medida o consultoría en digitalización. INIT — Ciudad López Mateos, Estado de México. Respuesta en español.",
    keywords: [
      "contacto desarrollo software México",
      "cotizar software a medida",
      "solicitar propuesta desarrollo web",
      "consultoría digitalización contacto",
      "empresa software Estado de México",
    ].join(", "),
  },
};

export const getPageSeo = (key) => pageSeo[key] ?? pageSeo.home;
