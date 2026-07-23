import React from "react";
import { motion } from "framer-motion";

/**
 * Shared stat/metric tile — dedupes the glass-card stat markup that used to
 * be hand-duplicated in Home.jsx (3 metrics with icon+sub) and Portfolio.jsx
 * (4 stats, no icon). Numbers get the shared gold `.stat-shimmer` treatment.
 */
const StatTile = ({ icon: Icon, value, label, sub, delay = 0, compact = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    className={`glass-card ${compact ? "p-5 text-center" : "flex items-start gap-4 p-6"}`}
  >
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
      <span className={`block font-semibold uppercase tracking-wide ${compact ? "text-xs md:text-sm text-on-surface-variant" : "text-sm text-on-surface"}`}>
        {label}
      </span>
      {sub && <span className="block text-xs text-on-surface-variant mt-1">{sub}</span>}
    </div>
  </motion.div>
);

export default StatTile;
