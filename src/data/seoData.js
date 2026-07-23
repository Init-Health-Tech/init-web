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
    title: "INIT — Brilliant minds building the future",
    description:
      "INIT: Brilliant minds building the future. Consultora de software a medida y digitalización en México. Evaluamos fit — no vendemos por vender.",
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
    title: "Servicios: Software a Medida y Digitalización",
    description:
      "Software a medida, digitalización e integración de sistemas para empresas en México. Pocos proyectos. Estándar alto. INIT.",
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
