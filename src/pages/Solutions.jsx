import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import { solutions } from "../data/solutionsData";
import { getPageSeo } from "../data/seoData";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const Solutions = () => {
  const seo = getPageSeo("solutions");

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
        eyebrow="Productos"
        title="Soluciones listas"
        subtitle="ERPinit e initlogistics: software empresarial y logística con trazabilidad RFID listo para empresas en México."
      />

      <section className="section-py pt-0">
        <div className="max-w-container mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 icon-badge w-16 h-16">
                      <span className="text-2xl font-semibold text-white">{solution.initial}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{solution.name}</h2>
                      <p className="text-on-surface-variant font-medium mt-1">{solution.tagline}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">{solution.description}</p>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Incluye</h3>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {solution.paraQuien?.length > 0 && (
                    <>
                      <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Para quién es</h3>
                      <ul className="space-y-2 mb-6">
                        {solution.paraQuien.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-on-surface-variant">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {solution.priceNote && (
                    <p className="text-sm text-on-surface-variant mb-4">{solution.priceNote}</p>
                  )}
                  <Link to="/contact" className="btn-primary inline-flex items-center px-6 py-3">
                    Solicitar demo gratuita →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Necesitas algo a medida?"
        text="Si tu proyecto requiere desarrollo personalizado en lugar de una solución lista, nuestros servicios están para ti."
        ctaLabel="Ver servicios"
        to="/services"
      />
    </div>
  );
};

export default Solutions;
