import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import PillarDiagram from "../components/PillarDiagram";
import { getPageSeo } from "../data/seoData";
import { pillars } from "../data/siteCopy";
import {
  Code as CodeIcon,
  AccountTree as ErpIcon,
  Sensors as LogisticsIcon,
  Psychology as IaIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const pillarIcons = [CodeIcon, ErpIcon, LogisticsIcon, IaIcon];

const process = [
  { step: 1, title: "Diagnóstico", description: "Entendemos la operación antes de proponer arquitectura.", timeframe: "1–2 semanas" },
  { step: 2, title: "Diseño", description: "Arquitectura y prototipos con criterio ejecutivo.", timeframe: "1–3 semanas" },
  { step: 3, title: "Construcción", description: "Desarrollo con estándares de escala y mantenibilidad.", timeframe: "4–12 semanas" },
  { step: 4, title: "Despliegue", description: "Pruebas, validación y puesta en operación.", timeframe: "1–2 semanas" },
  { step: 5, title: "Evolución", description: "Monitoreo, optimización y relación de largo plazo.", timeframe: "Continuo" },
];

const Services = () => {
  const seo = getPageSeo("services");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <PageHeader
        eyebrow="Arquitectura tecnológica"
        title="Cuatro pilares. Un criterio de ejecución."
        subtitle="Sistemas Empresariales, ERP & Operaciones, INIT Logistics e Inteligencia Aplicada — diseñados para reflejar tu operación y escalar con ella."
      />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-10 space-y-24">
          {pillars.map((pillar, index) => {
            const ServiceIcon = pillarIcons[index] ?? CodeIcon;
            const isImageRight = index % 2 === 1;
            return (
              <motion.div
                key={pillar.slug}
                id={pillar.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className={`scroll-mt-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <PillarDiagram slug={pillar.slug} />
                </div>
                <div className={isImageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="icon-badge mb-5">
                    <ServiceIcon className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-2">{pillar.headline}</p>
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">{pillar.title}</h2>
                  <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-secondary font-semibold border-l-2 border-secondary pl-4 mb-4">
                    {pillar.result}
                  </p>
                  <p className="text-sm text-on-surface-variant italic">{pillar.closer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Cómo trabajamos</h2>
            <p className="text-on-surface-variant">Diagnóstico primero. Arquitectura después. Sin atajos.</p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="icon-badge mx-auto mb-4 text-secondary font-semibold text-lg">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
                <p className="text-xs text-secondary mt-2">{step.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py gradient-bg relative overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-semibold">Por qué INIT</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: SpeedIcon, title: "Criterio", description: "Cada decisión técnica responde a la operación." },
              { icon: SecurityIcon, title: "Seguridad", description: "Cyberseguridad desde el diseño de arquitectura." },
              { icon: SupportIcon, title: "Relación", description: "Acompañamiento durante toda la vida del sistema." },
              { icon: TrendingUpIcon, title: "Escala", description: "Arquitectura pensada para el largo plazo." },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="icon-badge mx-auto mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary inline-flex px-8 py-4">Iniciar conversación</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
