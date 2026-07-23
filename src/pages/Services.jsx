import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Code as CodeIcon,
  Computer as ComputerIcon,
  RocketLaunch as RocketLaunchIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Support as SupportIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

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

      <section className="layer-panel section-py pt-0 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20 space-y-16 sm:space-y-24 md:space-y-28">
          {services.map((service, index) => {
            const ServiceIcon = SERVICE_ICONS[index];
            const isImageRight = index % 2 === 1;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-[var(--radius-exec)] border border-white/10 aspect-[4/3]">
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
                  <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
                  <div className="icon-badge mb-6">
                    <ServiceIcon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="display-title text-2xl sm:text-3xl lg:text-4xl mb-4">{service.title}</h2>
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
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.stackEyebrow")}</p>
            <h2 className="display-title text-2xl sm:text-3xl md:text-4xl mb-3">{t("services.stackTitle")}</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">{t("services.stackSub")}</p>
          </motion.div>
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            {techCats.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.processEyebrow")}</p>
            <h2 className="display-title text-2xl sm:text-3xl md:text-4xl mb-3">{t("services.processTitle")}</h2>
            <p className="text-on-surface-variant">{t("services.processSub")}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-5 sm:p-6 text-center"
              >
                <div className="icon-badge mx-auto mb-4 text-white font-semibold text-lg">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                <p className="text-xs text-primary mt-3 tracking-wide">{step.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">{t("services.whyEyebrow")}</p>
            <h2 className="display-title text-2xl sm:text-3xl md:text-4xl">{t("services.whyTitle")}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="icon-badge mx-auto mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
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
