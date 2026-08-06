import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "../lib/motion";

const PageHeader = ({ eyebrow, title, subtitle }) => {
  const reduce = useReducedMotion();

  return (
    <section className="layer-reveal relative z-10 pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(560px,100%)] h-[220px] sm:h-[280px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 167, 167, 0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-20 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: appleEase }}
        >
          <div className="mb-6 sm:mb-8">
            <img
              src="/Init-Logo-black.svg"
              alt="INIT"
              className="h-10 sm:h-12 md:h-14 w-auto mx-auto object-contain"
            />
          </div>
          {eyebrow && <span className="eyebrow block mb-4">{eyebrow}</span>}
          <h1 className="display-section text-on-surface mb-4 sm:mb-6 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-1">
              {subtitle}
            </p>
          )}
          <div className="section-title-rail mt-8 sm:mt-10" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
