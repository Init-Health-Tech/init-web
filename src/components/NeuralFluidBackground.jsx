import React from "react";

/**
 * Ambient background — fine grid + soft brand-green glows.
 * Strength and colors come from theme CSS variables so light/dark both read.
 */
const NeuralFluidBackground = ({ className = "", intensity = "full" }) => (
  <div
    className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    aria-hidden
  >
    <div className="absolute inset-0 bg-background" />
    <div className="absolute inset-0 grid-pattern-lines opacity-70" />

    <div className="glow-orb glow-orb--primary" />
    <div className="glow-orb glow-orb--secondary" />
    {intensity === "full" && <div className="glow-orb glow-orb--tertiary" />}

    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, transparent 45%, var(--vignette) 100%)",
      }}
    />
  </div>
);

export default NeuralFluidBackground;
