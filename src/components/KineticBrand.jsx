import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "../lib/motion";

/**
 * Letter-stagger brand mark — entry beat that feels crafted, not a plain fade.
 */
const KineticBrand = ({ name, className = "" }) => {
  const reduce = useReducedMotion();
  const letters = Array.from(name);

  if (reduce) {
    return <p className={className}>{name}</p>;
  }

  return (
    <p className={`${className} inline-flex justify-center`} aria-label={name}>
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 28, rotateX: 55, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.85,
            delay: 0.08 + i * 0.07,
            ease: appleEase,
          }}
          style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

export default KineticBrand;
