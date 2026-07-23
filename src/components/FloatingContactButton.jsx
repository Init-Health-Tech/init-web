import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleOutline as ChatIcon } from "@mui/icons-material";

const FloatingContactButton = () => {
  const location = useLocation();
  const isContactPage = location.pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, delay: 1.2 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40"
        >
          <Link
            to="/contact"
            aria-label="Evaluar si podemos ayudar"
            className="btn-secondary bg-surface/95 backdrop-blur-md relative flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 shadow-lg shadow-black/30"
          >
            <ChatIcon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
            <span className="hidden sm:inline text-[13px]">¿Podemos ayudar?</span>
            <span className="sm:hidden text-[13px]">Contacto</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
