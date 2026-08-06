import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getRevealVariants, revealViewport } from "../lib/motion";
import { usePageReady } from "./PageReadyContext";

/**
 * Editorial reveal with named presets (up, flip, tilt, blur, scale…).
 * - Default: mount animate
 * - inView: whileInView after pageReady
 */
const Reveal = ({
  children,
  delay = 0,
  duration,
  className,
  as = "div",
  inView = false,
  amount = revealViewport.amount,
  /** @type {keyof typeof import('../lib/motion').revealPresets | string} */
  variant = "up",
  style,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const { ready } = usePageReady();
  const MotionTag = motion[as] || motion.div;
  const variants = getRevealVariants(variant, delay);
  if (duration != null && variants.show?.transition) {
    variants.show = {
      ...variants.show,
      transition: { ...variants.show.transition, duration },
    };
  }

  const needsPerspective =
    variant === "flip" || variant === "tilt" || variant === "tiltRight";

  const mergedStyle = needsPerspective
    ? { transformStyle: "preserve-3d", ...style }
    : style;

  if (reduce) {
    return (
      <MotionTag className={className} style={style} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (inView) {
    return (
      <MotionTag
        className={className}
        style={mergedStyle}
        variants={variants}
        initial="hidden"
        animate={ready ? undefined : "hidden"}
        whileInView={ready ? "show" : undefined}
        viewport={{ once: true, amount, margin: revealViewport.margin }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={mergedStyle}
      variants={variants}
      initial="hidden"
      animate="show"
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
