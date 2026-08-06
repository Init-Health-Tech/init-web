import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Layout as LayoutIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Sparkles as SparklesIcon,
} from "lucide-react";
import { appleEase } from "../lib/motion";

const LAYER_ICONS = {
  frontend: LayoutIcon,
  backend: ServerIcon,
  databases: DatabaseIcon,
  infra: CloudIcon,
  security: ShieldIcon,
  data: SparklesIcon,
};

/**
 * Interactive stack explorer — categories only, no tool-name laundry lists.
 */
const StackExplorer = ({ layers, hint }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = layers[active];
  const Icon = LAYER_ICONS[current?.id] || LayoutIcon;

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">
      <div
        role="tablist"
        aria-label={hint}
        className="flex flex-col gap-1"
      >
        {layers.map((layer, index) => {
          const selected = index === active;
          const LayerIcon = LAYER_ICONS[layer.id] || LayoutIcon;
          return (
            <button
              key={layer.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`stack-tab-${layer.id}`}
              aria-controls={`stack-panel-${layer.id}`}
              onClick={() => setActive(index)}
              onMouseEnter={() => {
                if (!reduce) setActive(index);
              }}
              className={`group flex items-center gap-4 text-left px-4 sm:px-5 py-3.5 sm:py-4 rounded-[var(--radius-exec)] border transition-[border-color,background-color,transform] duration-300 min-h-11 ${
                selected
                  ? "border-primary/40 bg-primary/[0.07]"
                  : "border-transparent hover:border-on-surface/10 hover:bg-surface-container/60"
              }`}
            >
              <span
                className={`tabular-nums text-[12px] font-semibold tracking-[0.14em] shrink-0 ${
                  selected ? "text-primary" : "text-on-surface/35"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <LayerIcon
                className={`h-5 w-5 shrink-0 transition-colors ${
                  selected ? "text-primary" : "text-on-surface/40 group-hover:text-on-surface/70"
                }`}
                aria-hidden
              />
              <span
                className={`text-lg sm:text-xl font-semibold tracking-tight transition-colors ${
                  selected ? "text-on-surface" : "text-on-surface/55 group-hover:text-on-surface"
                }`}
              >
                {layer.name}
              </span>
              <span
                className={`ml-auto h-1.5 w-1.5 rounded-full shrink-0 transition-opacity ${
                  selected ? "bg-primary opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div
        className="relative min-h-[220px] sm:min-h-[260px] rounded-[var(--radius-exec)] border border-on-surface/10 bg-background/70 px-6 py-8 sm:px-10 sm:py-12 overflow-hidden"
        style={{ perspective: 900 }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-secondary/10 blur-3xl"
          aria-hidden
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`stack-panel-${current.id}`}
            aria-labelledby={`stack-tab-${current.id}`}
            initial={
              reduce
                ? false
                : { opacity: 0, y: 18, rotateX: 12, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            exit={
              reduce
                ? undefined
                : { opacity: 0, y: -12, filter: "blur(6px)" }
            }
            transition={{ duration: reduce ? 0.01 : 0.45, ease: appleEase }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="icon-badge mb-6">
              <Icon className="h-7 w-7 text-on-primary-container" aria-hidden />
            </div>
            <p className="eyebrow mb-3">{hint}</p>
            <h3 className="display-section text-[clamp(1.6rem,3.2vw,2.4rem)] mb-5 text-balance">
              {current.name}
            </h3>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-md">
              {current.tease}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StackExplorer;
