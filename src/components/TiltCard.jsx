import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { springSnappy } from "../lib/motion";

const DEFAULT_MAX = 9;

/**
 * Pointer-tracking 3D tilt card.
 */
const TiltCard = ({
  children,
  className = "",
  maxTilt = DEFAULT_MAX,
  glare = true,
  as = "div",
  href,
  target,
  rel,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, springSnappy);
  const springY = useSpring(rotateY, springSnappy);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55) 0%, transparent 55%)`;

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const MotionTag = href ? motion.a : motion[as] || motion.div;
  const linkProps = href ? { href, target, rel } : {};

  if (reduce) {
    return (
      <MotionTag className={className} {...linkProps} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <div className="tilt-perspective h-full">
      <MotionTag
        ref={ref}
        className={`tilt-card relative h-full ${className}`}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMove}
        onMouseLeave={reset}
        {...linkProps}
        {...rest}
      >
        {children}
        {glare ? (
          <motion.div
            aria-hidden="true"
            className="tilt-glare"
            style={{ background: glareBg }}
          />
        ) : null}
      </MotionTag>
    </div>
  );
};

export default TiltCard;
