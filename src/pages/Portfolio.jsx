import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import ClientLogo from "../components/ClientLogo";
import StatTile from "../components/StatTile";
import { portfolioClients } from "../data/portfolioData";
import { getPageSeo } from "../data/seoData";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const Portfolio = () => {
  const seo = getPageSeo("portfolio");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
      />
      <StructuredData description={seo.description} />
      <PageHeader
        eyebrow="Casos de éxito"
        title="Proyectos y Clientes"
        subtitle="Casos de éxito en desarrollo de software a medida, aplicaciones web y consultoría digital con empresas en México."
      />

      <section className="section-py pt-0 pb-12">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: `${portfolioClients.length}+`, label: "Clientes atendidos" },
            { value: `${new Set(portfolioClients.map((c) => c.sector)).size}+`, label: "Sectores distintos" },
            { value: "100%", label: "Proyectos entregados" },
            { value: "MX", label: "Empresas mexicanas" },
          ].map((stat, i) => (
            <StatTile key={stat.label} {...stat} delay={i * 0.08} compact />
          ))}
        </div>
      </section>

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
                      <p className="text-on-surface-variant mb-4 leading-relaxed">{client.summary}</p>
                      {client.stack && (
                        <p className="text-sm text-on-surface-variant mb-2">
                          <span className="font-semibold text-on-surface">Stack:</span> {client.stack}
                        </p>
                      )}
                      {client.engagement === "consultoria" && (
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                          Consultoría
                        </p>
                      )}
                      {client.result && (
                        <p className="text-sm text-primary mb-4">
                          <span className="font-semibold">Resultado:</span> {client.result}
                        </p>
                      )}
                      <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
                        {client.engagement === "consultoria" ? "Consultoría realizada" : "Lo que hemos realizado"}
                      </h3>
                      <ul className="space-y-2">
                        {client.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start text-on-surface">
                            <CheckCircleIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Quieres ser nuestro próximo caso de éxito?"
        text="Cuéntanos tu proyecto y te proponemos una solución a medida."
        ctaLabel="Cuéntanos tu proyecto"
      />
    </div>
  );
};

export default Portfolio;
