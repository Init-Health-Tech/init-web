import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import ClientLogo from "../components/ClientLogo";
import { portfolioClients } from "../data/portfolioData";
import { getPageSeo } from "../data/seoData";
import { evidence } from "../data/siteCopy";

const Portfolio = () => {
  const seo = getPageSeo("portfolio");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <PageHeader title={evidence.title} subtitle={evidence.intro} />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <div className="space-y-10">
            {portfolioClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                      {client.logo ? (
                        <ClientLogo client={client} size="lg" className="min-w-[140px]" />
                      ) : (
                        <div className="icon-badge min-w-[80px] min-h-[80px] text-3xl font-semibold text-white">
                          <span>{client.initial}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h2 className="text-2xl md:text-3xl font-bold">{client.name}</h2>
                        <span className="text-sm font-medium text-on-surface-variant bg-surface-container px-3 py-1 border border-white/10 tech-pill">
                          {client.sectorDetail || client.sector}
                        </span>
                      </div>
                      <p className="text-lg text-on-surface mb-6 leading-snug">{client.summary}</p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{evidence.fields.context}</p>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{client.contexto}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{evidence.fields.decision}</p>
                          <p className="text-sm text-on-surface leading-relaxed">{client.decision}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{evidence.fields.state}</p>
                          <p className="text-sm text-primary leading-relaxed">{client.estado}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">Tu operación merece el mismo criterio.</h2>
              <p className="text-on-surface-variant mb-8">Descríbenos el sistema que necesitas construir.</p>
              <Link to="/contact" className="btn-primary inline-flex items-center px-8 py-4">Iniciar conversación</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
