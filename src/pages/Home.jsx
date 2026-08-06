import React from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import PageHead from "../components/PageHead";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import ClientMarquee from "../components/ClientMarquee";
import PartnerSection from "../components/PartnerSection";
import CtaBanner from "../components/CtaBanner";
import { HeroEntryBurst } from "../components/PearlAtmosphere";
import MagneticLink from "../components/MagneticLink";
import Reveal from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Stagger";
import { getPageSeo } from "../data/seoData";
import { BRAND } from "../data/brandData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  ArrowRight as ArrowForwardIcon,
  ChevronDown as ChevronDownIcon,
} from "lucide-react";
import { appleEase } from "../lib/motion";

const Home = () => {
  const { t, lang } = useLanguage();
  const pillars = t("home.pillars");
  const services = t("home.services");
  const seo = getPageSeo("home", lang);
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen">
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
            "@type": "ProfessionalService",
            name: "INIT — Brilliant minds building the future",
            url: BRAND.siteUrl,
            image: `${BRAND.siteUrl}/Init-Logo.svg`,
            telephone: "+52 55 4761 7977",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad López Mateos",
              addressRegion: "Estado de México",
              addressCountry: "MX",
            },
            serviceType:
              lang === "en"
                ? [
                    "Custom software development",
                    "Digital transformation consulting",
                    "Web application development",
                    "Systems integration",
                  ]
                : [
                    "Desarrollo de software a medida",
                    "Consultoría en transformación digital",
                    "Desarrollo de aplicaciones web",
                    "Integración de sistemas",
                  ],
          },
        ]}
      />

      <PageVideoBackground clip="cinematic" />

      <section className="layer-reveal relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Ambient pearl only — video background parked for now */}
        <HeroEntryBurst />
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center pt-28 sm:pt-32 pb-20 sm:pb-24">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: appleEase }}
            className="mb-8 sm:mb-10 md:mb-14"
          >
            <img
              src="/Init-Logo-black.svg"
              alt="INIT"
              className="h-12 sm:h-14 md:h-16 w-auto mx-auto object-contain"
            />
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: appleEase }}
              className="mt-3 text-sm sm:text-base md:text-lg text-secondary font-medium tracking-wide px-2"
            >
              {BRAND.slogan}
            </motion.p>
          </motion.div>

          <motion.h1
            initial={
              reduce
                ? false
                : { opacity: 0, y: 40, rotateX: 28, transformPerspective: 1000 }
            }
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.35, delay: 0.45, ease: appleEase }}
            className="display-hero mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto text-balance"
            style={{ transformStyle: "preserve-3d" }}
          >
            {t("home.h1Line1")}
            <br />
            <span className="text-primary">{t("home.h1Line2")}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.72, ease: appleEase }}
            className="text-[15px] sm:text-[17px] md:text-xl text-on-surface-variant max-w-lg mx-auto mb-10 sm:mb-12 md:mb-14 leading-relaxed px-1"
          >
            {t("home.sub")}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.95, ease: appleEase }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
          >
            <MagneticLink
              to="/portfolio"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("home.ctaWork")}
            </MagneticLink>
            <MagneticLink
              to="/contact"
              className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              strength={0.22}
            >
              {t("home.ctaHelp")}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.55, ease: appleEase }}
            className="mt-16 sm:mt-24 md:mt-28 flex flex-col items-center gap-4 text-on-surface-variant/70"
            aria-hidden="true"
          >
            <div className="section-title-rail h-10 sm:h-12 opacity-80" />
            <ChevronDownIcon className="h-7 w-7 animate-[bounce-slow_2.4s_ease-in-out_infinite]" />
          </motion.div>
        </div>
      </section>

      <section className="layer-reveal relative py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0 bg-background/40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
          <Reveal inView variant="blur" className="max-w-3xl mx-auto">
            <div className="rail-vertical rail-vertical--center h-12 sm:h-16 mb-8 sm:mb-10 opacity-70" aria-hidden="true" />
            <p className="display-quote text-on-surface leading-[1.15] text-balance">
              {t("home.scarcity1")}
              <span className="block mt-3 md:mt-5 text-on-surface-variant font-normal tracking-tight text-[0.72em] sm:text-[0.78em]">
                {t("home.scarcity2")}
              </span>
            </p>
            <div className="section-rule mt-10 sm:mt-12" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="layer-reveal relative section-py">
        <div className="absolute inset-0 bg-background/55 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <Reveal inView variant="up" className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 md:mb-28">
            <p className="eyebrow mb-5">{t("home.diffEyebrow")}</p>
            <h2 className="display-section mb-5 sm:mb-6 text-balance">
              {t("home.diffTitle")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              {t("home.diffSub")}
            </p>
          </Reveal>

          <Stagger
            inView
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-14"
            stagger={0.22}
            style={{ perspective: 1100 }}
          >
            {pillars.map((item, i) => {
              const variants = ["tilt", "flip", "tiltRight"];
              return (
                <StaggerItem
                  key={item.title}
                  variant={variants[i % variants.length]}
                  className="text-center md:text-left"
                >
                  <p className="font-heading text-[13px] text-primary font-medium tracking-[0.16em] mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl md:text-[1.4rem] font-semibold mb-3 tracking-tight text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">{item.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <Reveal inView variant="left" className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 md:mb-20">
            <p className="eyebrow mb-5">{t("home.servicesEyebrow")}</p>
            <h2 className="display-section mb-5 text-balance">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("home.servicesSub")}
            </p>
          </Reveal>

          <Stagger inView className="max-w-2xl mx-auto" stagger={0.2} delayChildren={0.16}>
            {services.map((row, i) => (
              <StaggerItem key={row.title} variant={i % 2 === 0 ? "left" : "right"}>
                <Link to="/services" className="apple-row group">
                  <div className="text-left min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                      {row.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-on-surface-variant mt-1.5 leading-relaxed">
                      {row.hint}
                    </p>
                  </div>
                  <ArrowForwardIcon
                    className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Equipo oculto de momento — sección "Quiénes somos" + CTA a /team
      <section className="layer-panel section-py bg-surface-container-low">
        ...
      </section>
      */}

      <PartnerSection />

      <section className="layer-panel py-14 sm:py-16 bg-surface-container-low border-y border-on-surface/10 overflow-hidden">
        <ClientMarquee />
      </section>

      <CtaBanner
        title={t("home.ctaTitle")}
        text={t("home.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
        secondaryLabel={t("home.ctaSecondary")}
        secondaryTo="/services"
      />
    </div>
  );
};

export default Home;
