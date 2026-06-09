import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle }) => (
  <section className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
    <div className="max-w-container mx-auto px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center justify-center rounded-2xl bg-white p-2 shadow-xl mb-6 hover:rotate-3 transition-transform duration-300"
        >
          <img src="/Init-Logo.svg" alt="INIT" className="h-14 w-14 object-contain" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        <div className="section-title-line mt-8" />
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
