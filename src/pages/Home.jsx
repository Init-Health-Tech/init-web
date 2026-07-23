import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import ClientLogo from "../components/ClientLogo";
import PartnerSection from "../components/PartnerSection";
import CtaBanner from "../components/CtaBanner";
import { clientLogos, getClientLogo } from "../data/clientsData";
import { getPageSeo } from "../data/seoData";
import { BRAND } from "../data/brandData";
import { useLanguage } from "../i18n/LanguageContext";
import {
  ArrowForward as ArrowForwardIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from "@mui/icons-material";

const pillarIcons = [CodeIcon, ErpIcon, LogisticsIcon, IaIcon];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  const { t, lang } = useLanguage();
  const pillars = t("home.pillars");
  const services = t("home.services");
  const successCases = t("home.cases");
  const seo = getPageSeo("home", lang);

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
        <div className="hero-scrim absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center pt-28 sm:pt-32 pb-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10 md:mb-14"
          >
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-on-surface">
              {BRAND.name}
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-secondary font-medium tracking-wide px-2">
              {BRAND.slogan}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-lg md:text-xl italic text-on-surface-variant mb-6 tracking-tight"
          >
            {TAGLINE}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-title text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto text-balance"
          >
            {t("home.h1Line1")}
            <br />
            <span className="text-primary">{t("home.h1Line2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.22 }}
            className="text-[15px] sm:text-[17px] md:text-xl text-on-surface-variant max-w-lg mx-auto mb-10 sm:mb-12 md:mb-14 leading-relaxed px-1"
          >
            {t("home.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
          >
            <Link to="/portfolio" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              {t("home.ctaWork")}
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              {t("home.ctaHelp")}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 sm:mt-24 md:mt-28 text-on-surface-variant/70"
            aria-hidden="true"
          >
            <ChevronDownIcon className="h-7 w-7 mx-auto animate-[bounce-slow_2.4s_ease-in-out_infinite]" />
          </motion.div>
        </div>
      </section>

      <section className="layer-reveal relative py-20 sm:py-28 md:py-36">
        <div className="absolute inset-0 bg-background/40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
          <motion.p
            {...fadeUp}
            className="display-title text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-on-surface max-w-3xl mx-auto leading-[1.15] text-balance"
          >
            {t("home.scarcity1")}
            <span className="block mt-3 md:mt-4 text-on-surface-variant font-normal tracking-tight text-xl sm:text-3xl md:text-4xl">
              {t("home.scarcity2")}
            </span>
          </motion.p>
        </div>
      </section>

      <section className="layer-reveal relative section-py">
        <div className="absolute inset-0 bg-background/55 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-14 sm:mb-20 md:mb-28">
            <p className="eyebrow mb-5">{t("home.diffEyebrow")}</p>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-5 sm:mb-6 text-balance">
              {t("home.diffTitle")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              {t("home.diffSub")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="text-[13px] text-primary font-medium tracking-[0.12em] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl md:text-[1.35rem] font-semibold mb-3 tracking-tight text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <p className="eyebrow mb-5">{t("home.servicesEyebrow")}</p>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl mb-5 text-balance">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              {t("home.servicesSub")}
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {services.map((row, i) => (
              <motion.div
                key={row.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-5">{t("home.aboutEyebrow")}</p>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-5 leading-relaxed">
              {t("team.compositionAbout")} {t("home.aboutExtra")}
            </p>
            <p className="text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
              {t("home.aboutLocation")}
            </p>
            <Link to="/team" className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
              {t("home.aboutCta")}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
            <img
              src="/empleados-fotos/init-team.jpg"
              alt="INIT"
              className="w-full object-cover aspect-[4/3] rounded-[var(--radius-exec)] border border-white/12"
            />
          </motion.div>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-5">{t("home.trustEyebrow")}</p>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl mb-4 text-balance">
              {t("home.trustTitle")}
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg">{t("home.trustSub")}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
            {successCases.map((item, i) => (
              <motion.div
                key={item.client}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group text-center"
              >
                {getClientLogo(item.name) && (
                  <div
                    className={`success-case-logo flex items-center justify-center mb-7 h-32 sm:h-36 md:h-40 border rounded-[var(--radius-exec)] ${
                      item.client === "CONFE" || item.client === "Polola's"
                        ? `success-case-logo--${item.client === "CONFE" ? "confe" : "pololas"} bg-white border-white/25 p-3`
                        : "bg-surface-container border-white/12"
                    }`}
                  >
                    <ClientLogo
                      client={
                        item.name === "CONFE"
                          ? { ...getClientLogo(item.name), lightBg: false }
                          : getClientLogo(item.name)
                      }
                      size="lg"
                      variant="featured"
                      className={item.name === "CONFE" ? "success-case-confe-logo" : ""}
                    />
                  </div>
                )}
                <p className="font-semibold text-on-surface text-lg mb-2">{item.client}</p>
                <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-xs mx-auto">
                  {item.tease}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link to="/portfolio" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-sm mx-auto">
              {t("home.explorePortfolio")}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <PartnerSection />

      <section className="layer-panel py-12 sm:py-16 bg-surface-container-low border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 sm:gap-16 opacity-80">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} client={client} size="md" />
          ))}
        </div>
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
