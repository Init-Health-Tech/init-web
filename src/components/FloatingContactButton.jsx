import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleOutline as ChatIcon } from "@mui/icons-material";
import { useLanguage } from "../i18n/LanguageContext";

const FloatingContactButton = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const isContactPage = location.pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, delay: 1.2 }}
          className="fixed z-40 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-8 md:right-8"
        >
          <Link
            to="/contact"
            aria-label={t("common.canWeHelp")}
            className="btn-secondary bg-surface/95 backdrop-blur-md relative flex items-center gap-2 min-h-11 px-4 py-3 md:px-5 md:py-3.5 shadow-lg shadow-[0_8px_24px_rgba(6,45,85,0.45)]"
          >
            <ChatIcon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
            <span className="hidden sm:inline text-[13px]">{t("common.canWeHelp")}</span>
            <span className="sm:hidden text-[13px]">{t("footer.contactLink")}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
