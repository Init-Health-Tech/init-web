import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle, align = "left" }) => {
  const centered = align === "center";
  return (
    <section className="relative z-10 pt-36 pb-14 md:pt-44 md:pb-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}
        >
          {eyebrow && (
            <p className={`eyebrow mb-6 ${centered ? "eyebrow--plain justify-center" : ""}`}>
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-[-0.03em] leading-[1.04]">
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-6 text-lg text-on-surface-variant leading-relaxed ${centered ? "mx-auto" : ""} max-w-2xl`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
