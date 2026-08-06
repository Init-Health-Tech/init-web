import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import StackExplorer from "../components/StackExplorer";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyInitPrinciples from "../components/WhyInitPrinciples";
import ServiceStory from "../components/ServiceStory";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Code as CodeIcon,
  Monitor as ComputerIcon,
  Rocket as RocketLaunchIcon,
} from "lucide-react";

const SERVICE_ICONS = [CodeIcon, ComputerIcon, RocketLaunchIcon];
const SERVICE_ART = ["custom", "digital", "integration"];

const Services = () => {
  const { t, lang } = useLanguage();
  const services = t("services.items");
  const techCats = t("services.techCats");
  const process = t("services.process");
  const benefits = t("services.benefits");
  const seo = getPageSeo("services", lang);

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="systems" />
      <PageHeader eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />

      <section className="layer-panel bg-background/80 pt-4 sm:pt-8">
        {services.map((service, index) => (
          <ServiceStory
            key={service.title}
            service={service}
            index={index}
            artKind={SERVICE_ART[index]}
            Icon={SERVICE_ICONS[index]}
            imageRight={index % 2 === 1}
          />
        ))}
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-12 sm:mb-16 max-w-xl">
            <p className="eyebrow mb-4">{t("services.stackEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">{t("services.stackTitle")}</h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              {t("services.stackSub")}
            </p>
          </Reveal>
          <Reveal inView variant="up" delay={0.12}>
            <StackExplorer layers={techCats} hint={t("services.stackHint")} />
          </Reveal>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="up" className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.processEyebrow")}</p>
            <h2 className="display-section mb-3">{t("services.processTitle")}</h2>
            <p className="text-on-surface-variant">{t("services.processSub")}</p>
          </Reveal>
          <Reveal inView variant="up" delay={0.1}>
            <ProcessTimeline
              steps={process}
              label={t("services.processEyebrow")}
            />
          </Reveal>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="mb-12 sm:mb-16 max-w-xl">
            <p className="eyebrow mb-4">{t("services.whyEyebrow")}</p>
            <h2 className="display-section mb-3 text-balance">{t("services.whyTitle")}</h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              {t("services.whySub")}
            </p>
          </Reveal>
          <Reveal inView variant="up" delay={0.1}>
            <WhyInitPrinciples
              principles={benefits}
              hint={t("services.whyHint")}
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title={t("services.ctaTitle")}
        text={t("services.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
        secondaryLabel={t("services.ctaSecondary")}
        secondaryTo="/portfolio"
      />
    </div>
  );
};

export default Services;
