import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageVideoBackground from "../components/PageVideoBackground";
import ClientLogo from "../components/ClientLogo";
import PartnerSection from "../components/PartnerSection";
import { clientLogos, getClientLogo } from "../data/clientsData";
import { teamCopy, teamStats } from "../data/teamData";
import {
  Code as CodeIcon,
  RocketLaunch as RocketLaunchIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Support as SupportIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  Insights as InsightsIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
};

const Home = () => {
  const services = [
    {
      icon: CodeIcon,
      title: "Desarrollo de Software",
      description:
        "Desarrollamos software a medida: aplicaciones web, sistemas de gestión y APIs escalables. Desde portales corporativos hasta ERPs adaptados a tu operación.",
    },
    {
      icon: InsightsIcon,
      title: "Consultoría en Digitalización",
      description:
        "Te acompañamos en la transformación digital: análisis de procesos, roadmap y priorización. Más eficiencia, menos errores manuales.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Soluciones Digitales",
      description:
        "Automatización, integración de sistemas, cloud y herramientas que tu equipo puede usar desde el día uno.",
    },
  ];

  const whatWeDo = [
    "Desarrollo de aplicaciones web y portales a medida",
    "Sistemas empresariales (gestión, inventario, ventas, expedientes)",
    "APIs e integraciones para conectar tus sistemas",
    "Consultoría en digitalización y optimización de procesos",
    "Proyectos en México y Estado de México",
  ];

  const successCases = [
    {
      client: "TRANSCOM",
      sector: "Logística / Transporte · Consultoría",
      title: "Consultoría en digitalización operativa",
      result: "Diagnóstico y recomendaciones para ordenar operaciones y trazabilidad.",
    },
    {
      client: "Geller Abogados",
      sector: "Despacho jurídico · Consultoría",
      title: "Consultoría en procesos del despacho",
      result: "Análisis y recomendaciones para optimizar gestión documental y expedientes.",
    },
    {
      client: "CONFE",
      sector: "Sector social / institucional",
      title: "Software y digitalización institucional",
      result: "Procesos y atención mejorados con sistemas centralizados.",
    },
  ];

  const whyUs = [
    { icon: ScheduleIcon, title: "Plazos Definidos", text: "Plazos y alcance definidos desde el inicio." },
    { icon: CodeIcon, title: "Código Mantenible", text: "Código y arquitectura mantenibles a largo plazo." },
    { icon: SupportIcon, title: "Soporte en Español", text: "Soporte técnico y comunicación en español." },
    { icon: SecurityIcon, title: "Seguridad Primero", text: "Enfoque en seguridad y buenas prácticas." },
    { icon: TrendingUpIcon, title: "Escalabilidad", text: "Escalabilidad cuando tu negocio crezca." },
    { icon: GroupsIcon, title: "Equipo Cercano", text: "Equipo estable y trato cercano." },
  ];

  const yearsExperience = new Date().getFullYear() - 2024;

  return (
    <div className="min-h-screen">
      <PageHead
        title="Desarrollo de Software a Medida en México"
        description="En INIT transformamos los procesos de tu empresa con aplicaciones web, sistemas empresariales y consultoría en digitalización. Estado de México."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "INIT",
            url: typeof window !== "undefined" ? window.location.origin : "",
            telephone: "+52 55 4761 7977",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad López Mateos",
              addressRegion: "Estado de México",
              addressCountry: "MX",
            },
          })}
        </script>
      </Helmet>

      <PageVideoBackground />

      {/* Hero — video visible behind */}
      <section className="layer-reveal relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-20 text-center pt-24 pb-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="inline-block p-4 bg-white rounded-2xl mb-8 shadow-xl hover:rotate-3 transition-transform duration-300"
          >
            <img src="/Init-Logo.svg" alt="INIT" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto tracking-tight"
          >
            Desarrollo de Software a Medida para Empresas en{" "}
            <span className="text-shimmer-mexico">México</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            En INIT transformamos los procesos de tu empresa con aplicaciones web, sistemas
            empresariales y consultoría en digitalización. Basados en Estado de México.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-sm uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2">
              Solicitar una propuesta
              <ArrowForwardIcon className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-secondary text-sm uppercase tracking-widest px-8 py-4">
              Ver nuestros servicios
            </Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-16 text-primary/60"
          >
            <ChevronDownIcon className="h-8 w-8 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Metrics — solid panel covers video */}
      <section className="layer-panel section-py bg-surface-container-low border-y border-white/5 shadow-[0_-20px_60px_rgba(17,20,20,0.9)]">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {[
            { num: yearsExperience, label: "Años de Experiencia", sub: "entregando software a medida", color: "text-primary" },
            { num: "24/7", label: "Soporte Técnico", sub: "post-lanzamiento incluido", color: "text-secondary" },
          ].map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="flex flex-col items-center">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className={`text-5xl md:text-6xl font-extrabold ${stat.color} mb-2`}
              >
                {stat.num}
              </motion.span>
              <span className="text-xl font-semibold text-on-surface">{stat.label}</span>
              <span className="text-sm text-on-surface-variant mt-1">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Qué hacemos — video peeks through */}
      <section className="layer-reveal section-py">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">Qué hacemos por las empresas</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Trabajamos con pymes, instituciones y empresas que necesitan soluciones digitales a medida.
            </p>
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
              Ver todos nuestros servicios <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity animate-breathe" />
            <img
              src="/empleados-fotos/init-team.jpg"
              alt="Equipo INIT"
              className="rounded-2xl shadow-2xl relative z-10 border border-white/10 w-full object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Servicios — solid panel */}
      <section className="layer-panel section-py bg-surface-container-lowest shadow-[0_-20px_60px_rgba(12,15,15,0.95)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <div className="section-title-line" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="glass-card p-10 rounded-3xl group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sobre INIT — reveal */}
      <section className="layer-reveal section-py overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre INIT</h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              Somos una empresa de desarrollo de software y consultoría en digitalización. Transformamos
              la forma en que las empresas trabajan, con soluciones prácticas y trato cercano.
            </p>
            <p className="text-on-surface-variant mb-10">
              {teamCopy.about}
            </p>
            <Link to="/team" className="inline-flex items-center gap-2 bg-surface-container-highest text-primary px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-surface-variant transition-colors">
              Conocer al Equipo <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="relative">
            <div className="glass-card p-10 md:p-12 rounded-[2rem] relative z-10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-breathe" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" />
              <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">Nuestra Misión</h3>
              <p className="text-lg text-on-surface leading-relaxed italic relative z-10">
                Transformar empresas a través de la innovación tecnológica, proporcionando soluciones
                digitales que impulsen el crecimiento y la competitividad.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8 relative z-10">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-primary">{teamStats.total}</div>
                  <div className="text-sm text-on-surface-variant">Miembros del Equipo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-secondary">100%</div>
                  <div className="text-sm text-on-surface-variant">Compromiso</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-primary rounded-full blur-sm opacity-50 animate-float" />
            <div className="absolute bottom-10 -right-4 w-12 h-12 bg-secondary rounded-full blur-md opacity-30 animate-float" style={{ animationDelay: "2s" }} />
          </motion.div>
        </div>
      </section>

      {/* Casos de éxito — panel */}
      <section className="layer-panel section-py bg-surface shadow-[0_-20px_60px_rgba(17,20,20,0.9)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Casos de Éxito</h2>
            <p className="text-on-surface-variant mt-4">Resultados con empresas e instituciones.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((item, i) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {getClientLogo(item.client) && (
                  <div
                    className={`success-case-logo flex items-center justify-center rounded-2xl mb-6 h-40 md:h-52 border group-hover:border-primary/30 transition-colors ${
                      item.client === "CONFE"
                        ? "success-case-logo--confe bg-white border-white/30 p-2 md:p-3"
                        : "bg-surface-container-low border-white/10"
                    }`}
                  >
                    <ClientLogo
                      client={
                        item.client === "CONFE"
                          ? { ...getClientLogo(item.client), lightBg: false }
                          : getClientLogo(item.client)
                      }
                      size={item.client === "CONFE" ? "2xl" : "lg"}
                      variant="featured"
                      className={item.client === "CONFE" ? "success-case-confe-logo" : ""}
                    />
                  </div>
                )}
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.sector}</p>
                <p className="font-medium text-on-surface mb-2">{item.title}</p>
                <p className="text-sm text-on-surface-variant">{item.result}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2 text-sm uppercase tracking-wider">
              Ver todos los proyectos <ArrowForwardIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PartnerSection />

      {/* Clientes — reveal strip */}
      <section className="layer-reveal py-12 border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee items-center gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} client={client} size="md" />
          ))}
        </div>
      </section>

      {/* Por qué elegirnos — panel */}
      <section className="layer-panel section-py bg-surface-container-low shadow-[0_-20px_60px_rgba(25,28,28,0.95)]">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-on-surface-variant">Plazos claros, código mantenible y soporte en español.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="benefit-card"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-bold mb-2">{b.title}</h4>
                  <p className="text-on-surface-variant text-sm">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final — reveal, video visible around card */}
      <section className="layer-reveal section-py">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <motion.div
            {...fadeUp}
            className="bg-gradient-to-r from-surface-container-highest to-background border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-breathe" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">¿Listo para transformar tu empresa?</h2>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                Cuéntanos tu proyecto o agenda una llamada. Te proponemos una solución a medida sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-10 py-5 inline-flex items-center justify-center gap-2">
                  Agenda una llamada <ArrowForwardIcon className="h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-base px-10 py-5">
                  Cuéntanos tu proyecto
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
