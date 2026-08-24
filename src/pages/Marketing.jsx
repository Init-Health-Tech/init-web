import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyInitPrinciples from "../components/WhyInitPrinciples";
import ServiceStory from "../components/ServiceStory";
import MarketingServiceIllustration from "../components/MarketingServiceIllustration";
import { getPageSeo } from "../data/seoData";
import { BRAND } from "../data/brandData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Share2 as ShareIcon,
  Brain as BrainIcon,
  Megaphone as MegaphoneIcon,
} from "lucide-react";

const MARKETING_ICONS = [ShareIcon, BrainIcon, MegaphoneIcon];
const MARKETING_ART = ["digital", "neuro", "traditional"];

const Marketing = () => {
  const { t, lang } = useLanguage();
  const items = t("marketing.items");
  const process = t("marketing.process");
  const benefits = t("marketing.benefits");
  const seo = getPageSeo("marketing", lang);
  const catalogName =
    lang === "en"
      ? "INIT marketing services"
      : "Servicios de marketing INIT";
  const serviceTypes =
    lang === "en"
      ? ["Digital marketing", "Neuromarketing", "Traditional marketing"]
      : ["Marketing digital", "Neuromarketing", "Marketing tradicional"];

  return (
    <div className="min-h-screen relative z-10">
      <PageHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
      />
      <StructuredData
        description={seo.description}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: catalogName,
            provider: {
              "@type": "Organization",
              name: "INIT",
              url: BRAND.siteUrl,
            },
            areaServed: ["MX", "Worldwide"],
            serviceType: serviceTypes,
            description: seo.description,
            url: `${BRAND.siteUrl}/marketing`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: catalogName,
              itemListElement: items.map((item, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: item.title,
                  description: item.description,
                  serviceType: serviceTypes[i],
                },
              })),
            },
          },
        ]}
      />
      <PageVideoBackground clip="minimal" />
      <PageHeader
        eyebrow={t("marketing.eyebrow")}
        title={t("marketing.title")}
        subtitle={t("marketing.subtitle")}
      />

      <section className="layer-panel bg-background/80 pt-4 sm:pt-8">
        {items.map((service, index) => (
          <ServiceStory
            key={service.title}
            service={service}
            index={index}
            artKind={MARKETING_ART[index]}
            Icon={MARKETING_ICONS[index]}
            imageRight={index % 2 === 1}
            tone="marketing"
            Illustration={MarketingServiceIllustration}
          />
        ))}
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="up" className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("marketing.processEyebrow")}</p>
            <h2 className="display-section mb-3">{t("marketing.processTitle")}</h2>
            <p className="text-on-surface-variant">{t("marketing.processSub")}</p>
          </Reveal>
          <Reveal inView variant="up" delay={0.1}>
            <ProcessTimeline
              steps={process}
              label={t("marketing.processEyebrow")}
            />
          </Reveal>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-12 sm:mb-16 max-w-xl">
            <p className="eyebrow mb-4">{t("marketing.whyEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">
              {t("marketing.whyTitle")}
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              {t("marketing.whySub")}
            </p>
          </Reveal>
          <Reveal inView variant="up" delay={0.1}>
            <WhyInitPrinciples
              principles={benefits}
              hint={t("marketing.whyHint")}
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={t("marketing.ctaTitle")}
        text={t("marketing.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
        secondaryLabel={t("marketing.ctaSecondary")}
        secondaryTo="/services"
      />
    </div>
  );
};

export default Marketing;
