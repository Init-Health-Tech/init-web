import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContainer, heroItem } from "../lib/motion";

const PageHeader = ({ eyebrow, title, subtitle, align = "left" }) => {
  const centered = align === "center";
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 pt-36 pb-14 md:pt-44 md:pb-20 section-glow section-glow--center">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          className={centered ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}
          variants={heroContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          {eyebrow && (
            <motion.p
              variants={heroItem}
              className={`eyebrow mb-6 ${centered ? "eyebrow--plain justify-center" : ""}`}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={heroItem}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-[-0.03em] leading-[1.04]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={heroItem}
              className={`mt-6 text-lg text-on-surface-variant leading-relaxed ${centered ? "mx-auto" : ""} max-w-2xl`}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
