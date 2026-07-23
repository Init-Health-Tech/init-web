import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../data/seoData";

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
const StructuredData = ({ description, extra = [] }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "INIT",
          url: SITE_URL,
          logo: `${SITE_URL}/Init-Logo.svg`,
          description:
            description ||
            "Empresa de desarrollo de software a medida y consultoría en digitalización para empresas en México.",
          telephone: "+52 55 4761 7977",
          email: "support@init.com.mx",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ciudad López Mateos",
            addressRegion: "Estado de México",
            addressCountry: "MX",
          },
          areaServed: { "@type": "Country", name: "México" },
          knowsAbout: [
            "Desarrollo de software a medida",
            "Aplicaciones web empresariales",
            "Consultoría en digitalización",
            "Transformación digital",
            "Cyberseguridad",
            "Data Analysis",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "INIT",
          url: SITE_URL,
          description: description || "INIT — Desarrollo de software a medida en México.",
          inLanguage: "es-MX",
        },
        ...extra,
      ])}
    </script>
  </Helmet>
);

export default StructuredData;
