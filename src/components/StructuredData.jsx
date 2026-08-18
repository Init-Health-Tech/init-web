import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Organization + WebSite JSON-LD, shared across every page so search
 * engines see consistent structured data no matter which route someone
 * lands on first (previously this only existed on Home).
 *
 * `description` lets each page pass its own page-specific summary while
 * keeping the same business identity (name, contact, address) everywhere.
 * `extra` lets a page (e.g. Home) append additional schema.org entries
 * (LocalBusiness/ProfessionalService, etc.) without duplicating the
 * Organization + WebSite blocks below.
 */
const StructuredData = ({ description, extra = [] }) => {
  const { lang } = useLanguage();
  const inLanguage = lang === "en" ? "en" : "es-MX";
  const defaultDescription =
    lang === "en"
      ? "Custom software, digitalization, and marketing consultancy for companies in Mexico."
      : "Empresa de desarrollo de software a medida, digitalización y marketing para empresas en México.";
  const defaultSiteDescription =
    lang === "en"
      ? "INIT — Custom software and marketing in Mexico."
      : "INIT — Desarrollo de software y marketing en México.";
  const knowsAbout =
    lang === "en"
      ? [
          "Custom software development",
          "Business web applications",
          "Digitalization consulting",
          "Digital transformation",
          "Digital marketing",
          "Cybersecurity",
          "Data Analysis",
        ]
      : [
          "Desarrollo de software a medida",
          "Aplicaciones web empresariales",
          "Consultoría en digitalización",
          "Transformación digital",
          "Marketing digital",
          "Cyberseguridad",
          "Data Analysis",
        ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "INIT",
            url: SITE_URL,
            logo: `${SITE_URL}/Init-Logo.svg`,
            description: description || defaultDescription,
            telephone: "+52 55 4761 7977",
            email: "support@init.com.mx",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad de México",
              addressRegion: "Ciudad de México",
              addressCountry: "MX",
            },
            areaServed: [
              { "@type": "Country", name: lang === "en" ? "Mexico" : "México" },
              { "@type": "Place", name: lang === "en" ? "Worldwide" : "Mundial" },
            ],
            knowsAbout,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "INIT",
            url: SITE_URL,
            description: description || defaultSiteDescription,
            inLanguage,
          },
          ...extra,
        ])}
      </script>
    </Helmet>
  );
};

export default StructuredData;
