import React from "react";

/**
 * Accessible "skip to content" link. Hidden visually until it receives
 * keyboard focus, so keyboard/screen-reader users can bypass the navbar
 * and jump straight to the main content of the page.
 */
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:exec-chamfer focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wide"
  >
    Saltar al contenido principal
  </a>
);

export default SkipLink;
