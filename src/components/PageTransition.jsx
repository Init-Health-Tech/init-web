import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router";
import { pageTransition } from "../lib/motion";

/**
 * Wraps route content with Apple-like enter/exit transitions.
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
        style={{ willChange: "opacity, transform, filter" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
