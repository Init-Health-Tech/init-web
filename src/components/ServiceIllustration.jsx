import React from "react";

const ILLUSTRATIONS = {
  custom: {
    src: "/servicios/servicio-software-a-medida.jpg",
    alt: "Ilustración: software a medida",
  },
  digital: {
    src: "/servicios/servicio-digitalizacion.jpg",
    alt: "Ilustración: digitalización",
  },
  integration: {
    src: "/servicios/servicio-sistemas-integracion.jpg",
    alt: "Ilustración: sistemas e integración",
  },
};

/**
 * Service category illustrations — brand flat art, no photos / no people.
 */
const ServiceIllustration = ({ kind, title }) => {
  const art = ILLUSTRATIONS[kind] || ILLUSTRATIONS.custom;

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-exec)] border border-on-surface/10 aspect-[4/3] bg-background">
      <img
        src={art.src}
        alt={title || art.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ServiceIllustration;
