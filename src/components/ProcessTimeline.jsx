import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { appleEase } from "../lib/motion";

/**
 * Interactive process timeline — click or hover steps to explore the path.
 */
const ProcessTimeline = ({ steps, label }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = steps[active];
  const progress = steps.length <= 1 ? 1 : active / (steps.length - 1);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Desktop / tablet horizontal rail */}
      <div className="hidden sm:block" role="tablist" aria-label={label}>
        <div className="relative px-2">
          <div
            className="absolute left-[10%] right-[10%] top-[18px] h-px bg-on-surface/10"
            aria-hidden
          />
          <motion.div
            className="absolute left-[10%] top-[18px] h-px bg-primary origin-left"
            aria-hidden
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease: appleEase }}
            style={{ width: "80%" }}
          />

          <div className="relative grid grid-cols-5 gap-2">
            {steps.map((step, index) => {
              const selected = index === active;
              const passed = index <= active;
              return (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`process-tab-${index}`}
                  aria-controls="process-panel"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => {
                    if (!reduce) setActive(index);
                  }}
                  className="group flex flex-col items-center text-center pt-0 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-[var(--radius-exec)]"
                >
                  <span
                    className={`relative z-[1] mb-4 flex h-9 w-9 items-center justify-center rounded-full border text-[12px] font-semibold tabular-nums transition-[background-color,border-color,color,transform] duration-300 ${
                      selected
                        ? "border-primary bg-primary text-white scale-110"
                        : passed
                          ? "border-primary/50 bg-background text-primary"
                          : "border-on-surface/20 bg-background text-on-surface/40 group-hover:border-primary/35 group-hover:text-on-surface"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                      selected
                        ? "text-on-surface"
                        : "text-on-surface/45 group-hover:text-on-surface/80"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile vertical rail */}
      <div className="sm:hidden" role="tablist" aria-label={label}>
        <ol className="relative space-y-1 pl-2">
          <div
            className="absolute left-[21px] top-3 bottom-3 w-px bg-on-surface/10"
            aria-hidden
          />
          <motion.div
            className="absolute left-[21px] top-3 w-px bg-primary origin-top"
            aria-hidden
            initial={false}
            animate={{
              scaleY: progress,
              height: "calc(100% - 1.5rem)",
            }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease: appleEase }}
          />
          {steps.map((step, index) => {
            const selected = index === active;
            const passed = index <= active;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`process-tab-m-${index}`}
                  aria-controls="process-panel"
                  onClick={() => setActive(index)}
                  className={`relative flex w-full items-center gap-4 rounded-[var(--radius-exec)] px-2 py-3 text-left transition-colors min-h-11 ${
                    selected ? "bg-primary/[0.06]" : ""
                  }`}
                >
                  <span
                    className={`relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold tabular-nums ${
                      selected
                        ? "border-primary bg-primary text-white"
                        : passed
                          ? "border-primary/50 bg-background text-primary"
                          : "border-on-surface/20 bg-background text-on-surface/40"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-semibold tracking-tight ${
                      selected ? "text-on-surface" : "text-on-surface/55"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail panel */}
      <div
        id="process-panel"
        role="tabpanel"
        aria-labelledby={`process-tab-${active}`}
        className="relative overflow-hidden rounded-[var(--radius-exec)] border border-on-surface/10 bg-surface-container-low/80 px-6 py-8 sm:px-10 sm:py-11"
        style={{ perspective: 900 }}
      >
        <div
          className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={
              reduce
                ? false
                : { opacity: 0, y: 16, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              reduce ? undefined : { opacity: 0, y: -10, filter: "blur(6px)" }
            }
            transition={{ duration: reduce ? 0.01 : 0.4, ease: appleEase }}
            className="relative grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start"
          >
            <p className="font-heading text-[clamp(3rem,8vw,5rem)] leading-none text-primary/25 tabular-nums select-none">
              {String(active + 1).padStart(2, "0")}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
                  {current.title}
                </h3>
                <span className="text-sm font-medium text-primary tracking-wide">
                  {current.timeframe}
                </span>
              </div>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
                {current.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActive((i) => Math.max(0, i - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 text-sm font-medium border border-on-surface/15 rounded-[var(--radius-exec)] text-on-surface disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary/40 transition-colors min-h-11"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActive((i) => Math.min(steps.length - 1, i + 1))
                  }
                  disabled={active === steps.length - 1}
                  className="px-4 py-2 text-sm font-medium border border-on-surface/15 rounded-[var(--radius-exec)] text-on-surface disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary/40 transition-colors min-h-11"
                >
                  →
                </button>
                <span className="ml-2 text-xs text-on-surface/40 tabular-nums tracking-wide">
                  {active + 1} / {steps.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProcessTimeline;
