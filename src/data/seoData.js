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
    title: "INIT — Brilliant minds building the future",
    description:
      "INIT: Brilliant minds building the future. Consultora de software a medida y digitalización en México. Evaluamos fit — no vendemos por vender.",
    keywords: [
      "desarrollo de software a medida México",
      "aplicaciones web empresariales",
      "consultoría digitalización empresas",
      "transformación digital pymes",
      "software empresarial Ciudad de México",
      "sistemas de gestión a medida",
      "desarrollo web Ciudad de México",
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
      "empresa tecnología Ciudad de México",
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
    title: "ERPinit, CRMinit e initlogistics | Software Listo | INIT",
    description:
      "ERPinit, CRMinit e initlogistics: ERP, CRM y logística con RFID para empresas en México. Productos listos — siempre con evaluación de fit.",
    keywords: [
      "ERP México",
      "CRM México",
      "software CRM empresas",
      "logística RFID México",
      "initlogistics",
      "ERPinit",
      "CRMinit",
      "software listo para usar",
    ].join(", "),
  },
  portfolio: {
    path: "/portfolio",
    title: "Proyectos y Clientes: Sectores y Trabajo Real | INIT",
    description:
      "Sectores donde INIT ha acompañado operaciones reales: social, industrial, logística, legal, digital y gastronomía. Clientes en México — el detalle, al evaluar fit.",
    keywords: [
      "sectores desarrollo software México",
      "clientes software a medida",
      "portafolio consultoría digital",
      "transformación digital por industria",
      "empresa desarrollo software México",
    ].join(", "),
  },
  contact: {
    path: "/contact",
    title: "Conversemos: Consultoría de Software | INIT",
    description:
      "Conversación para alinear tu operación con INIT. Software a medida y digitalización en México — avanzamos cuando hay sincronía real.",
    keywords: [
      "contacto consultoría software México",
      "desarrollo software a medida",
      "consultoría digitalización México",
      "empresa software Ciudad de México",
    ].join(", "),
  },
};

import { messages } from "../i18n/messages";

/**
 * @param {string} key
 * @param {"es"|"en"} [lang="es"]
 */
export const getPageSeo = (key, lang = "es") => {
  const base = pageSeo[key] ?? pageSeo.home;
  const localized = messages[lang]?.seo?.[key] ?? messages.es.seo?.[key];
  if (!localized) return base;
  return {
    ...base,
    title: localized.title ?? base.title,
    description: localized.description ?? base.description,
    keywords: localized.keywords ?? base.keywords,
  };
};
