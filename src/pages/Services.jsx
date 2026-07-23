import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import { getPageSeo } from "../data/seoData";
import {
  Code as CodeIcon,
  Computer as ComputerIcon,
  RocketLaunch as RocketLaunchIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Support as SupportIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const Services = () => {
  const services = [
    {
      icon: CodeIcon,
      image: "/servicios/desarrollo-software-a-medida.jpg",
      title: "Software a medida",
      intro: "Para cuando Excel, WhatsApp o un sistema genérico ya no alcanzan.",
      description:
        "Aplicaciones web y sistemas hechos para tu operación — no para un catálogo de plantillas.",
      featuresLabel: "Qué construimos",
      features: [
        "Aplicaciones web empresariales",
        "Portales y plataformas internas",
        "Sistemas de gestión (inventario, ventas, expedientes)",
        "APIs e integraciones",
        "Apps móviles empresariales",
      ],
      result: "Menos fricción operativa. Más control del negocio.",
    },
    {
      icon: ComputerIcon,
      image: "/servicios/consultoria-transformacion-digital.jpg",
      title: "Digitalización",
      intro: "Sabes que necesitas ordenar. No siempre sabes por dónde empezar.",
      description:
        "Analizamos tu operación y dejamos un plan claro: qué hacer primero, qué después, qué no tocar.",
      featuresLabel: "Qué incluye",
      features: [
        "Diagnóstico de procesos",
        "Cuellos de botella y prioridades",
        "Arquitectura tecnológica",
        "Roadmap ejecutable",
        "Proyectos con impacto real primero",
      ],
      result: "Una dirección tecnológica alineada al crecimiento — no a la moda.",
    },
    {
      icon: RocketLaunchIcon,
      image: "/servicios/soluciones-tecnologicas-integracion.jpg",
      title: "Sistemas e integración",
      intro: "Cuando la operación pide automatizar, conectar datos o proteger lo crítico.",
      description:
        "Plataformas que unen sistemas, datos y procesos en un solo ecosistema.",
      featuresLabel: "Qué implementamos",
      features: [
        "Automatización de procesos",
        "Integración entre sistemas y bases de datos",
        "Cloud escalable",
        "Dashboards y Business Intelligence",
        "Data Analysis y Data Science",
        "Cyberseguridad desde el diseño",
      ],
      result: "Operación más fluida. Decisiones con información confiable.",
    },
  ];

  const technologyCategories = [
    { name: "Frontend", items: ["React", "Vue.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Django"] },
    { name: "Bases de datos", items: ["PostgreSQL", "MongoDB"] },
    { name: "Infraestructura", items: ["AWS", "Docker", "Kubernetes"] },
    { name: "Cyberseguridad", items: ["Auditorías", "Hardening", "OWASP"] },
    { name: "Datos e IA", items: ["Data Analysis", "Data Science", "Power BI", "Tableau"] },
  ];

  const process = [
    { step: 1, title: "Entender", description: "Alcance, operación y arquitectura.", timeframe: "1–2 semanas" },
    { step: 2, title: "Diseñar", description: "Prototipos para validar antes de construir.", timeframe: "1–3 semanas" },
    { step: 3, title: "Construir", description: "Desarrollo con código mantenible.", timeframe: "4–12 semanas" },
    { step: 4, title: "Lanzar", description: "Pruebas, despliegue y salida limpia.", timeframe: "1–2 semanas" },
    { step: 5, title: "Acompañar", description: "Soporte y evolución del sistema.", timeframe: "Continuo" },
  ];

  const seo = getPageSeo("services");

  return (
    <div className="min-h-screen relative z-10">
      <PageHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
      />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="systems" />
      <PageHeader
        eyebrow="Tres caminos"
        title="Una sola exigencia"
        subtitle="Software a medida, digitalización e integración. Pocos proyectos. Primero evaluamos si hay fit."
      />

      <section className="layer-panel section-py pt-0 bg-background/80">
        <div className="max-w-container mx-auto px-6 md:px-20 space-y-28">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isImageRight = index % 2 === 1;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-[var(--radius-exec)] border border-white/10 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className={isImageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
                  <div className="icon-badge mb-6">
                    <ServiceIcon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="display-title text-3xl lg:text-4xl mb-4">{service.title}</h2>
                  <p className="text-lg text-on-surface mb-3 leading-relaxed">{service.intro}</p>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">{service.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                    {service.featuresLabel}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-on-surface">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-medium border-l-2 border-primary pl-4 leading-relaxed">
                    {service.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">Stack</p>
            <h2 className="display-title text-3xl md:text-4xl mb-3">Herramientas con criterio</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Elegimos tecnología por el problema — no por la moda.
            </p>
          </motion.div>
          <div className="flex flex-col items-center gap-10">
            {technologyCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-on-surface-variant mb-3">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {cat.items.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">Cómo trabajamos</p>
            <h2 className="display-title text-3xl md:text-4xl mb-3">Un proceso que reduce sorpresas</h2>
            <p className="text-on-surface-variant">Plazos claros. Entregas que se pueden tocar.</p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-5">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6 text-center"
              >
                <div className="icon-badge mx-auto mb-4 text-white font-semibold text-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                <p className="text-xs text-primary mt-3 tracking-wide">{step.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="layer-panel section-py bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-xl mx-auto">
            <p className="eyebrow mb-4">Por qué INIT</p>
            <h2 className="display-title text-3xl md:text-4xl">Lo que no negociamos</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: SpeedIcon, title: "Ritmo", description: "Avance real sin el teatro de las agencias grandes." },
              { icon: SecurityIcon, title: "Seguridad", description: "Buenas prácticas desde el diseño — no al final." },
              { icon: SupportIcon, title: "Cercanía", description: "Hablas con quien construye. En español." },
              { icon: TrendingUpIcon, title: "Impacto", description: "Menos caos operativo. Más capacidad de crecer." },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="icon-badge mx-auto mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Crees que podríamos ayudar?"
        text="Escribimos para evaluar el encaje. Si no es lo nuestro, te lo diremos — sin vender por vender."
        ctaLabel="Evaluar si podemos ayudar"
        secondaryLabel="Ver el trabajo"
        secondaryTo="/portfolio"
      />
    </div>
  );
};

export default Services;
