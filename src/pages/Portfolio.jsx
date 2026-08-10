import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import ClientMarquee from "../components/ClientMarquee";
import StatTile from "../components/StatTile";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import SectorAtlas from "../components/SectorAtlas";
import { portfolioSectors, clientLogos } from "../data/portfolioData";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";

const Portfolio = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("portfolio", lang);
  const sectorsCopy = t("portfolio.sectors") || {};

  const stats = [
    { value: `${clientLogos.length}+`, label: t("portfolio.stats.clients") },
    { value: `${portfolioSectors.length}`, label: t("portfolio.stats.sectors") },
    { value: "100%", label: t("portfolio.stats.delivered") },
    { value: "MX", label: t("portfolio.stats.mexican") },
  ];

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="reveal" />
      <PageHeader
        eyebrow={t("portfolio.eyebrow")}
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
      />

      <section className="layer-panel section-py pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 bg-background/75">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatTile key={stat.label} {...stat} delay={i * 0.14} compact />
          ))}
        </div>
      </section>

      <section className="layer-panel section-py pt-14 sm:pt-20 md:pt-24 bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-10 sm:mb-14 max-w-2xl">
            <p className="eyebrow mb-4">{t("portfolio.sectorsEyebrow")}</p>
            <h2 className="display-section mb-4 text-balance">
              {t("portfolio.sectorsTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("portfolio.sectorsSub")}
            </p>
          </Reveal>

          <Reveal inView variant="up" delay={0.08}>
            <SectorAtlas
              sectors={portfolioSectors}
              copy={sectorsCopy}
              hint={t("portfolio.sectorsHint")}
            />
          </Reveal>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 mb-10 sm:mb-12">
          <Reveal inView variant="up" className="text-center max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("portfolio.clientsEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">
              {t("portfolio.clientsTitle")}
            </h2>
          </Reveal>
        </div>
        <ClientMarquee />
      </section>

      <CtaBanner
        title={t("portfolio.ctaTitle")}
        text={t("portfolio.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
      />
    </div>
  );
};

export default Portfolio;
