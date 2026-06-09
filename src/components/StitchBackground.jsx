import React, { useEffect, useState } from "react";

const StitchBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 grid-pattern-lines opacity-60 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />
      <div className="orb w-96 h-96 bg-primary/10 blur-[100px] -top-32 -right-32" style={{ animationDelay: "0s" }} />
      <div className="orb w-72 h-72 bg-secondary/10 blur-[80px] top-1/2 -left-24" style={{ animationDelay: "2s" }} />
      <div className="orb w-64 h-64 bg-primary-container/15 blur-[90px] bottom-0 right-1/4" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default StitchBackground;
