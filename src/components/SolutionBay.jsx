import React, { useState, startTransition } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SolutionIllustration from "./SolutionIllustration";
import { appleEase } from "../lib/motion";
import {
  CircleCheck as CheckCircleIcon,
  LayoutGrid as ErpIcon,
  UsersRound as CrmIcon,
  RadioTower as LogisticsIcon,
} from "lucide-react";

const ICONS = {
  erp: ErpIcon,
  crm: CrmIcon,
  logistics: LogisticsIcon,
};

const accentActive = {
  green: "border-primary/45 bg-primary/[0.08]",
  teal: "border-secondary/45 bg-secondary/[0.1]",
  rfid: "border-rfid/70 bg-rfid/25",
};

const accentDot = {
  green: "bg-primary",
  teal: "bg-secondary",
  rfid: "bg-on-surface/50",
};

const accentText = {
  green: "text-primary",
  teal: "text-secondary",
  rfid: "text-on-surface/70",
};

/**
 * Product showroom — pick one product, inspect one stage.
 * Deliberately not a Services-style chapter scroll.
 */
const SolutionBay = ({ products, copy, t }) => {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(products[0]?.id || "erp");
  const active = products.find((p) => p.id === activeId) || products[0];
  const loc = copy[active?.id] || {};
  const Icon = ICONS[active?.id] || ErpIcon;

  const select = (id) => {
    startTransition(() => setActiveId(id));
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={t("solutions.pickHint")}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-10"
      >
        {products.map((product) => {
          const selected = product.id === activeId;
          const ProductIcon = ICONS[product.id] || ErpIcon;
          const locTab = copy[product.id] || {};
          return (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`solution-tab-${product.id}`}
              aria-controls="solution-bay-panel"
              onClick={() => select(product.id)}
              className={`group text-left rounded-[var(--radius-exec)] border px-4 sm:px-5 py-4 min-h-11 transition-[border-color,background-color,transform] duration-300 ${
                selected
                  ? accentActive[product.accent] || accentActive.green
                  : "border-on-surface/10 bg-surface-container/40 hover:border-on-surface/20 hover:bg-surface-container/70"
              }`}
            >
              <span className="flex items-center gap-3 mb-2">
                <ProductIcon
                  className={`h-5 w-5 shrink-0 ${
                    selected
                      ? accentText[product.accent] || accentText.green
                      : "text-on-surface/40 group-hover:text-on-surface/65"
                  }`}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span
                  className={`text-base sm:text-lg font-semibold tracking-tight ${
                    selected ? "text-on-surface" : "text-on-surface/60"
                  }`}
                >
                  {product.name}
                </span>
                <span
                  className={`ml-auto h-1.5 w-1.5 rounded-full shrink-0 ${
                    selected
                      ? accentDot[product.accent] || accentDot.green
                      : "bg-transparent"
                  }`}
                  aria-hidden
                />
              </span>
              <span className="block text-sm text-on-surface-variant leading-snug line-clamp-2 pl-8">
                {locTab.tagline}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="solution-bay-panel"
        role="tabpanel"
        aria-labelledby={`solution-tab-${active.id}`}
        className="rounded-[var(--radius-exec)] border border-on-surface/10 bg-surface-container/30 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: reduce ? 0.01 : 0.38, ease: appleEase }}
          >
            <SolutionIllustration
              kind={active.id}
              title={active.name}
              accent={active.accent}
              wide
            />

            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-8 lg:gap-14 mb-10 lg:mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className={`h-5 w-5 ${accentText[active.accent] || accentText.green}`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <p className="eyebrow !mb-0">{t("solutions.eyebrow")}</p>
                  </div>
                  <h2 className="display-section text-[clamp(1.85rem,4vw,2.85rem)] mb-3 text-balance">
                    {active.name}
                  </h2>
                  <p className="text-lg text-on-surface-variant font-medium leading-snug mb-8">
                    {loc.tagline}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
                  >
                    {t("solutions.ctaCard")}
                  </Link>
                </div>
                <p className="text-on-surface text-base sm:text-lg leading-relaxed lg:pt-10">
                  {loc.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 md:gap-12 pt-8 border-t border-on-surface/10">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                    {t("solutions.includes")}
                  </h3>
                  <ul className="space-y-3">
                    {(loc.features || []).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-on-surface"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(loc.paraQuien || []).length > 0 ? (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                      {t("solutions.forWhom")}
                    </h3>
                    <ul className="space-y-3">
                      {loc.paraQuien.map((item) => (
                        <li
                          key={item}
                          className="text-on-surface-variant leading-relaxed pl-4 border-l border-on-surface/15"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SolutionBay;
