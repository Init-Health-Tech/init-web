import React from "react";
import { Link } from "react-router-dom";
import { TAGLINE, nav, partner } from "../data/siteCopy";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="relative z-10 bg-surface-container-lowest border-t border-white/5">
    <div className="max-w-container mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-5 max-w-sm">
          <img src="/Init-Logo-green.svg" alt="INIT" className="h-8 w-auto self-start" />
          <p className="text-secondary text-sm font-display tracking-tight">{TAGLINE}</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Firma de arquitectura tecnológica. Sistemas empresariales, ERP & Operaciones,
            INIT Logistics e inteligencia aplicada.
          </p>
          <p className="text-faint text-sm leading-relaxed">
            {partner.label}:{" "}
            <a
              href="https://konnex.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-green-300 transition-colors"
            >
              Konnex
            </a>
          </p>
        </div>

        {/* Nav columns */}
        <FooterCol title="Explorar">
          <FooterLink to="/services">{nav.services}</FooterLink>
          <FooterLink to="/soluciones">{nav.solutions}</FooterLink>
          <FooterLink to="/proyectos">{nav.portfolio}</FooterLink>
          <FooterLink to="/contact">{nav.contact}</FooterLink>
        </FooterCol>

        <FooterCol title="Contacto">
          <a
            href="mailto:support@init.com.mx"
            className="text-on-surface-variant text-sm hover:text-secondary transition-colors"
          >
            support@init.com.mx
          </a>
          <a
            href="tel:+525547617977"
            className="text-on-surface-variant text-sm hover:text-secondary transition-colors"
          >
            +52 55 4761 7977
          </a>
        </FooterCol>
      </div>

      <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="text-faint text-sm">© {year} INIT. Todos los derechos reservados.</p>
        <p className="text-faint text-sm">México · LATAM</p>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, children }) => (
  <div className="flex flex-col gap-3.5">
    <h5 className="text-xs uppercase tracking-[0.16em] text-faint font-display mb-1">{title}</h5>
    {children}
  </div>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-on-surface-variant text-sm hover:text-secondary transition-colors w-fit"
  >
    {children}
  </Link>
);

export default Footer;
