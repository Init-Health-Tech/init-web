import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { nav } from '../data/siteCopy';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Equipo', href: '/team' },
    { name: nav.services, href: '/services' },
    { name: nav.solutions, href: '/soluciones' },
    { name: nav.portfolio, href: '/portfolio' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'h-16' : 'h-20'
      }`}
      aria-label="Navegación principal"
    >
      <div className="flex justify-between items-center px-6 md:px-20 max-w-container mx-auto h-full">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="exec-frame flex h-9 w-9 items-center justify-center p-1">
            <img src="/Init-Logo.svg" alt="INIT" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:block text-lg font-semibold text-primary tracking-tight">INIT</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`btn-ghost-nav nav-link-underline px-1 py-2 ${
                isActive(item.href) ? 'active' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}

          {isAuthenticated && (
            <div className="flex items-center gap-3 ml-2">
              <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 border border-white/10 exec-chamfer">
                <div className="w-7 h-7 bg-primary-container flex items-center justify-center exec-chamfer">
                  <PersonIcon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-on-surface">
                  {user?.first_name || user?.username}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-on-surface-variant hover:text-primary p-2 transition-colors"
                aria-label="Cerrar sesión"
              >
                <LogoutIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden sm:inline-flex btn-primary px-5 py-2 ${
              location.pathname === '/contact' ? 'border-primary/60' : ''
            }`}
          >
            {nav.contact}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-on-surface p-2 hover:bg-white/5 transition-colors exec-chamfer"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-3 text-sm font-semibold uppercase tracking-wider transition-colors exec-chamfer ${
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
            className="block px-3 py-3 text-sm font-semibold uppercase tracking-wider text-primary bg-primary-container/20 exec-chamfer"
          >
            {nav.contact}
          </Link>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-3 text-sm text-on-surface-variant flex items-center gap-2"
            >
              <LogoutIcon className="h-4 w-4" /> Cerrar Sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
