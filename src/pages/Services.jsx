import React from "react";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import Reveal from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Code as CodeIcon,
  Monitor as ComputerIcon,
  Rocket as RocketLaunchIcon,
  Shield as SecurityIcon,
  Gauge as SpeedIcon,
  LifeBuoy as SupportIcon,
  TrendingUp as TrendingUpIcon,
  CircleCheck as CheckCircleIcon,
} from "lucide-react";

const SERVICE_ICONS = [CodeIcon, ComputerIcon, RocketLaunchIcon];
const SERVICE_IMAGES = [
  "/servicios/desarrollo-software-a-medida.jpg",
  "/servicios/consultoria-transformacion-digital.jpg",
  "/servicios/soluciones-tecnologicas-integracion.jpg",
];
const TECH_ITEMS = {
  es: [
    ["React", "Vue.js"],
    ["Node.js", "Python", "Django"],
    ["PostgreSQL", "MongoDB"],
    ["AWS", "Docker", "Kubernetes"],
    ["Auditorías", "Hardening", "OWASP"],
    ["Data Analysis", "Data Science", "Power BI", "Tableau"],
  ],
  en: [
    ["React", "Vue.js"],
    ["Node.js", "Python", "Django"],
    ["PostgreSQL", "MongoDB"],
    ["AWS", "Docker", "Kubernetes"],
    ["Audits", "Hardening", "OWASP"],
    ["Data Analysis", "Data Science", "Power BI", "Tableau"],
  ],
};
const BENEFIT_ICONS = [SpeedIcon, SecurityIcon, SupportIcon, TrendingUpIcon];

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

      <section className="layer-panel section-py pt-10 sm:pt-14 md:pt-16 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 space-y-20 sm:space-y-28 md:space-y-32">
          {services.map((service, index) => {
            const ServiceIcon = SERVICE_ICONS[index];
            const isImageRight = index % 2 === 1;
            return (
              <Reveal
                key={service.title}
                inView
                variant={isImageRight ? "tiltRight" : "tilt"}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-[var(--radius-exec)] border border-on-surface/10 aspect-[4/3]">
                    <img
                      src={SERVICE_IMAGES[index]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className={isImageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="font-heading text-[13px] text-primary font-medium tracking-[0.16em] mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="icon-badge mb-6">
                    <ServiceIcon className="h-7 w-7 text-on-primary-container" />
                  </div>
                  <h2 className="display-section text-[clamp(1.5rem,3vw,2.25rem)] mb-4">{service.title}</h2>
                  <p className="text-base sm:text-lg text-on-surface mb-3 leading-relaxed">{service.intro}</p>
                  <p className="text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                    {service.featuresLabel}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-on-surface text-sm sm:text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-medium border-l-2 border-primary pl-4 leading-relaxed">
                    {service.result}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="blur" className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.stackEyebrow")}</p>
            <h2 className="display-section mb-3">{t("services.stackTitle")}</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">{t("services.stackSub")}</p>
          </Reveal>
          <Stagger inView className="flex flex-col items-center gap-8 sm:gap-10" stagger={0.16} delayChildren={0.12}>
            {techCats.map((cat, i) => (
              <StaggerItem
                key={cat.name}
                variant={i % 2 === 0 ? "left" : "right"}
                className="text-center px-1"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-on-surface-variant mb-3">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {(TECH_ITEMS[lang] || TECH_ITEMS.es)[i]?.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="up" className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.processEyebrow")}</p>
            <h2 className="display-section mb-3">{t("services.processTitle")}</h2>
            <p className="text-on-surface-variant">{t("services.processSub")}</p>
          </Reveal>
          <Stagger
            inView
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5"
            stagger={0.18}
            delayChildren={0.16}
            style={{ perspective: 1100 }}
          >
            {process.map((step, index) => (
              <StaggerItem key={step.title} variant="flip">
                <TiltCard className="glass-card p-5 sm:p-6 text-center h-full" maxTilt={12}>
                  <div className="icon-badge mx-auto mb-4 text-on-primary-container font-semibold text-lg font-heading">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                  <p className="text-xs text-primary mt-3 tracking-wide">{step.timeframe}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <Reveal inView variant="scale" className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.whyEyebrow")}</p>
            <h2 className="display-section">{t("services.whyTitle")}</h2>
          </Reveal>
          <Stagger inView className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12" stagger={0.18} delayChildren={0.12}>
            {benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              const variants = ["pop", "tilt", "tiltRight", "flip"];
              return (
                <StaggerItem key={b.title} variant={variants[i % variants.length]} className="text-center">
                  <div className="icon-badge mx-auto mb-5">
                    <Icon className="h-7 w-7 text-on-primary-container" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
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
