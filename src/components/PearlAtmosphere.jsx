import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Living pearl atmosphere — drifting brand orbs, film grain, cursor spotlight.
 * Use `mode="fixed"` (site chrome) or `mode="overlay"` (above video/scrim in hero).
 */
const PearlAtmosphere = ({ intensity = "default", mode = "fixed" }) => {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const spotRef = useRef(null);
  const strong = intensity === "strong";
  const isOverlay = mode === "overlay";

  useEffect(() => {
    if (reduce) return undefined;
    const spot = spotRef.current;
    if (!spot) return undefined;

    let raf = 0;
    let tx = window.innerWidth * 0.5;
    let ty = window.innerHeight * 0.35;
    let cx = tx;
    let cy = ty;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      spot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div
      ref={rootRef}
      className={`pearl-atmosphere pointer-events-none overflow-hidden ${
        isOverlay
          ? "absolute inset-0 z-[2]"
          : "fixed inset-0 z-[2]"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 ${strong ? "opacity-100" : "opacity-80"}`}
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 15% 20%, rgba(30, 143, 65, 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 60% 45% at 85% 15%, rgba(0, 167, 167, 0.14) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 70% 80%, rgba(30, 143, 65, 0.1) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 20% 75%, rgba(0, 167, 167, 0.09) 0%, transparent 50%)
          `,
        }}
      />

      {!reduce && (
        <>
          <div className="pearl-orb pearl-orb--a" />
          <div className="pearl-orb pearl-orb--b" />
          <div className="pearl-orb pearl-orb--c" />
          <div
            ref={spotRef}
            className={`pearl-spotlight ${strong ? "pearl-spotlight--strong" : ""}`}
          />
        </>
      )}

      <div className="pearl-grain" />
    </div>
  );
};

/** One-shot expanding ring when Home mounts — entry surprise */
export const HeroEntryBurst = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-[42%] h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30,143,65,0.28) 0%, rgba(0,167,167,0.1) 35%, transparent 68%)",
        }}
        initial={{ scale: 0.15, opacity: 0.9 }}
        animate={{ scale: 1.55, opacity: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute left-1/2 top-[42%] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/55 to-transparent"
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "min(72%, 28rem)", opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

export default PearlAtmosphere;
