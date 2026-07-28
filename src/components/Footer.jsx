import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/brandData";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 bg-surface-container-lowest border-t border-on-surface/10">
      <div className="h-[2px] w-full" style={{ background: "var(--gradient-accent)" }} />

      <div className="py-10 sm:py-14">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          {/* Brand */}
          <div className="flex flex-col gap-4 min-w-0 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src="/Init-Logo-black.svg"
                alt={BRAND.name}
                className="h-9 sm:h-10 w-auto object-contain shrink-0"
              />
              <span
                className="text-2xl font-semibold text-on-surface tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {BRAND.name}
              </span>
            </div>
            <p className="text-secondary text-sm font-medium tracking-wide">{BRAND.slogan}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{t("footer.blurb")}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1 bg-surface-container border border-on-surface/10 rounded-md px-3 py-2 w-fit">
              <span className="text-xs text-on-surface-variant">{t("footer.partner")}</span>
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

          {/* Links + contact */}
          <div className="flex flex-col gap-8 min-w-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 min-w-0">
              <div className="flex flex-col gap-3 min-w-0">
                <h5 className="text-primary font-bold text-xs uppercase tracking-widest">
                  {t("footer.nav")}
                </h5>
                <Link
                  to="/"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4 py-0.5"
                >
                  {t("footer.home")}
                </Link>
                {/* Equipo oculto de momento
                <Link to="/team" className="...">{t("footer.team")}</Link>
                */}
                <Link
                  to="/services"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4 py-0.5"
                >
                  {t("footer.services")}
                </Link>
              </div>

              <div className="flex flex-col gap-3 min-w-0">
                <h5 className="text-primary font-bold text-xs uppercase tracking-widest">
                  {t("footer.company")}
                </h5>
                <Link
                  to="/soluciones"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4 py-0.5"
                >
                  {t("footer.solutions")}
                </Link>
                <Link
                  to="/portfolio"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4 py-0.5"
                >
                  {t("footer.projects")}
                </Link>
                <Link
                  to="/contact"
                  className="text-on-surface-variant text-sm hover:text-primary transition-colors hover:underline underline-offset-4 py-0.5"
                >
                  {t("footer.contactLink")}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 min-w-0 max-w-full border-t border-on-surface/10 pt-6">
              <h5 className="text-primary font-bold text-xs uppercase tracking-widest">
                {t("footer.contact")}
              </h5>
              <p className="text-on-surface-variant text-sm leading-relaxed text-pretty">
                {BRAND.location.includes(",") ? (
                  <>
                    {BRAND.location.split(",")[0].trim()}
                    <br />
                    {BRAND.location.split(",").slice(1).join(",").trim()}
                  </>
                ) : (
                  BRAND.location
                )}
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-on-surface-variant text-sm hover:text-primary transition-colors inline-block max-w-full overflow-visible"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              >
                {BRAND.email}
              </a>
              <a
                href={BRAND.phoneHref}
                className="text-on-surface-variant text-sm hover:text-primary transition-colors"
              >
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-10 sm:mt-12 pt-8 border-t border-on-surface/10 text-center md:text-left">
          <p className="text-on-surface-variant text-sm">
            Copyright 2024–2026 {BRAND.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
