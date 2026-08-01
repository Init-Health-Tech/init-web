/**
 * Apple-inspired motion tokens — smooth, restrained, ease-out emphasis.
 */
export const appleEase = [0.16, 1, 0.3, 1];

/**
 * Content reveal on mount (not whileInView).
 *
 * whileInView + route enter is unreliable: IntersectionObserver often misses
 * elements that mount inside an animating page wrapper, so above-the-fold
 * blocks stay at opacity 0 until the user scrolls. `animate` always runs.
 */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    ease: appleEase,
  },
};

/** Route enter/exit — opacity only (no transform/filter on the page shell). */
export const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: appleEase,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};
