import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.team'), href: '/team' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.solutions'), href: '/soluciones' },
    { name: t('nav.portfolio'), href: '/portfolio' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const LangToggle = ({ className = '' }) => (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {(['es', 'en']).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`min-h-9 min-w-9 px-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-full ${
            lang === code
              ? 'bg-primary-container text-init-light'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
      }`}
      aria-label={t('nav.aria')}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-container mx-auto h-full gap-2">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img
            src="/Init-Logo-green.svg"
            alt="INIT"
            title="Brilliant minds building the future"
            className="h-8 sm:h-10 w-auto max-h-full object-contain"
          />
          <span className="sr-only">INIT</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`btn-ghost-nav nav-link-underline px-1 py-2 whitespace-nowrap ${
                isActive(item.href) ? 'active' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle className="hidden sm:inline-flex" />
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center justify-center btn-primary !py-2 px-4 lg:px-5 min-h-9 h-9 leading-none whitespace-nowrap text-[12px] ${
              location.pathname === '/contact' ? 'border-primary/60' : ''
            }`}
          >
            {t('nav.contactCta')}
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-on-surface min-h-11 min-w-11 p-2.5 hover:bg-white/5 transition-colors exec-chamfer"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-surface/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block px-3 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors exec-chamfer min-h-11 ${
                isActive(item.href)
                  ? 'text-primary bg-white/5'
                  : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary bg-primary-container/20 exec-chamfer min-h-11"
          >
            {t('nav.contactCta')}
          </Link>
          <div className="pt-3 px-1 flex items-center justify-between sm:hidden">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider">
              Language
            </span>
            <LangToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
