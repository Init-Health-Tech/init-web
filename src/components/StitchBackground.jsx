import React from "react";
import NeuralFluidBackground from "./NeuralFluidBackground";

const StitchBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <NeuralFluidBackground className="opacity-60" />
    <div className="absolute inset-0 bg-background/40" />
  </div>
);

export default StitchBackground;
