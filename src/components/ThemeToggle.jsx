import React, { useEffect, useState } from "react";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

const STORAGE_KEY = "init-theme";

function getInitialDark() {
  if (typeof document === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return document.documentElement.classList.contains("dark");
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {isDark ? (
        <LightModeIcon sx={{ fontSize: 16 }} />
      ) : (
        <DarkModeIcon sx={{ fontSize: 16 }} />
      )}
      <span>{isDark ? "Modo claro" : "Modo oscuro"}</span>
    </button>
  );
};

export default ThemeToggle;
