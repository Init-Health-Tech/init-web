import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  reveal,
  revealSoft,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "../lib/motion";

/**
 * Apple-style scroll reveal. Use for headings and focal blocks.
 */
export function Reveal({
  as = "div",
  children,
  className = "",
  soft = false,
  delay = 0,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  const base = soft ? revealSoft : reveal;

  if (reduce) {
    const Tag = as === "div" ? "div" : as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const variants = delay
    ? {
        hidden: base.hidden,
        visible: {
          ...base.visible,
          transition: { ...base.visible.transition, delay },
        },
      }
    : base;

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      style={{ willChange: "opacity, transform, filter" }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/**
 * Parent that staggers children with variants.
 */
export function Stagger({
  children,
  className = "",
  fast = false,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fast ? staggerFast : staggerContainer}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  as = "div",
  children,
  className = "",
  soft = true,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  const variants = soft ? revealSoft : reveal;

  if (reduce) {
    const Tag = as === "div" ? "div" : as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Comp
      className={className}
      variants={variants}
      style={{ willChange: "opacity, transform" }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export default Reveal;
