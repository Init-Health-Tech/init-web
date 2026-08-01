import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router";
import { pageTransition } from "../lib/motion";

/**
 * Wraps route content with enter/exit fades.
 * Opacity-only on purpose: transforms/filters on this shell break child
 * IntersectionObservers in several browsers.
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  const reduce = useReducedMotion();

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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
