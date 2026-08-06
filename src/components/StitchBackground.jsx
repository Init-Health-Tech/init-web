import React from "react";

/** Inner-page ambient grid — pearl atmosphere lives on PageVideoBackground */
const StitchBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden" aria-hidden>
    <div className="absolute inset-0 grid-pattern-lines opacity-20" />
  </div>
);

export default StitchBackground;
