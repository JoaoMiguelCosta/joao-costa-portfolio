import { useCallback, useEffect, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext.js";
import {
  SYSTEM_DARK_THEME_QUERY,
  THEME_CODES,
} from "./constants.js";
import { getSystemTheme, isSupportedTheme } from "./helpers.js";
import { getStoredTheme, storeTheme } from "./storage.js";

function getInitialTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

export default function ThemeProvider({ children }) {
  const [theme, setCurrentTheme] = useState(getInitialTheme);

  const setTheme = useCallback((nextTheme) => {
    if (!isSupportedTheme(nextTheme)) {
      return;
    }

    storeTheme(nextTheme);
    setCurrentTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((currentTheme) => {
      const nextTheme =
        currentTheme === THEME_CODES.DARK
          ? THEME_CODES.LIGHT
          : THEME_CODES.DARK;

      storeTheme(nextTheme);

      return nextTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(SYSTEM_DARK_THEME_QUERY);

    function handleSystemThemeChange(event) {
      const hasStoredPreference = Boolean(getStoredTheme());

      if (hasStoredPreference) {
        return;
      }

      setCurrentTheme(event.matches ? THEME_CODES.DARK : THEME_CODES.LIGHT);
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDarkTheme: theme === THEME_CODES.DARK,
    }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
