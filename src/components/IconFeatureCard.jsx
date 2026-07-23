import React from "react";
import FadeIn from "./FadeIn";

/**
 * Icon + title + short text card. Reused by the "why choose us" / benefits
 * grids on Home, Services, Solutions, etc. so each page doesn't redefine
 * the same markup with slightly different classes.
 */
const IconFeatureCard = ({ icon: Icon, title, text, delay = 0, className = "benefit-card" }) => (
  <FadeIn delay={delay} y={20} className={className}>
    {Icon && <Icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />}
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-on-surface-variant text-sm">{text}</p>
  </FadeIn>
);

export default IconFeatureCard;
