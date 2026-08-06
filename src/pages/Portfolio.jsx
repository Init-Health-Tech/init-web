import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import ClientMarquee from "../components/ClientMarquee";
import StatTile from "../components/StatTile";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Stagger";
import {
  portfolioSectors,
  getSectorClients,
  clientLogos,
} from "../data/portfolioData";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";

const Portfolio = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("portfolio", lang);

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

      <section className="layer-panel section-py pt-10 sm:pt-14 md:pt-16 pb-12 bg-background/75">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatTile key={stat.label} {...stat} delay={i * 0.14} compact />
          ))}
        </div>
      </section>

      <section className="layer-panel section-py pt-0 bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-12 sm:mb-16 max-w-2xl">
            <p className="eyebrow mb-4">{t("portfolio.sectorsEyebrow")}</p>
            <h2 className="display-section mb-4 text-balance">
              {t("portfolio.sectorsTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("portfolio.sectorsSub")}
            </p>
            <div className="section-title-rail mt-8" aria-hidden="true" />
          </Reveal>

          <Stagger inView className="divide-y divide-on-surface/10" stagger={0.14}>
            {portfolioSectors.map((sector, index) => {
              const loc = t(`portfolio.sectors.${sector.id}`) || {};
              const clients = getSectorClients(sector.id);
              const names = clients.map((c) => c.name).join(" · ");
              const n = String(index + 1).padStart(2, "0");

              return (
                <StaggerItem
                  key={sector.id}
                  variant={index % 2 === 0 ? "left" : "right"}
                  className="apple-row flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-8 sm:py-10"
                >
                  <span className="text-sm font-semibold text-primary tracking-wider tabular-nums shrink-0 sm:w-12 pt-1">
                    {n}
                  </span>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-2 text-balance">
                      {loc.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                      {loc.tease}
                    </p>
                    {names ? (
                      <p className="mt-3 text-sm text-on-surface/55 tracking-wide">
                        {names}
                      </p>
                    ) : null}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 mb-10 sm:mb-12">
          <Reveal inView variant="up" className="text-center max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("portfolio.clientsEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">
              {t("portfolio.clientsTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg">
              {t("portfolio.clientsSub")}
            </p>
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
