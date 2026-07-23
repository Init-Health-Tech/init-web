import React from "react";
import { motion } from "framer-motion";

/**
 * Shared scroll-reveal wrapper. Every page previously redeclared its own
 * `fadeUp` motion variant object — this centralizes that animation so
 * timing/easing stays consistent and future tweaks only happen in one file.
 *
 * Usage: <FadeIn delay={0.1}><h2>Title</h2></FadeIn>
 * Pass `as="li"` etc. to change the rendered element when needed.
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  as = "div",
  once = true,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
