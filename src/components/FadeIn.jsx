import React from "react";
import Reveal from "./Reveal";

/**
 * Backward-compatible mount reveal. New code should prefer <Reveal />.
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  as = "div",
  ...rest
}) => (
  <Reveal
    delay={delay}
    duration={duration}
    y={y}
    className={className}
    as={as}
    {...rest}
  >
    {children}
  </Reveal>
);

export default FadeIn;
