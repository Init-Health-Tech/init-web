import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import StructuredData from "../components/StructuredData";
import CtaBanner from "../components/CtaBanner";
import PageVideoBackground from "../components/PageVideoBackground";
import { solutions } from "../data/solutionsData";
import { getPageSeo } from "../data/seoData";
import { useLanguage } from "../i18n/LanguageContext";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const Solutions = () => {
  const { t, lang } = useLanguage();
  const seo = getPageSeo("solutions", lang);

  return (
    <div className="min-h-screen relative z-10">
      <PageHead title={seo.title} description={seo.description} path={seo.path} keywords={seo.keywords} />
      <StructuredData description={seo.description} />
      <PageVideoBackground clip="minimal" />
      <PageHeader
        eyebrow={t("solutions.eyebrow")}
        title={t("solutions.title")}
        subtitle={t("solutions.subtitle")}
      />

      <section className="layer-panel section-py pt-0 bg-background/80">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {solutions.map((solution, index) => {
              const loc = t(`solutions.items.${solution.id}`) || {};
              const tagline = loc.tagline || solution.tagline;
              const description = loc.description || solution.description;
              const features = loc.features || solution.features;
              const paraQuien = loc.paraQuien || solution.paraQuien || [];
              const priceNote = loc.priceNote || solution.priceNote;

              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden"
                >
                  <div className="p-5 sm:p-8 md:p-10">
                    <div className="flex items-start gap-4 sm:gap-5 mb-6">
                      <div className="flex-shrink-0 icon-badge w-14 h-14 sm:w-16 sm:h-16">
                        <span className="text-xl sm:text-2xl font-semibold text-white">{solution.initial}</span>
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{solution.name}</h2>
                        <p className="text-on-surface-variant font-medium mt-1">{tagline}</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-6 leading-relaxed">{description}</p>
                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
                      {t("solutions.includes")}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {paraQuien.length > 0 ? (
                      <>
                        <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
                          {t("solutions.forWhom")}
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {paraQuien.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-on-surface-variant">
                              <span className="text-primary mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                    {priceNote ? (
                      <p className="text-sm text-on-surface-variant mb-4">{priceNote}</p>
                    ) : null}
                    <Link
                      to="/contact"
                      className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto px-6 py-3"
                    >
                      {t("solutions.ctaCard")}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t("solutions.ctaTitle")}
        text={t("solutions.ctaText")}
        ctaLabel={t("common.ctaEvaluate")}
        secondaryLabel={t("solutions.ctaSecondary")}
        secondaryTo="/services"
      />
    </div>
  );
};

export default Solutions;
