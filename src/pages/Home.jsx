import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import StructuredData from "../components/StructuredData";
import PageVideoBackground from "../components/PageVideoBackground";
import ClientLogo from "../components/ClientLogo";
import PartnerSection from "../components/PartnerSection";
import CtaBanner from "../components/CtaBanner";
import { clientLogos, getClientLogo } from "../data/clientsData";
import { getPageSeo, SITE_URL } from "../data/seoData";
import { teamCopy } from "../data/teamData";
import {
  ArrowForward as ArrowForwardIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from "@mui/icons-material";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  const pillars = [
    {
      title: "Hecho para tu operación",
      text: "Sistemas a tu medida. Sin plantillas. Sin atajos que te cuesten después.",
    },
    {
      title: "Claridad antes de código",
      text: "Primero el negocio. Después lo que de verdad mueve la aguja.",
    },
    {
      title: "Una experiencia, no un ticket más",
      text: "Diseño, desarrollo y acompañamiento con el mismo estándar: precisión y calma.",
    },
  ];

  const successCases = [
    { client: "CONFE", tease: "Institucional. Del caos de procesos a un sistema que ordena." },
    { client: "Polola's", tease: "Gastronomía. Pedidos y operación en un solo lugar." },
    { client: "TRANSCOM", tease: "Logística. Un diagnóstico que abre el siguiente paso." },
  ];

  const services = [
    { title: "Software a medida", hint: "Apps y sistemas que solo existen para tu negocio." },
    { title: "Digitalización", hint: "Orden, roadmap y prioridades con criterio." },
    { title: "Sistemas e integración", hint: "Datos, automatización y operación conectada." },
  ];

  const seo = getPageSeo("home");

  return (
    <div className="min-h-screen">
      <PageHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
      />
      <StructuredData
        description={seo.description}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "INIT — Desarrollo de Software a Medida",
            url: SITE_URL,
            image: `${SITE_URL}/Init-Logo.svg`,
            telephone: "+52 55 4761 7977",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad López Mateos",
              addressRegion: "Estado de México",
              addressCountry: "MX",
            },
            serviceType: [
              "Desarrollo de software a medida",
              "Consultoría en transformación digital",
              "Desarrollo de aplicaciones web",
              "Integración de sistemas",
            ],
          },
        ]}
      />

      <PageVideoBackground clip="cinematic" />

      {/* Hero — one composition: brand + thesis + one line + CTAs */}
      <section className="layer-reveal relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="hero-scrim absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 lg:px-16 text-center pt-32 pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-on-surface mb-10 md:mb-14"
          >
            INIT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-title text-[2.75rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-7 md:mb-8 max-w-3xl mx-auto text-balance"
          >
            Hay empresas que operan.
            <br />
            <span className="text-primary">Y empresas que avanzan.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.22 }}
            className="text-[17px] md:text-xl text-on-surface-variant max-w-lg mx-auto mb-12 md:mb-14 leading-relaxed"
          >
            Consultora de software. Primero evaluamos si realmente podemos ayudar.
            Si no, te lo decimos — no vendemos por vender.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              Ver el trabajo
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              ¿Podemos ayudar?
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 md:mt-28 text-on-surface-variant/70"
            aria-hidden="true"
          >
            <ChevronDownIcon className="h-7 w-7 mx-auto animate-[bounce-slow_2.4s_ease-in-out_infinite]" />
          </motion.div>
        </div>
      </section>

      {/* Scarcity — typographic billboard over video (Apple reveal) */}
      <section className="layer-reveal relative py-28 md:py-36">
        <div className="absolute inset-0 bg-background/40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.p
            {...fadeUp}
            className="display-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-on-surface max-w-3xl mx-auto leading-[1.15] text-balance"
          >
            No aceptamos todos los proyectos.
            <span className="block mt-3 md:mt-4 text-on-surface-variant font-normal tracking-tight text-2xl sm:text-3xl md:text-4xl">
              Si no podemos ayudar, no vendemos.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Difference — still over video */}
      <section className="layer-reveal relative section-py">
        <div className="absolute inset-0 bg-background/55 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
            <p className="eyebrow mb-5">La diferencia</p>
            <h2 className="display-title text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-balance">
              Cuando el sistema trabaja contigo, todo cambia.
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              Menos fricción. Menos improvisación. Más control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="text-center md:text-left"
              >
                <p className="text-[13px] text-primary font-medium tracking-[0.12em] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl md:text-[1.35rem] font-semibold mb-3 tracking-tight text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Apple list rows */}
      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="eyebrow mb-5">Lo que construimos</p>
            <h2 className="display-title text-4xl md:text-5xl mb-5 text-balance">
              Tres caminos. Una sola exigencia.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Solo lo esencial. Si encaja, el resto lo vemos juntos.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {services.map((row, i) => (
              <motion.div
                key={row.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              >
                <Link to="/services" className="apple-row group">
                  <div className="text-left min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                      {row.title}
                    </h3>
                    <p className="text-[15px] text-on-surface-variant mt-1.5 leading-relaxed">
                      {row.hint}
                    </p>
                  </div>
                  <ArrowForwardIcon
                    className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="layer-panel section-py bg-surface-container-low">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-5">Quiénes somos</p>
            <h2 className="display-title text-4xl md:text-5xl mb-6 text-balance">
              Un equipo pequeño. Una obsesión grande.
            </h2>
            <p className="text-lg text-on-surface-variant mb-5 leading-relaxed">
              {teamCopy.about} Trabajamos cerca, sin capas de más —
              como si fueras parte del estudio.
            </p>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Estado de México. Para empresas que quieren sentir —no solo decir—
              que su tecnología está a la altura.
            </p>
            <Link to="/team" className="btn-secondary inline-flex items-center gap-2">
              Conocer al equipo
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
            <img
              src="/empleados-fotos/init-team.jpg"
              alt="Equipo INIT"
              className="w-full object-cover aspect-[4/3] rounded-[var(--radius-exec)] border border-white/12"
            />
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="layer-panel section-py bg-background">
        <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-5">Confianza</p>
            <h2 className="display-title text-4xl md:text-5xl mb-4 text-balance">
              Quienes ya están dentro.
            </h2>
            <p className="text-on-surface-variant text-lg">Casos reales. El detalle, cuando hablemos.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {successCases.map((item, i) => (
              <motion.div
                key={item.client}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group text-center"
              >
                {getClientLogo(item.client) && (
                  <div
                    className={`success-case-logo flex items-center justify-center mb-7 h-36 md:h-40 border rounded-[var(--radius-exec)] ${
                      item.client === "CONFE" || item.client === "Polola's"
                        ? `success-case-logo--${item.client === "CONFE" ? "confe" : "pololas"} bg-white border-white/25 p-3`
                        : "bg-surface-container border-white/12"
                    }`}
                  >
                    <ClientLogo
                      client={
                        item.client === "CONFE" || item.client === "Polola's"
                          ? { ...getClientLogo(item.client), lightBg: false }
                          : getClientLogo(item.client)
                      }
                      size="lg"
                      variant="featured"
                      className={
                        item.client === "CONFE"
                          ? "success-case-confe-logo"
                          : item.client === "Polola's"
                            ? "success-case-pololas-logo"
                            : ""
                      }
                    />
                  </div>
                )}
                <p className="font-semibold text-on-surface text-lg mb-2">{item.client}</p>
                <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-xs mx-auto">
                  {item.tease}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              Explorar portafolio
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <PartnerSection />

      <section className="layer-panel py-16 bg-surface-container-low border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee items-center gap-16 opacity-80">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} client={client} size="md" />
          ))}
        </div>
      </section>

      <CtaBanner
        title="¿Tiene sentido hablar?"
        text="Escribimos para evaluar si podemos ayudar de verdad. Si el encaje no está, te lo diremos con claridad — sin empujar una venta."
        ctaLabel="Evaluar si podemos ayudar"
        secondaryLabel="Ver servicios"
        secondaryTo="/services"
      />
    </div>
  );
};

export default Home;
