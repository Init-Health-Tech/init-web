import React from "react";

const StitchBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 grid-pattern-lines opacity-40" />
    <div className="orb w-96 h-96 bg-primary/8 blur-[120px] -top-32 -right-32" />
    <div className="orb w-72 h-72 bg-secondary/6 blur-[100px] top-1/2 -left-24" />
  </div>
);

export default StitchBackground;
