import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealVariants, staggerContainer, staggerViewport } from "../lib/motion";
import { usePageReady } from "./PageReadyContext";

/**
 * Parent for staggered children. Use with <StaggerItem variant="…">.
 */
export const Stagger = ({
  children,
  className,
  as = "div",
  inView = false,
  stagger = 0.18,
  delayChildren = 0.14,
  amount = staggerViewport.amount,
  style,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const { ready } = usePageReady();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    return (
      <MotionTag className={className} style={style} {...rest}>
        {children}
      </MotionTag>
    );
  }

  const variants = {
    ...staggerContainer,
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  if (inView) {
    return (
      <MotionTag
        className={className}
        style={style}
        variants={variants}
        initial="hidden"
        animate={ready ? undefined : "hidden"}
        whileInView={ready ? "show" : undefined}
        viewport={{ once: true, amount, margin: staggerViewport.margin }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate="show"
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerItem = ({
  children,
  className,
  as = "div",
  variant = "up",
  delay = 0,
  style,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const variants = getRevealVariants(variant, delay);
  const needsPerspective =
    variant === "flip" || variant === "tilt" || variant === "tiltRight";

  if (reduce) {
    return (
      <MotionTag className={className} style={style} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={needsPerspective ? { transformStyle: "preserve-3d", ...style } : style}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Stagger;
