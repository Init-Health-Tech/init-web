import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router";
import { pageTransition } from "../lib/motion";
import { usePageReady } from "./PageReadyContext";

/**
 * Wraps route content with enter/exit fades.
 * Opacity-only on purpose: transforms/filters on this shell break child
 * IntersectionObservers in several browsers.
 * Marks page ready on animation complete (in addition to the timeout fallback).
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const { markReady } = usePageReady();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        onAnimationComplete={(definition) => {
          if (definition === "animate") markReady();
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
