import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle }) => (
  <section className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
    <div className="max-w-container mx-auto px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="exec-frame inline-block mb-8">
          <img src="/Init-Logo-black.svg" alt="INIT" className="h-12 w-auto object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-on-surface mb-6 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        <div className="section-title-line mt-8" />
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
