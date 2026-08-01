/**
 * Apple-inspired motion tokens — smooth, restrained, ease-out emphasis.
 * Cubic: approx. Apple's system easing (easeOutExpo-ish).
 */
export const appleEase = [0.16, 1, 0.3, 1];

/** Route / screen enter-exit */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: appleEase,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 1, 1],
    },
  },
};
