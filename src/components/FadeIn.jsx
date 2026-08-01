import React from "react";
import { motion } from "framer-motion";
import { appleEase } from "../lib/motion";

/**
 * Shared mount reveal. Uses `animate` (not whileInView) so content never
 * stays invisible after a client-side route change.
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  as = "div",
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: appleEase }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
