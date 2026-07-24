import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import ClientLogo from "../components/ClientLogo";
import { portfolioClients, industries, projectStats } from "../data/portfolioData";
import { getPageSeo } from "../data/seoData";
import { evidence } from "../data/siteCopy";
import { ArrowForward as ArrowIcon } from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Field = ({ label, children, accent }) => (
  <div>
    <p className="text-xs font-semibold text-faint uppercase tracking-[0.14em] mb-2 font-display">
      {label}
    </p>
    <p className={`text-sm leading-relaxed ${accent ? "text-secondary" : "text-on-surface-variant"}`}>
      {children}
    </p>
  </div>
);

const Portfolio = () => {
  const seo = getPageSeo("portfolio");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <PageHeader eyebrow={evidence.eyebrow} title={evidence.title} subtitle={evidence.intro} />

      {/* ── Sector stats + chips ─────────────────────────────── */}
      <section className="px-6 md:px-10 pb-4">
        <div className="max-w-container mx-auto">
          <motion.div {...fadeUp} className="glass-card px-8 md:px-12 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {projectStats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {s.num}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-on-surface">{s.label}</div>
                  <div className="mt-1 text-xs text-faint leading-relaxed">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-9 pt-8 border-t border-white/5">
              <p className="text-xs uppercase tracking-[0.16em] text-faint font-display mb-4">
                Sectores que hemos atendido
              </p>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((ind) => (
                  <span key={ind} className="sector-badge">{ind}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects — sector-led ────────────────────────────── */}
      <section className="section-py pt-12">
        <div className="max-w-container mx-auto px-6 md:px-10 space-y-5">
          {portfolioClients.map((client, index) => (
            <motion.div
              key={client.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (index % 3) * 0.08 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:gap-12">
                {/* Left column: sector-first identity */}
                <div className="lg:w-72 shrink-0 flex flex-col mb-6 lg:mb-0">
                  <span className="font-display text-sm text-faint tabular-nums mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow mb-3">Sector</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                    {client.industry}
                  </h2>
                  {/* client as secondary detail */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                    {client.logo ? (
                      <ClientLogo client={client} size="sm" />
                    ) : (
                      <span className="icon-badge text-base font-semibold">{client.initial}</span>
                    )}
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-faint font-display">Cliente</p>
                      <p className="text-sm text-on-surface font-medium">{client.name}</p>
                    </div>
                  </div>
                </div>

                {/* Right column: story */}
                <div className="flex-1 lg:border-l lg:border-white/5 lg:pl-12">
                  <p className="font-display text-lg md:text-xl text-on-surface leading-snug mb-8 max-w-2xl">
                    {client.summary}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Field label={evidence.fields.context}>{client.contexto}</Field>
                    <Field label={evidence.fields.decision}>{client.decision}</Field>
                    <Field label={evidence.fields.state} accent>{client.estado}</Field>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <motion.div
          {...fadeUp}
          className="max-w-container mx-auto gradient-bg border border-white/10 rounded-xl p-12 md:p-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            ¿Tu sector todavía no está aquí?
          </h2>
          <p className="text-on-surface-variant mb-9 max-w-xl mx-auto leading-relaxed">
            Trabajamos con criterio, no con una industria en particular. Descríbenos el sistema que necesitas construir.
          </p>
          <Link to="/contact" className="btn-primary inline-flex px-8 py-3.5">
            Iniciar conversación
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
