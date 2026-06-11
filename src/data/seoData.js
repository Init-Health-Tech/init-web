/**
 * SEO por ruta — posicionamiento global INIT.
 */
export const SITE_URL = "https://init.com.mx";
export const SITE_NAME = "INIT";

export const defaultKeywords = [
  "arquitectura tecnológica",
  "desarrollo software empresarial",
  "ERP Odoo",
  "logística RFID",
  "inteligencia aplicada",
  "sistemas empresariales",
  "INIT",
  "Brilliant Minds Building the Future",
].join(", ");

export const pageSeo = {
  home: {
    path: "/",
    title: "INIT — Brilliant Minds Building the Future",
    description:
      "Firma global de arquitectura tecnológica. Sistemas empresariales, ERP Odoo, INIT Logistics e inteligencia aplicada para el C-suite.",
    keywords: [
      "arquitectura tecnológica",
      "sistemas empresariales",
      "ERP Odoo implementación",
      "logística RFID IoT",
      "inteligencia aplicada empresas",
      "INIT software",
    ].join(", "),
  },
  team: {
    path: "/team",
    title: "Equipo INIT — Arquitectura Tecnológica",
    description:
      "Tres disciplinas. Un estándar. Arquitectura de sistemas, operaciones tecnológicas y trazabilidad logística.",
    keywords: [
      "equipo INIT",
      "arquitecto sistemas empresariales",
      "firma tecnología enterprise",
    ].join(", "),
  },
  services: {
    path: "/services",
    title: "Arquitectura INIT — Cuatro Pilares",
    description:
      "Sistemas Empresariales, ERP & Operaciones, INIT Logistics e Inteligencia Aplicada. Cuatro pilares. Un criterio.",
    keywords: [
      "sistemas empresariales",
      "ERP Odoo",
      "logística RFID",
      "inteligencia aplicada",
      "arquitectura software enterprise",
    ].join(", "),
  },
  solutions: {
    path: "/soluciones",
    title: "ERPinit e initlogistics — Plataformas INIT",
    description:
      "ERPinit e initlogistics: plataformas propias para operaciones que exigen criterio de implementación.",
    keywords: [
      "ERPinit",
      "initlogistics",
      "ERP empresarial",
      "trazabilidad RFID",
      "plataforma logística",
    ].join(", "),
  },
  portfolio: {
    path: "/portfolio",
    title: "Evidencia — INIT",
    description:
      "Decisiones estratégicas de empresas que eligieron INIT para su evolución operativa. JOFRA, TRANSCOM, CONFE y más.",
    keywords: [
      "evidencia INIT",
      "arquitectura empresarial casos",
      "sistemas empresariales referencias",
    ].join(", "),
  },
  contact: {
    path: "/contact",
    title: "Iniciar conversación — INIT",
    description:
      "INIT no abre proyectos. Abre conversaciones. Cuéntanos qué necesita tu operación. Respondemos en 24 horas.",
    keywords: [
      "contacto INIT",
      "arquitectura tecnológica consulta",
      "iniciar conversación INIT",
    ].join(", "),
  },
};

export const getPageSeo = (key) => pageSeo[key] ?? pageSeo.home;
