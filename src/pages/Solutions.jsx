import React from "react";
import { Link } from "react-router";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import SolutionBay from "../components/SolutionBay";
import { solutions } from "../data/solutionsData";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";

const Solutions = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("solutions", lang);
  const itemsCopy = t("solutions.items") || {};

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="minimal" />
      <PageHeader
        eyebrow={t("solutions.eyebrow")}
        title={t("solutions.title")}
        subtitle={t("solutions.subtitle")}
      />

      <section className="layer-panel section-py pt-8 sm:pt-12 md:pt-14 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="max-w-xl mb-10 sm:mb-12">
            <p className="eyebrow mb-4">{t("solutions.introEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">
              {t("solutions.introTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("solutions.introSub")}
            </p>
          </Reveal>

          <Reveal inView variant="up" delay={0.08}>
            <SolutionBay products={solutions} copy={itemsCopy} t={t} />
          </Reveal>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal
            inView
            variant="up"
            className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 md:gap-14 items-end"
          >
            <div>
              <p className="eyebrow mb-4">{t("solutions.fitEyebrow")}</p>
              <h2 className="display-section mb-4 text-balance">
                {t("solutions.fitTitle")}
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-xl">
                {t("solutions.fitSub")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-stretch sm:items-center md:pb-1">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center w-full"
              >
                {t("common.ctaEvaluate")}
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center w-full"
              >
                {t("solutions.ctaSecondary")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={t("solutions.ctaTitle")}
        text={t("solutions.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
        secondaryLabel={t("solutions.ctaSecondary")}
        secondaryTo="/services"
      />
    </div>
  );
};

export default Solutions;
