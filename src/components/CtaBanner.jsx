import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

/**
 * End-of-page "talk to us" panel. Every page ended with its own copy of
 * this glass-card + heading + button block — centralized here so the
 * visual treatment is consistent and each page only supplies its copy.
 */
const CtaBanner = ({
  title,
  text,
  ctaLabel = "Evaluar si podemos ayudar",
  to = "/contact",
  secondaryLabel,
  secondaryTo,
}) => (
  <section className="layer-panel section-py bg-background">
    <div className="max-w-container mx-auto px-6 md:px-12 lg:px-16">
      <FadeIn className="glass-card p-12 md:p-20 lg:p-24 text-center relative overflow-hidden border-white/12">
        <div className="relative z-10">
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">{title}</h2>
          {text && (
            <p className="text-on-surface-variant text-lg mb-10 max-w-md mx-auto leading-relaxed">
              {text}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to={to} className="btn-primary inline-flex items-center justify-center gap-2">
              {ctaLabel}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && (
              <Link
                to={secondaryTo || to}
                className="btn-secondary inline-flex items-center justify-center"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CtaBanner;
