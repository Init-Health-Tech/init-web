/**
 * Motion tokens — Apple calm + PezRuido dynamism (3D, blur, directional).
 */
export const appleEase = [0.16, 1, 0.3, 1];
/** Softer springs — room to read the motion */
export const springSoft = { type: "spring", stiffness: 70, damping: 18, mass: 1.1 };
export const springSnappy = { type: "spring", stiffness: 160, damping: 22, mass: 0.75 };

/** Instant when prefers-reduced-motion. */
export const reducedTransition = { duration: 0.01 };

/**
 * Named entrance presets for Reveal / StaggerItem.
 * Keep transforms compositor-friendly (opacity, transform, filter).
 */
export const revealPresets = {
  up: {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -48 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 48 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  /** Flip up into place (rotateX) — card / panel feel */
  flip: {
    hidden: {
      opacity: 0,
      rotateX: 42,
      y: 48,
      scale: 0.94,
      transformPerspective: 1200,
    },
    show: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transformPerspective: 1200,
    },
  },
  /** Tilt in from the side (rotateY) */
  tilt: {
    hidden: {
      opacity: 0,
      rotateY: -28,
      x: -32,
      scale: 0.94,
      transformPerspective: 1100,
    },
    show: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      scale: 1,
      transformPerspective: 1100,
    },
  },
  tiltRight: {
    hidden: {
      opacity: 0,
      rotateY: 28,
      x: 32,
      scale: 0.94,
      transformPerspective: 1100,
    },
    show: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      scale: 1,
      transformPerspective: 1100,
    },
  },
  /** Soft pop with slight overshoot via spring */
  pop: {
    hidden: { opacity: 0, scale: 0.72, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
  },
};

export const presetTransition = {
  up: { duration: 1.15, ease: appleEase },
  left: { duration: 1.2, ease: appleEase },
  right: { duration: 1.2, ease: appleEase },
  scale: { duration: 1.1, ease: appleEase },
  blur: { duration: 1.3, ease: appleEase },
  flip: { duration: 1.35, ease: appleEase },
  tilt: { duration: 1.25, ease: appleEase },
  tiltRight: { duration: 1.25, ease: appleEase },
  pop: springSoft,
};

/**
 * Legacy mount reveal (keep for Team / older spreads).
 */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.95,
    ease: appleEase,
  },
};

export const revealUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1.1,
    ease: appleEase,
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.14,
    },
  },
};

export const staggerItem = {
  hidden: revealPresets.up.hidden,
  show: {
    ...revealPresets.up.show,
    transition: presetTransition.up,
  },
};

/** Route enter/exit — opacity only (no transform on page shell). */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: appleEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

export const PAGE_ENTER_MS = 480;

/** Viewport defaults — fire later so motion is in-frame longer */
export const revealViewport = {
  once: true,
  amount: 0.38,
  margin: "0px 0px -14% 0px",
};

export const staggerViewport = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
};

/** Resolve preset + optional delay into FM variants. */
export function getRevealVariants(preset = "up", delay = 0) {
  const base = revealPresets[preset] || revealPresets.up;
  const transition = {
    ...(presetTransition[preset] || presetTransition.up),
    delay,
  };
  return {
    hidden: base.hidden,
    show: { ...base.show, transition },
  };
}
