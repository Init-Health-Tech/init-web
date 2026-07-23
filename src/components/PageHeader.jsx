import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <section className="layer-reveal relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden">
    <div className="hero-scrim absolute inset-0 pointer-events-none opacity-90" aria-hidden="true" />
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(560px,100%)] h-[220px] sm:h-[280px] pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(0, 167, 167, 0.18) 0%, rgba(6, 45, 85, 0.25) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />

    <div className="relative max-w-container mx-auto px-4 sm:px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mb-6 sm:mb-8">
          <img
            src="/Init-Logo-green.svg"
            alt="INIT"
            className="h-10 sm:h-12 md:h-14 w-auto mx-auto object-contain"
          />
        </div>
        {eyebrow && <span className="eyebrow block mb-3">{eyebrow}</span>}
        <h1 className="display-title text-[1.75rem] leading-tight sm:text-4xl md:text-5xl text-on-surface mb-4 sm:mb-6 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed px-1">
            {subtitle}
          </p>
        )}
        <div className="section-title-line mt-6 sm:mt-8" />
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
