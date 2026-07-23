import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 bg-surface-container-lowest border-t border-white/5">
    {/* Accent-gradient divider — the one deliberate gold touch on this panel */}
    <div className="h-[2px] w-full" style={{ background: "var(--gradient-accent)" }} />

    <div className="py-14">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 max-w-container mx-auto gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/Init-Logo.svg" alt="INIT" className="h-9 w-9 object-contain" />
            <span className="text-2xl font-semibold text-on-surface tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              INIT
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Consultora de software. Evaluamos si podemos ayudar — y si no, te lo decimos.
          </p>
          <div className="flex items-center gap-3 mt-1 bg-white/[0.03] border border-white/10 rounded-md px-3 py-2 w-fit">
            <span className="text-xs text-on-surface-variant">Partner estratégico</span>
            <a
              href="https://konnex.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              Konnex
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-3">
            <h5 className="text-primary font-bold text-xs uppercase tracking-widest">Navegación</h5>
            <Link to="/" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Inicio</Link>
            <Link to="/team" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Equipo</Link>
            <Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Servicios</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-primary font-bold text-xs uppercase tracking-widest">Empresa</h5>
            <Link to="/soluciones" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Soluciones</Link>
            <Link to="/portfolio" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Proyectos</Link>
            <Link to="/contact" className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4">Contacto</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-primary font-bold text-xs uppercase tracking-widest">Contacto</h5>
            <p className="text-on-surface-variant text-sm">Ciudad López Mateos, Edo. Méx.</p>
            <a href="mailto:support@init.com.mx" className="text-on-surface-variant text-sm hover:text-primary transition-colors">support@init.com.mx</a>
            <a href="tel:+525547617977" className="text-on-surface-variant text-sm hover:text-primary transition-colors">+52 55 4761 7977</a>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto px-6 md:px-20 mt-12 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-on-surface-variant text-sm">Copyright 2024–2026 INIT</p>
      </div>
    </div>
  </footer>
);

export default Footer;
