import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, defaultKeywords } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * SEO por ruta: title, description, keywords, canonical y Open Graph.
 */
export default function PageHead({
  title,
  description,
  path = "",
  keywords = defaultKeywords,
  noindex = false,
}) {
  const { lang } = useLanguage();
  const suffix = ` | ${SITE_NAME}`;
  const fullTitle =
    title.endsWith(suffix) || title.endsWith(SITE_NAME) ? title : `${title}${suffix}`;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = `${SITE_URL}/Init-Logo.svg`;
  const htmlLang = lang === "en" ? "en" : "es-MX";
  const ogLocale = lang === "en" ? "en_US" : "es_MX";
  const ogLocaleAlt = lang === "en" ? "es_MX" : "en_US";

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
