import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import ClientLogo from "../components/ClientLogo";
import { portfolioClients } from "../data/portfolioData";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative z-10">
      <PageHead
        title="Proyectos y Clientes: Casos de Éxito"
        description="Clientes de INIT: CONFE, JOFRA, TRANSCOM, Geller Abogados."
        path="/portfolio"
      />
      <PageHeader
        title="Proyectos y Clientes"
        subtitle="Empresas e instituciones con las que hemos trabajado. Desglose de cada proyecto."
      />

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
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: `${index}s` }}>
                          <span className="text-3xl font-bold text-white">{client.initial}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h2 className="text-2xl md:text-3xl font-bold">{client.name}</h2>
                        <span className="text-sm font-medium text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-white/10">
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

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-surface-container-highest to-background border border-white/10 rounded-[2rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full animate-breathe" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
              <p className="text-on-surface-variant mb-8">Cuéntanos tu proyecto y te proponemos una solución a medida.</p>
              <Link to="/contact" className="btn-primary inline-flex items-center px-8 py-4">Contáctanos</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
