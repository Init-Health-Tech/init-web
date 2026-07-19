import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import NeuralFluidBackground from "../components/NeuralFluidBackground";
import PillarCard from "../components/PillarCard";
import { getPageSeo, SITE_URL } from "../data/seoData";
import { TAGLINE, hero, homePillars, ctaFinal } from "../data/siteCopy";
import {
  TrendingUp as StrategyIcon,
  Psychology as AiIcon,
  Code as CodeIcon,
  Shield as ShieldIcon,
  Sensors as RfidIcon,
} from "@mui/icons-material";

const pillarIcons = {
  strategy: StrategyIcon,
  ai: AiIcon,
  code: CodeIcon,
  shield: ShieldIcon,
  rfid: RfidIcon,
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
              description: "Consultoría tecnológica — transformación digital con inteligencia fluida.",
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

      <section className="hero-container relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralFluidBackground />
        </div>

        <div className="relative z-10 flex flex-1 flex-col max-w-[960px] w-full mx-auto px-6 md:px-10 pt-28 pb-8">
          <div className="flex flex-1 flex-col items-center justify-center min-h-[420px] md:min-h-[480px] gap-6 md:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-2 z-10"
            >
              <h1 className="font-display text-white text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight tracking-[-0.033em] max-w-3xl">
                {hero.headline}
              </h1>
              <p className="text-muted text-sm md:text-base font-normal leading-normal max-w-xl mx-auto">
                {hero.subheadline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center h-10 md:h-12 px-5 md:px-6 text-sm md:text-base font-bold tracking-[0.015em]"
              >
                {hero.ctaPrimary.toUpperCase()}
              </Link>
            </motion.div>
          </div>

          <div className="relative z-20 -mt-6 md:-mt-10 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 auto-rows-fr">
            {homePillars.map((pillar, i) => (
              <PillarCard
                key={pillar.slug}
                icon={pillarIcons[pillar.icon]}
                title={pillar.title}
                href={pillar.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[960px] mx-auto glass-card p-10 md:p-16 text-center"
        >
          <p className="text-muted text-sm mb-3 font-display">{ctaFinal.title}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            {ctaFinal.primary}
          </h2>
          <p className="text-muted text-base max-w-lg mx-auto mb-8 leading-relaxed">
            {ctaFinal.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-3">
              {ctaFinal.primary}
            </Link>
            <Link to="/portfolio" className="btn-secondary px-8 py-3">
              Ver evidencia
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
