import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealVariants } from "../lib/motion";
import TiltCard from "./TiltCard";

/**
 * Shared stat/metric tile with pop entrance + light 3D tilt.
 */
const StatTile = ({ icon: Icon, value, label, sub, delay = 0, compact = false }) => {
  const reduce = useReducedMotion();
  const variants = getRevealVariants("pop", delay);

  const inner = (
    <>
      {Icon && !compact && (
        <div className="icon-badge shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      )}
      <div>
        <span
          className={`stat-shimmer block font-semibold leading-none mb-1 ${
            compact ? "text-2xl md:text-3xl" : "text-2xl md:text-3xl"
          }`}
        >
          {value}
        </span>
        <span
          className={`block font-semibold uppercase tracking-wide ${
            compact ? "text-xs md:text-sm text-on-surface-variant" : "text-sm text-on-surface"
          }`}
        >
          {label}
        </span>
        {sub && <span className="block text-xs text-on-surface-variant mt-1">{sub}</span>}
      </div>
    </>
  );

  if (reduce) {
    return (
      <div className={`glass-card ${compact ? "p-5 text-center" : "flex items-start gap-4 p-6"}`}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div variants={variants} initial="hidden" animate="show">
      <TiltCard
        className={`glass-card ${compact ? "p-5 text-center" : "flex items-start gap-4 p-6"}`}
        maxTilt={10}
      >
        {inner}
      </TiltCard>
    </motion.div>
  );
};

export default StatTile;
