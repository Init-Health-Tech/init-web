import React from "react";
import { getClientLogo } from "../data/clientsData";

const ClientLogo = ({ client, size = "md", variant = "default", className = "" }) => {
  if (!client?.logo) return null;

  const canonical = getClientLogo(client.name);
  const dataClient = canonical?.id ?? (typeof client.id === "string" ? client.id : undefined);

  const sizes = {
    sm: "h-8 max-w-[120px]",
    md: "h-10 max-w-[160px]",
    lg: "h-14 max-w-[200px]",
    xl: "h-20 max-w-[280px]",
    "2xl": "h-28 max-w-[340px]",
  };

  const useFeatured = variant === "featured" || client.dimmedColor || client.brightLogo;
  const useLightBg = client.lightBg && !useFeatured;

  return (
    <div
      className={`client-logo ${useLightBg ? "client-logo--light-bg" : ""} ${useFeatured ? "client-logo--featured" : ""} ${className}`}
      data-client={dataClient}
      title={client.name}
    >
      <img
        src={client.logo}
        alt={client.name}
        className={`${sizes[size]} w-auto object-contain`}
        loading="lazy"
      />
    </div>
  );
};

export default ClientLogo;
