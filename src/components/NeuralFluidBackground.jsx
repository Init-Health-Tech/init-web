import React from "react";

/**
 * Ambient background — sober, editorial dark surface.
 * Replaces the previous WebGL "neural fluid + scanlines" shader with a
 * restrained composition of a fine grid and soft green glows, in line with
 * enterprise firms (BCG X / Palantir). Pure CSS, GPU-cheap, and it degrades
 * gracefully under prefers-reduced-motion (the drift animation is disabled
 * globally via the media query in index.css).
 */
const NeuralFluidBackground = ({ className = "" }) => (
  <div
    className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    aria-hidden
  >
    {/* base wash */}
    <div className="absolute inset-0 bg-background" />

    {/* fine technical grid */}
    <div className="absolute inset-0 grid-pattern-lines opacity-70" />

    {/* soft green glows */}
    <div
      className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[110vw] h-[70vh] rounded-full blur-3xl opacity-70"
      style={{
        background:
          "radial-gradient(closest-side, rgba(46,106,58,0.28), transparent 72%)",
        animation: "drift 18s ease-in-out infinite",
      }}
    />
    <div
      className="absolute top-1/3 right-0 w-[45vw] h-[45vh] rounded-full blur-3xl opacity-50"
      style={{
        background:
          "radial-gradient(closest-side, rgba(46,106,58,0.18), transparent 70%)",
        animation: "drift 24s ease-in-out infinite reverse",
      }}
    />

    {/* vignette to seat content */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, transparent 55%, rgba(7,8,11,0.85) 100%)",
      }}
    />
  </div>
);

export default NeuralFluidBackground;
