import React from "react";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const Services = () => {
  const services = [
    {
      icon: CodeIcon,
      image: "/servicios/desarrollo-software-a-medida.png",
      title: "Desarrollo de Software a Medida",
      intro: "Para empresas que han crecido más allá de Excel, procesos manuales o sistemas limitados.",
      description: "Diseñamos y desarrollamos aplicaciones web y móviles adaptadas completamente a tu operación.",
      featuresLabel: "Lo que desarrollamos:",
      features: [
        "Aplicaciones web empresariales",
        "Portales corporativos y plataformas internas",
        "Sistemas de gestión (inventarios, expedientes, ventas)",
        "Integración con APIs y servicios externos",
        "Aplicaciones móviles empresariales",
        "Plataformas SaaS escalables",
      ],
      result: "Procesos automatizados, menos errores operativos y mayor control del negocio.",
    },
    {
      icon: ComputerIcon,
      image: "/servicios/consultoria-transformacion-digital.png",
      title: "Consultoría en Transformación Digital",
      intro: "Muchas empresas saben que necesitan digitalizarse, pero no tienen claridad sobre por dónde empezar.",
      description: "En INIT analizamos tu operación y diseñamos un plan tecnológico claro y ejecutable.",
      featuresLabel: "Incluye:",
      features: [
        "Diagnóstico de procesos actuales",
        "Identificación de cuellos de botella",
        "Diseño de arquitectura tecnológica",
        "Roadmap de transformación digital",
        "Prioridad de proyectos con impacto real",
      ],
      result: "Una estrategia tecnológica alineada con el crecimiento del negocio.",
    },
    {
      icon: RocketLaunchIcon,
      image: "/servicios/soluciones-tecnologicas-integracion.png",
      title: "Soluciones Tecnológicas e Integración de Sistemas",
      intro: "Para empresas que necesitan automatizar operaciones, conectar sistemas o trabajar con datos en tiempo real.",
      description: "Implementamos plataformas robustas que integran información y procesos en un ecosistema digital.",
      featuresLabel: "Soluciones que implementamos:",
      features: [
        "Automatización de procesos operativos",
        "Integración entre sistemas y bases de datos",
        "Infraestructura cloud escalable",
        "Dashboards y Business Intelligence",
        "Plataformas de análisis de datos",
        "Sistemas con inteligencia artificial",
      ],
      result: "Mayor eficiencia operativa y decisiones basadas en información confiable.",
    },
  ];

  const technologyCategories = [
    { name: "Frontend", items: ["React", "Vue.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Django"] },
    { name: "Bases de datos", items: ["PostgreSQL", "MongoDB"] },
    { name: "Infraestructura", items: ["AWS", "Docker", "Kubernetes"] },
    { name: "IA y análisis", items: ["TensorFlow", "Power BI", "Tableau"] },
  ];

  const process = [
    { step: 1, title: "Análisis y Planificación", description: "Definimos la arquitectura de la solución.", timeframe: "1–2 semanas" },
    { step: 2, title: "Diseño y Prototipado", description: "Prototipos funcionales para validar.", timeframe: "1–3 semanas" },
    { step: 3, title: "Desarrollo e Implementación", description: "Construcción con tecnologías escalables.", timeframe: "4–12 semanas" },
    { step: 4, title: "Pruebas y Despliegue", description: "Pruebas técnicas y funcionales.", timeframe: "1–2 semanas" },
    { step: 5, title: "Soporte Continuo", description: "Monitoreo, optimización y evolución.", timeframe: "Continuo" },
  ];

  return (
    <div className="min-h-screen relative z-10">
      <PageHead
        title="Servicios de Desarrollo de Software y Consultoría Digital"
        description="Desarrollo de software a medida, consultoría en digitalización y soluciones digitales."
        path="/services"
      />
      <PageHeader
        title="Nuestros Servicios"
        subtitle="En INIT ayudamos a empresas a automatizar procesos, escalar operaciones y tomar decisiones basadas en datos."
      />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-20 space-y-24">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isImageRight = index % 2 === 1;
            return (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isImageRight ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`relative group ${isImageRight ? "lg:col-start-2" : ""}`}>
                  <div className="absolute -inset-2 bg-primary/10 blur-2xl rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-breathe" />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className={isImageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="inline-flex w-14 h-14 bg-gradient-to-br from-primary-container to-secondary rounded-xl mb-5 items-center justify-center shadow-lg">
                    <ServiceIcon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-on-surface-variant mb-4">{service.intro}</p>
                  <p className="text-lg text-on-surface-variant mb-6">{service.description}</p>
                  <p className="text-sm font-semibold uppercase tracking-wide mb-3">{service.featuresLabel}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary font-semibold border-l-2 border-primary pl-4">
                    Resultado: {service.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tecnologías que Utilizamos</h2>
            <div className="section-title-line" />
          </motion.div>
          <div className="flex flex-col items-center gap-8">
            {technologyCategories.map((cat, i) => (
              <motion.div key={cat.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center">
                <h3 className="text-lg font-semibold mb-3">{cat.name}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {cat.items.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-on-surface-variant">Metodología estructurada que reduce riesgos.</p>
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
                <div className="w-14 h-14 bg-gradient-to-br from-primary-container to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
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
            <h2 className="text-3xl font-bold">¿Por qué trabajar con INIT?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: SpeedIcon, title: "Velocidad", description: "Soluciones en tiempos menores que agencias tradicionales." },
              { icon: SecurityIcon, title: "Seguridad", description: "Estándares de seguridad y escalabilidad desde el inicio." },
              { icon: SupportIcon, title: "Soporte", description: "Acompañamiento durante toda la vida del sistema." },
              { icon: TrendingUpIcon, title: "Impacto", description: "Eficiencia, ahorro y crecimiento medible." },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="inline-flex w-16 h-16 bg-white/10 rounded-2xl mb-6 items-center justify-center backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
