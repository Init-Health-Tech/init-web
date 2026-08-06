import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Link } from "react-router";
import { springSnappy } from "../lib/motion";

/**
 * Soft magnetic pull toward cursor — surprise without a custom cursor.
 */
const MagneticLink = ({
  to,
  className = "",
  children,
  strength = 0.28,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, springSnappy);
  const sy = useSpring(y, springSnappy);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduce) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-flex w-full sm:w-auto justify-center">
      <Link
        ref={ref}
        to={to}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...rest}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MagneticLink;
