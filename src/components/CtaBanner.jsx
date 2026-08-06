import React from "react";
import { Link } from "react-router";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { ArrowRight as ArrowForwardIcon } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const CtaBanner = ({
  title,
  text,
  ctaLabel,
  to = "/contact",
  secondaryLabel,
  secondaryTo,
}) => {
  const { t } = useLanguage();
  const label = ctaLabel || t("common.ctaEvaluate");

  return (
    <section className="layer-panel section-py bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <Reveal inView variant="flip" className="relative">
          <TiltCard
            className="glass-card p-8 sm:p-12 md:p-20 lg:p-24 text-center relative overflow-hidden border-on-surface/10"
            maxTilt={6}
            glare
          >
            <div className="relative z-10">
              <div className="rail-vertical rail-vertical--center h-10 mb-8 opacity-60" aria-hidden="true" />
              <h2 className="display-section mb-4 sm:mb-5 text-balance">
                {title}
              </h2>
              {text && (
                <p className="text-on-surface-variant text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
                  {text}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <Link
                  to={to}
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {label}
                  <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
                {secondaryLabel && (
                  <Link
                    to={secondaryTo || to}
                    className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBanner;
