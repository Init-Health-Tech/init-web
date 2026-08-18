import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyInitPrinciples from "../components/WhyInitPrinciples";
import MarketingIllustration from "../components/MarketingIllustration";
import { Stagger, StaggerItem } from "../components/Stagger";
import { getPageSeo } from "../data/seoData";
import { BRAND } from "../data/brandData";
import { useLanguage } from "../i18n/LanguageContext";

const Marketing = () => {
  const { t, lang } = useLanguage();
  const paths = t("marketing.paths");
  const process = t("marketing.process");
  const benefits = t("marketing.benefits");
  const seo = getPageSeo("marketing", lang);
  const serviceName =
    lang === "en" ? "Digital marketing consulting" : "Consultoría de marketing digital";

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
            name: serviceName,
            provider: {
              "@type": "Organization",
              name: "INIT",
              url: BRAND.siteUrl,
            },
            areaServed: ["MX", "Worldwide"],
            serviceType: serviceName,
            description: seo.description,
            url: `${BRAND.siteUrl}/marketing`,
          },
        ]}
      />
      <PageVideoBackground clip="minimal" />
      <PageHeader
        eyebrow={t("marketing.eyebrow")}
        title={t("marketing.title")}
        subtitle={t("marketing.subtitle")}
      />

      <section className="layer-panel section-py pt-4 sm:pt-8 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal inView variant="blur">
              <p className="eyebrow mb-4">{t("marketing.introEyebrow")}</p>
              <h2 className="display-section mb-5 text-balance">
                {t("marketing.introTitle")}
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-md">
                {t("marketing.introSub")}
              </p>
            </Reveal>
            <Reveal inView variant="up" delay={0.12}>
              <MarketingIllustration title={t("marketing.introTitle")} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="up" className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
            <p className="eyebrow mb-4">{t("marketing.pathsEyebrow")}</p>
            <h2 className="display-section mb-4 text-balance">
              {t("marketing.pathsTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("marketing.pathsSub")}
            </p>
          </Reveal>
          <Stagger
            inView
            className="grid sm:grid-cols-3 gap-10 md:gap-12"
            stagger={0.18}
          >
            {paths.map((item, i) => (
              <StaggerItem key={item.title} variant="up">
                <p className="font-heading text-[13px] text-secondary font-medium tracking-[0.16em] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl md:text-[1.35rem] font-semibold mb-3 tracking-tight text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
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
