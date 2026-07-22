import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send as SendIcon } from "@mui/icons-material";

const FloatingContactButton = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isContactPage = location.pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40"
        >
          <Link
            to="/contact"
            aria-label="Ir al formulario de contacto"
            className="btn-primary relative group flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 shadow-lg shadow-black/40"
          >
            {!prefersReducedMotion && (
              <span className="absolute inset-0 -z-10 animate-ping-slow bg-primary/30 exec-chamfer" aria-hidden />
            )}
            <SendIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden sm:inline">Cotiza tu proyecto</span>
            <span className="sm:hidden">Contacto</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
