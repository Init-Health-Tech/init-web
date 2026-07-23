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
  ctaLabel = "Cuéntanos tu proyecto",
  to = "/contact",
  secondaryLabel,
  secondaryTo,
}) => (
  <section className="section-py">
    <div className="max-w-container mx-auto px-6 md:px-20">
      <FadeIn className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">{title}</h2>
          {text && <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">{text}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={to} className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4">
              {ctaLabel}
              <ArrowForwardIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && (
              <Link to={secondaryTo || to} className="btn-secondary inline-flex items-center justify-center px-8 py-4">
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
