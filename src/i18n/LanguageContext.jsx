import React, { createContext, useContext, useEffect, useState } from "react";
import { messages } from "./messages";

const STORAGE_KEY = "init-lang";
const LanguageContext = createContext(null);

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function detectInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  // Default is always Spanish; EN only after explicit user choice.
  return "es";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() =>
    typeof window === "undefined" ? "es" : detectInitialLang()
  );

  const setLang = (next) => {
    if (next !== "es" && next !== "en") return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "es-MX";
  }, [lang]);

  const t = (path, fallback = "") => {
    const value = getByPath(messages[lang], path);
    if (value == null) {
      const esValue = getByPath(messages.es, path);
      return esValue ?? fallback ?? path;
    }
    return value;
  };

  /** Pick Spanish or English string/array from bilingual field or plain value. */
  const L = (field) => {
    if (field == null) return field;
    if (typeof field === "object" && !Array.isArray(field) && ("es" in field || "en" in field)) {
      return field[lang] ?? field.es ?? field.en;
    }
    return field;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, L }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
