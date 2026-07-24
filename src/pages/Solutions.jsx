import React from "react";
import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import PageHeader from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { solutions } from "../data/solutionsData";
import { getPageSeo } from "../data/seoData";
import { solutionsPage } from "../data/siteCopy";
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

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
      <PageHeader eyebrow="Plataformas propias" title={solutionsPage.title} subtitle={solutionsPage.subtitle} />

      <section className="section-py pt-0 section-glow">
        <Stagger className="max-w-container mx-auto px-6 md:px-10 space-y-6">
          {solutions.map((solution) => (
            <StaggerItem
              key={solution.id}
              soft={false}
              className="glass-card p-8 md:p-12 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16"
            >
              {/* Left: identity */}
              <div className="flex flex-col">
                <span className="eyebrow mb-5">Plataforma propia</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {solution.name}
                </h2>
                <p className="mt-2 text-secondary text-lg font-medium">{solution.tagline}</p>
                <p className="mt-5 text-on-surface-variant leading-relaxed">{solution.description}</p>

                {solution.paraQuien?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xs uppercase tracking-[0.16em] text-faint font-display mb-4">
                      Para quién es
                    </h3>
                    <ul className="space-y-2.5">
                      {solution.paraQuien.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link to="/contact" className="btn-primary px-6 py-3">
                    {solutionsPage.cta}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  {solution.priceNote && (
                    <p className="text-xs text-faint max-w-[16rem]">{solution.priceNote}</p>
                  )}
                </div>
              </div>

              {/* Right: capabilities */}
              <div className="lg:border-l lg:border-outline-soft lg:pl-16">
                <h3 className="text-xs uppercase tracking-[0.16em] text-faint font-display mb-5">
                  Incluye
                </h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3.5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-on-surface/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <Reveal className="max-w-container mx-auto gradient-bg border border-outline rounded-xl px-8 md:px-16 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{solutionsPage.footerTitle}</h2>
          <p className="mt-5 text-on-surface-variant max-w-xl mx-auto leading-relaxed">{solutionsPage.footerBody}</p>
          <Link to="/services" className="btn-secondary px-8 py-3.5 mt-9 inline-flex">
            {solutionsPage.footerCta}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Solutions;
