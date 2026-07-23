import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SkipLink = () => {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:exec-chamfer focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wide"
    >
      {t("common.skipLink")}
    </a>
  );
};

export default SkipLink;
