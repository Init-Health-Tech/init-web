import React, { useState, startTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { appleEase } from "../lib/motion";

/**
 * Sector atlas — pick a sector, read one stage.
 * Deliberately not a divided list (old Portfolio) nor Solutions showroom.
 */
const SectorAtlas = ({ sectors, copy, hint }) => {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(sectors[0]?.id);
  const activeIndex = Math.max(
    0,
    sectors.findIndex((s) => s.id === activeId)
  );
  const active = sectors[activeIndex] || sectors[0];
  const loc = copy[active?.id] || {};

  const select = (id) => {
    startTransition(() => setActiveId(id));
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={hint}
        className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-thin"
      >
        {sectors.map((sector, index) => {
          const selected = sector.id === activeId;
          const title = copy[sector.id]?.title || sector.id;
          return (
            <button
              key={sector.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`sector-tab-${sector.id}`}
              aria-controls="sector-atlas-panel"
              onClick={() => select(sector.id)}
              onMouseEnter={() => {
                if (!reduce) select(sector.id);
              }}
              className={`shrink-0 rounded-[var(--radius-exec)] border px-4 py-2.5 min-h-11 text-left transition-[border-color,background-color,color] duration-300 ${
                selected
                  ? "border-primary/40 bg-primary/[0.08] text-on-surface"
                  : "border-on-surface/10 bg-transparent text-on-surface/55 hover:border-on-surface/20 hover:text-on-surface"
              }`}
            >
              <span className="flex items-baseline gap-2">
                <span
                  className={`font-heading text-[11px] tracking-[0.14em] tabular-nums ${
                    selected ? "text-primary" : "text-on-surface/35"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm sm:text-[15px] font-semibold tracking-tight whitespace-nowrap">
                  {title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="sector-atlas-panel"
        role="tabpanel"
        aria-labelledby={`sector-tab-${active.id}`}
        className="mt-8 sm:mt-10 relative min-h-[220px] sm:min-h-[260px] rounded-[var(--radius-exec)] border border-on-surface/10 bg-surface-container/40 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-10 w-[min(420px,80%)] h-[220px] opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(30, 143, 65, 0.14) 0%, transparent 68%)",
          }}
          aria-hidden
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: reduce ? 0.01 : 0.4, ease: appleEase }}
            className="relative p-6 sm:p-8 md:p-10 lg:p-12"
          >
            <p className="font-heading text-[clamp(3.5rem,10vw,6.5rem)] leading-none text-primary/15 font-semibold tracking-tight tabular-nums mb-4 sm:mb-6 select-none">
              {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <h3 className="display-section text-[clamp(1.65rem,3.5vw,2.5rem)] mb-4 text-balance max-w-xl">
              {loc.title}
            </h3>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl">
              {loc.tease}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectorAtlas;
