import React from "react";
import ClientLogo from "./ClientLogo";
import { clientLogos } from "../data/clientsData";

/**
 * Infinite logo strip. Two identical groups + matching end padding so
 * translateX(-50%) loops without a visible jump (flex gap alone breaks that).
 *
 * Safari unloads `loading="lazy"` images inside CSS-transformed marquees as they
 * near the viewport edge — use eager here.
 */
const ClientMarquee = ({ size = "lg", className = "" }) => {
  const renderSet = (keyPrefix) =>
    clientLogos.map((client) => (
      <ClientLogo
        key={`${keyPrefix}${client.id}`}
        client={client}
        size={size}
        loading="eager"
      />
    ));

  return (
    <div className={`client-marquee overflow-hidden opacity-90 ${className}`.trim()}>
      <div className="client-marquee__track flex w-max animate-marquee items-center">
        <div className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
          {renderSet("")}
        </div>
        <div
          className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
          aria-hidden="true"
        >
          {renderSet("dup-")}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
