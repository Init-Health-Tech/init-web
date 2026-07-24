import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import NeuralFluidBackground from "../components/NeuralFluidBackground";
import ClientLogo from "../components/ClientLogo";
import PillarDiagram from "../components/PillarDiagram";
import { getPageSeo, SITE_URL } from "../data/seoData";
import {
  TAGLINE,
  hero,
  homeIntro,
  homeAI,
  homeStats,
  pillars,
  whatWeDo,
  criteria,
  ctaFinal,
} from "../data/siteCopy";
import { clientLogos } from "../data/clientsData";
import { featuredEvidence, industries, portfolioClients } from "../data/portfolioData";
import {
  Layers as SistemasIcon,
  Hub as ErpIcon,
  Sensors as LogisticsIcon,
  Psychology as IaIcon,
  ArrowForward as ArrowIcon,
  ArrowOutward as ArrowOutIcon,
} from "@mui/icons-material";

const pillarIcons = {
  sistemas: SistemasIcon,
  erp: ErpIcon,
  logistics: LogisticsIcon,
  ia: IaIcon,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  const seo = getPageSeo("home");

  return (
    <div className="min-h-screen bg-background">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "INIT",
              slogan: TAGLINE,
              url: SITE_URL,
              logo: `${SITE_URL}/Init-Logo-black.svg`,
              description: "Firma de arquitectura tecnológica — sistemas empresariales, ERP, logística RFID e inteligencia aplicada.",
              telephone: "+52 55 4761 7977",
              email: "support@init.com.mx",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "INIT",
              url: SITE_URL,
              description: seo.description,
            },
          ])}
        </script>
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-container relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralFluidBackground />
        </div>

        <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.03] tracking-[-0.03em]"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/contact" className="btn-primary px-7 py-3.5">
                {hero.ctaPrimary}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href="#que-hacemos" className="btn-secondary px-7 py-3.5">
                {hero.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </div>

        {/* client strip pinned to hero base */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/5 bg-background/40 backdrop-blur-sm">
          <div className="max-w-container mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-xs uppercase tracking-[0.16em] text-faint font-display shrink-0">
              Confían en INIT
            </span>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-90">
              {clientLogos.slice(0, 6).map((c) => (
                <img
                  key={c.id}
                  src={c.logo}
                  alt={c.name}
                  className="h-6 md:h-7 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────────── */}
      <section id="que-hacemos" className="relative z-10 section-py px-6 md:px-10 scroll-mt-24">
        <div className="max-w-container mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p className="eyebrow mb-5">{homeIntro.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {homeIntro.title}
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:col-span-7 lg:pt-2">
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              {homeIntro.body}
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <div className="max-w-container mx-auto px-6 md:px-10"><div className="rule" /></div>

      {/* ── Capabilities / pillars ───────────────────────────── */}
      <section className="relative z-10 section-py px-6 md:px-10">
        <div className="max-w-container mx-auto">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow mb-4">Capacidades</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
                Cuatro pilares. Un criterio de ejecución.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-display text-secondary hover:text-green-300 transition-colors inline-flex items-center gap-1.5 shrink-0">
              Ver arquitectura completa <ArrowIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.slug] ?? SistemasIcon;
              return (
                <motion.div
                  key={pillar.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                >
                  <Link
                    to="/services"
                    className="glass-card group flex flex-col h-full p-8 md:p-10"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="icon-badge">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm text-faint tabular-nums">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-secondary text-sm font-medium">{pillar.headline}</p>
                    <p className="mt-4 text-on-surface-variant text-sm leading-relaxed flex-1">
                      {pillar.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-display text-on-surface/80 group-hover:text-secondary transition-colors">
                      Explorar <ArrowIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI feature ───────────────────────────────────────── */}
      <section className="relative z-10 section-py px-6 md:px-10">
        <div className="max-w-container mx-auto glass-card p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-5">{homeAI.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {homeAI.title}
            </h2>
            <p className="mt-5 text-on-surface-variant text-base md:text-lg leading-relaxed">
              {homeAI.body}
            </p>
            <ul className="mt-8 space-y-3">
              {homeAI.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-on-surface/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
            <Link to="/services#ia" className="mt-8 inline-flex items-center gap-1.5 text-sm font-display text-secondary hover:text-green-300 transition-colors">
              Ver cómo aplicamos IA <ArrowIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <PillarDiagram slug="ia" />
          </motion.div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-container mx-auto glass-card px-8 md:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {homeStats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="text-center lg:text-left"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {s.num}
                </div>
                <div className="mt-2 text-sm font-semibold text-on-surface">{s.label}</div>
                <div className="mt-1 text-xs text-faint leading-relaxed">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ──────────────────────────────────────── */}
      <section className="relative z-10 section-py px-6 md:px-10">
        <div className="max-w-container mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Cómo trabajamos</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              No escalamos con headcount. Escalamos con criterio.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5">
            {criteria.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.06 }}
                className="bg-background p-8 hover:bg-surface-container/60 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-on-surface">{c.title}</h3>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Evidence preview ─────────────────────────────────── */}
      <section className="relative z-10 section-py px-6 md:px-10">
        <div className="max-w-container mx-auto">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="eyebrow mb-4">Proyectos y clientes</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
                Criterio, no volumen.
              </h2>
              <p className="mt-4 text-on-surface-variant text-sm">
                Más de {industries.length} sectores trabajados · {portfolioClients.length} proyectos con criterio propio.
              </p>
            </div>
            <Link to="/proyectos" className="text-sm font-display text-secondary hover:text-green-300 transition-colors inline-flex items-center gap-1.5 shrink-0">
              Ver todos los proyectos <ArrowIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {featuredEvidence.map((c, i) => (
              <motion.div
                key={c.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass-card p-8 flex flex-col"
              >
                <div className="h-10 flex items-center mb-6">
                  <ClientLogo client={c} size="sm" />
                </div>
                <div className="text-xs uppercase tracking-[0.14em] text-faint font-display mb-3">
                  {c.sector}
                </div>
                <p className="font-display text-lg font-bold text-on-surface leading-snug flex-1">
                  {c.summary}
                </p>
                <p className="mt-4 pt-4 border-t border-white/5 text-sm text-on-surface-variant leading-relaxed">
                  {c.estado}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-10 pb-24 md:pb-32">
        <motion.div
          {...fadeUp}
          className="max-w-container mx-auto gradient-bg border border-white/10 rounded-xl px-8 md:px-16 py-16 md:py-20 text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
          <div className="relative">
            <p className="eyebrow eyebrow--plain justify-center mb-5">{TAGLINE}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.05]">
              {ctaFinal.primary}
            </h2>
            <p className="mt-6 text-on-surface-variant text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {ctaFinal.body}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-3.5">
                {ctaFinal.primary}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link to="/proyectos" className="btn-secondary px-8 py-3.5">
                Ver proyectos
                <ArrowOutIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
