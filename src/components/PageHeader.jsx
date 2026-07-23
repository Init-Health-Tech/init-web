import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <section className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
    {/* Per-page subtle accent glow — replaces the identical shallow template
        every route used to share, without competing with the green brand. */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] pointer-events-none opacity-40"
      style={{
        background: "radial-gradient(circle, var(--color-accent-container) 0%, transparent 70%)",
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
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {eyebrow}
          </span>
        )}
        <h1
          className="text-4xl md:text-5xl font-semibold text-on-surface mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        <div
          className="mt-8 mx-auto"
          style={{ width: "3rem", height: "2px", background: "var(--gradient-accent)" }}
        />
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
