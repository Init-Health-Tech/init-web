/**
 * Apple-inspired motion tokens — smooth, restrained, ease-out emphasis.
 * Cubic: approx. Apple's system easing (easeOutExpo-ish).
 */
export const appleEase = [0.16, 1, 0.3, 1];

export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" };

/** Section / block reveal on scroll */
export const reveal = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.98,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: appleEase,
    },
  },
};

/** Softer card / list item (no blur — cheaper in grids) */
export const revealSoft = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: appleEase,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

/** Drop-in replacement for the old fadeUp spread props */
export const fadeUp = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
  variants: revealSoft,
};

export const fadeUpBlur = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
  variants: reveal,
};

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

/** Hero load choreography */
export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: appleEase,
    },
  },
};
