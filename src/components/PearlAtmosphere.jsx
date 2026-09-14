import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Living pearl atmosphere — orbital contours, brand light and cursor spotlight.
 * Use `mode="fixed"` (site chrome) or `mode="overlay"` (above video/scrim in hero).
 */
const PearlAtmosphere = ({ intensity = "default", mode = "fixed" }) => {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const spotRef = useRef(null);
  const strong = intensity === "strong";
  const isOverlay = mode === "overlay";

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return undefined;
    const spot = spotRef.current;
    if (!spot) return undefined;
    const fields = Array.from(rootRef.current.querySelectorAll(".pearl-orbits__field"), (element) => ({
      element,
      bounds: element.getBoundingClientRect(),
      contours: Array.from(element.querySelectorAll(".pearl-orbits__contour")),
    }));

    let raf = 0;
    let tx = window.innerWidth * 0.5;
    let ty = window.innerHeight * 0.5;
    let cx = tx;
    let cy = ty;
    let pressure = 0;
    let active = false;
    let lastTime = 0;
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      active = true;
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const reset = () => {
      active = false;
      tx = window.innerWidth * 0.5;
      ty = window.innerHeight * 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      fields.forEach((field) => { field.bounds = field.element.getBoundingClientRect(); });
      reset();
    };

    const tick = (time) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 32) : 16;
      lastTime = time;
      const easing = 1 - Math.exp(-elapsed / 140);
      pressure += ((active ? 1 : 0) - pressure) * easing;
      const dx = tx - cx;
      const dy = ty - cy;
      cx += dx * easing;
      cy += dy * easing;
      spot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      fields.forEach(({ bounds, contours }) => {
        const x = (cx - bounds.left - bounds.width / 2) / (bounds.width / 2);
        const y = (cy - bounds.top - bounds.height / 2) / (bounds.height / 2);
        const influence = Math.exp(-(x * x + y * y) * 0.55) * pressure;
        const bendX = Math.max(-1, Math.min(1, x)) * influence;
        const bendY = Math.max(-1, Math.min(1, y)) * influence;
        contours.forEach((contour, i) => {
          // Each line yields differently, so the field bends instead of sliding.
          const depth = (i + 1) / contours.length;
          const flex = Math.sin(depth * Math.PI * 0.8);
          contour.style.transform = `rotate(${i * 9 + bendX * 22 * flex}deg) skew(${bendX * 20 * flex}deg, ${bendY * 16 * flex}deg) scale(${1 + influence * 0.22 * flex}, ${1 - influence * 0.16 * flex})`;
        });
      });
      const unsettled = Math.abs(dx) + Math.abs(dy) > 0.5
        || Math.abs((active ? 1 : 0) - pressure) > 0.001;
      raf = unsettled ? requestAnimationFrame(tick) : 0;
      if (!raf) lastTime = 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      fields.forEach(({ contours }) => {
        contours.forEach((contour) => { contour.style.transform = ""; });
      });
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

      <div className={`pearl-orbits ${strong ? "pearl-orbits--strong" : ""}`}>
        {["green", "teal"].map((tone) => (
          <div key={tone} className={`pearl-orbits__field pearl-orbits__field--${tone}`}>
            <div className="pearl-orbits__rotor">
              {Array.from({ length: 12 }, (_, i) => (
                <span
                  key={i}
                  className="pearl-orbits__contour"
                  style={{ "--contour": i }}
                />
              ))}
              <span className="pearl-orbits__satellite" />
            </div>
          </div>
        ))}
      </div>

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
