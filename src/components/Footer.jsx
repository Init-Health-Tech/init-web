import React from "react";
import { Link } from "react-router-dom";
import { TAGLINE, nav, partner } from "../data/siteCopy";

const Footer = () => (
  <footer className="relative z-10 bg-surface-container-lowest py-12 border-t border-white/5">
    <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 max-w-container mx-auto gap-10">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-semibold text-primary tracking-tight">INIT</div>
        <p className="text-on-surface-variant max-w-xs text-sm italic">{TAGLINE}</p>
        <p className="text-on-surface-variant max-w-xs text-sm">
          Firma global de arquitectura tecnológica. Sistemas empresariales, ERP & Operaciones, INIT Logistics e inteligencia aplicada.
        </p>
        <p className="text-on-surface-variant text-sm">
          {partner.label}:{" "}
          <a
            href="https://konnex.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            Konnex
          </a>
          {" "}— {partner.description}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto] gap-x-12 gap-y-10 shrink-0">
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-bold text-sm">Navegación</h5>
          <Link to="/" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">Inicio</Link>
          <Link to="/team" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">Equipo</Link>
          <Link to="/services" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">{nav.services}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-bold text-sm">Empresa</h5>
          <Link to="/soluciones" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">{nav.solutions}</Link>
          <Link to="/portfolio" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">{nav.portfolio}</Link>
          <Link to="/contact" className="text-on-surface-variant text-sm hover:text-secondary transition-colors hover:underline underline-offset-4">{nav.contact}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-bold text-sm">Contacto</h5>
          <a href="mailto:support@init.com.mx" className="text-on-surface-variant text-sm hover:text-secondary transition-colors md:whitespace-nowrap">support@init.com.mx</a>
          <a href="tel:+525547617977" className="text-on-surface-variant text-sm hover:text-secondary transition-colors md:whitespace-nowrap">+52 55 4761 7977</a>
        </div>
      </div>
    </div>
    <div className="max-w-container mx-auto px-6 md:px-20 mt-12 pt-8 border-t border-white/5 text-center md:text-left">
      <p className="text-on-surface-variant text-sm">Copyright 2024–2026 INIT</p>
    </div>
  </footer>
);

export default Footer;
