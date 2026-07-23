import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <section className="layer-reveal relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
    <div className="hero-scrim absolute inset-0 pointer-events-none opacity-90" aria-hidden="true" />
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] pointer-events-none opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(0, 167, 167, 0.18) 0%, rgba(6, 45, 85, 0.25) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />

    <div className="relative max-w-container mx-auto px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="exec-frame inline-block mb-8">
          <img src="/Init-Logo.svg" alt="INIT" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
        </div>
        {eyebrow && (
          <span className="eyebrow block mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="display-title text-4xl md:text-5xl text-on-surface mb-6">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="section-title-line mt-8" />
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
