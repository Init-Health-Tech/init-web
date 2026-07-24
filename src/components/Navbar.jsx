import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { nav } from "../data/siteCopy";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const navigation = [
    { name: nav.services, href: "/services" },
    { name: nav.solutions, href: "/soluciones" },
    { name: nav.portfolio, href: "/proyectos" },
  ];

  const isActive = (href) => location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? "bg-transparent border-b border-white/5"
          : "bg-surface/80 backdrop-blur-xl border-b border-white/5"
      } ${scrolled ? "h-16" : "h-[4.5rem]"}`}
      aria-label="Navegación principal"
    >
      <div className="flex justify-between items-center px-6 md:px-10 max-w-container mx-auto h-full">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/Init-Logo-green.svg"
            alt="INIT"
            className="h-9 w-auto max-h-full object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`btn-ghost-nav nav-link-underline ${isActive(item.href) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}

          {isAuthenticated && (
            <div className="flex items-center gap-3 ml-2">
              <div className="flex items-center gap-2 bg-surface/60 px-3 py-1.5 border border-white/5 rounded-lg backdrop-blur-sm">
                <div className="w-7 h-7 bg-primary flex items-center justify-center rounded-md">
                  <PersonIcon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-xs font-medium text-on-surface">
                  {user?.first_name || user?.username}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-muted hover:text-primary p-2 transition-colors"
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
            className={`hidden sm:inline-flex btn-primary px-4 py-2 h-10 min-w-[84px] ${
              location.pathname === "/contact" ? "ring-1 ring-white/20" : ""
            }`}
          >
            {nav.contact}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 transition-colors rounded-lg"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-secondary bg-white/5"
                  : "text-muted hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-3 text-sm font-bold text-center btn-primary"
          >
            {nav.contact}
          </Link>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-3 text-sm text-muted flex items-center gap-2"
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
