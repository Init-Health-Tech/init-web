import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageVideoBackground from "../components/PageVideoBackground";
import ClientLogo from "../components/ClientLogo";
import PartnerSection from "../components/PartnerSection";
import { clientLogos, getClientLogo } from "../data/clientsData";
import { getPageSeo, SITE_URL } from "../data/seoData";
import { featuredEvidence } from "../data/portfolioData";
import { getFeaturedTeam } from "../data/teamData";
import {
  TAGLINE,
  hero,
  metrics,
  manifesto,
  pillars,
  whatWeDo,
  criteria,
  evidence,
  ctaFinal,
} from "../data/siteCopy";
import {
  Code as CodeIcon,
  AccountTree as ErpIcon,
  Sensors as LogisticsIcon,
  Psychology as IaIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from "@mui/icons-material";

const pillarIcons = [CodeIcon, ErpIcon, LogisticsIcon, IaIcon];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

const Home = () => {
  const seo = getPageSeo("home");
  const featuredTeam = getFeaturedTeam();

  return (
    <div className="min-h-screen">
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
              logo: `${SITE_URL}/Init-Logo.svg`,
              description: "Firma global de arquitectura tecnológica.",
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

      <PageVideoBackground />

      <section className="layer-reveal relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-20 text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="exec-frame inline-block mb-10"
          >
            <img src="/Init-Logo.svg" alt="INIT" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-sm uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2">
              {hero.ctaPrimary}
              <ArrowForwardIcon className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-secondary text-sm uppercase tracking-widest px-8 py-4">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 text-on-surface-variant/50"
          >
            <ChevronDownIcon className="h-6 w-6 mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low border-y border-white/5 shadow-[0_-20px_60px_rgba(17,20,20,0.9)]">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {metrics.map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`text-4xl md:text-5xl font-semibold ${i === 0 ? "text-primary" : "text-secondary"} mb-2`}
              >
                {stat.num}
              </motion.span>
              <span className="text-xl font-semibold text-on-surface">{stat.label}</span>
              <span className="text-sm text-on-surface-variant mt-1">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="layer-reveal section-py">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-semibold text-on-surface mb-6 tracking-tight">Cuatro pilares. Un criterio.</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">{manifesto.body}</p>
            <ul className="space-y-4 mb-8">
              {whatWeDo.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-on-surface">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 text-sm uppercase tracking-wider">
              Ver arquitectura completa <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative">
            <img
              src="/empleados-fotos/init-team.jpg"
              alt="Equipo INIT"
              className="exec-chamfer shadow-lg relative z-10 border border-white/10 w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest shadow-[0_-20px_60px_rgba(12,15,15,0.95)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Arquitectura</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-4">
              No vendemos horas. Diseñamos arquitectura.
            </p>
            <div className="section-title-line" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div
                  key={pillar.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="glass-card p-10 group"
                >
                  <div className="icon-badge mb-8">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-primary mb-4">{pillar.headline}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="layer-reveal section-py overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">{manifesto.title}</h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed italic">{TAGLINE}</p>
            <p className="text-on-surface-variant mb-10 leading-relaxed">{manifesto.body}</p>
            <Link to="/team" className="btn-secondary inline-flex items-center gap-2 px-8 py-3">
              Conocer al equipo <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <div className="glass-card p-10 md:p-12">
              <h3 className="text-xl font-semibold text-primary mb-6 uppercase tracking-wider text-[11px]">Estándar</h3>
              <p className="text-lg text-on-surface leading-relaxed relative z-10 mb-8">
                Pocos clientes porque elegimos bien — no porque no podamos más. Cada proyecto se acepta con el mismo criterio con el que se diseña.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                {featuredTeam.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="text-sm font-semibold text-on-surface">{member.name.split(" ")[0]}</div>
                    <div className="text-xs text-on-surface-variant mt-1 leading-tight">{member.position.split(" ")[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface shadow-[0_-20px_60px_rgba(17,20,20,0.9)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{evidence.title}</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl">{evidence.intro}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvidence.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                {getClientLogo(item.name) && (
                  <div
                    className={`success-case-logo exec-chamfer flex items-center justify-center mb-6 h-40 md:h-52 border transition-colors ${
                      item.name === "CONFE"
                        ? "success-case-logo--confe bg-white border-white/30 p-2 md:p-3"
                        : "bg-surface-container-low border-white/10"
                    }`}
                  >
                    <ClientLogo
                      client={
                        item.name === "CONFE"
                          ? { ...getClientLogo(item.name), lightBg: false }
                          : getClientLogo(item.name)
                      }
                      size={item.name === "CONFE" ? "2xl" : "lg"}
                      variant="featured"
                      className={item.name === "CONFE" ? "success-case-confe-logo" : ""}
                    />
                  </div>
                )}
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.sector}</p>
                <p className="font-medium text-on-surface mb-2">{item.summary}</p>
                <p className="text-sm text-on-surface-variant">{item.estado}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2 text-sm uppercase tracking-wider">
              {evidence.cta} <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PartnerSection />

      <section className="layer-reveal py-12 border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} client={client} size="md" />
          ))}
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low shadow-[0_-20px_60px_rgba(25,28,28,0.95)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Cómo operamos</h2>
            <p className="text-on-surface-variant">Criterio, precisión y arquitectura — en cada decisión.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="benefit-card"
              >
                <h4 className="text-lg font-semibold mb-2 text-primary">{b.title}</h4>
                <p className="text-on-surface-variant text-sm">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-reveal section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-lg italic text-on-surface-variant mb-4">{ctaFinal.title}</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Iniciar conversación</h2>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{ctaFinal.body}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-10 py-5 inline-flex items-center justify-center gap-2">
                  {ctaFinal.primary} <ArrowForwardIcon className="h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-base px-10 py-5">
                  {ctaFinal.secondary}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
