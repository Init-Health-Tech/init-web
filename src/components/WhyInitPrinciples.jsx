import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "../lib/motion";

/**
 * Interactive principles — incoming card physically pushes the previous one out.
 */
const WhyInitPrinciples = ({ principles, hint }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState(0);
  const slideRefs = useRef([]);

  useLayoutEffect(() => {
    const node = slideRefs.current[active];
    if (!node) return undefined;

    const update = () => setHeight(node.offsetHeight);
    update();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(node);
    window.addEventListener("resize", update);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [active, principles]);

  const select = (index) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-start">
      <div
        role="tablist"
        aria-label={hint}
        className="flex flex-col divide-y divide-on-surface/10 border-y border-on-surface/10"
      >
        {principles.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`why-tab-${index}`}
              aria-controls="why-panel"
              onClick={() => select(index)}
              onMouseEnter={() => {
                if (!reduce) select(index);
              }}
              className={`group flex items-baseline gap-5 sm:gap-6 text-left py-5 sm:py-6 transition-colors min-h-11 ${
                selected ? "text-on-surface" : "text-on-surface/40 hover:text-on-surface/75"
              }`}
            >
              <span
                className={`tabular-nums text-[12px] font-semibold tracking-[0.16em] shrink-0 ${
                  selected ? "text-primary" : "text-on-surface/30 group-hover:text-primary/70"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-2xl sm:text-3xl md:text-[2.15rem] font-bold tracking-tight leading-none transition-colors ${
                  selected ? "text-on-surface" : ""
                }`}
              >
                {item.title}
              </span>
              <span
                className={`ml-auto hidden sm:block h-px flex-1 max-w-[4rem] transition-colors ${
                  selected ? "bg-primary" : "bg-transparent group-hover:bg-on-surface/20"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[var(--radius-exec)]"
        initial={false}
        animate={{ height: height || "auto" }}
        transition={
          reduce
            ? { duration: 0.01 }
            : { duration: 0.85, ease: appleEase }
        }
      >
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `${-active * 100}%` }}
          transition={
            reduce
              ? { duration: 0.01 }
              : { duration: 0.95, ease: appleEase }
          }
        >
          {principles.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              id={index === active ? "why-panel" : undefined}
              role="tabpanel"
              aria-labelledby={`why-tab-${index}`}
              aria-hidden={index !== active}
              className="w-full min-w-full flex-shrink-0"
            >
              <div className="relative w-full rounded-[var(--radius-exec)] border border-on-surface/10 bg-background p-7 sm:p-10 md:p-12 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)]">
                <div
                  className="pointer-events-none absolute inset-0 rounded-[var(--radius-exec)] overflow-hidden"
                  style={{
                    background: `
                      radial-gradient(ellipse 70% 60% at 90% 10%, rgba(30, 143, 65, 0.16) 0%, transparent 55%),
                      radial-gradient(ellipse 50% 45% at 10% 90%, rgba(0, 167, 167, 0.12) 0%, transparent 50%)
                    `,
                  }}
                  aria-hidden
                />

                <div className="relative flex flex-col gap-10">
                  <div>
                    <p className="eyebrow mb-6">{hint}</p>
                    <p className="font-heading text-[clamp(4rem,12vw,7rem)] leading-none text-primary/20 tabular-nums select-none mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="display-section text-[clamp(1.75rem,3.5vw,2.75rem)] mb-5 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>

                  {item.line ? (
                    <p className="pt-6 border-t border-on-surface/10 text-sm sm:text-base font-medium text-primary tracking-wide">
                      {item.line}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyInitPrinciples;
