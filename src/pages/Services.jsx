import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
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

const pillarConfig = [
  { icon: CodeIcon, image: "/servicios/desarrollo-software-a-medida.png" },
  { icon: ErpIcon, image: "/servicios/consultoria-transformacion-digital.png" },
  { icon: LogisticsIcon, image: "/servicios/soluciones-tecnologicas-integracion.png" },
  { icon: IaIcon, image: "/servicios/desarrollo-software-a-medida.png" },
];

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
        title="Arquitectura"
        subtitle="Cuatro pilares. Un criterio. Sistemas Empresariales, ERP & Operaciones, INIT Logistics e Inteligencia Aplicada."
      />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-20 space-y-24">
          {pillars.map((pillar, index) => {
            const ServiceIcon = pillarConfig[index].icon;
            const isImageRight = index % 2 === 1;
            return (
              <motion.div
                key={pillar.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden exec-chamfer border border-white/10 aspect-[4/3]">
                    <img
                      src={pillarConfig[index].image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className={isImageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="icon-badge mb-5">
                    <ServiceIcon className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">{pillar.headline}</p>
                  <h2 className="text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">{pillar.title}</h2>
                  <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">{pillar.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-semibold border-l-2 border-primary pl-4 mb-4">
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
        <div className="max-w-container mx-auto px-6 md:px-20">
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
                <div className="icon-badge mx-auto mb-4 text-white font-semibold text-xl">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
                <p className="text-xs text-primary mt-2">{step.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py gradient-bg relative overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-20">
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
                    <Icon className="h-7 w-7 text-white" />
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
