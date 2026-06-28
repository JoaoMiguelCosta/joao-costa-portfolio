import { useCallback, useEffect, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext.js";
import {
  DEFAULT_THEME,
  SYSTEM_DARK_THEME_QUERY,
  THEME_CODES,
  THEME_STORAGE_KEY,
  isSupportedTheme,
} from "./theme.constants.js";

function getStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return isSupportedTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return DEFAULT_THEME;
  }

  return window.matchMedia(SYSTEM_DARK_THEME_QUERY).matches
    ? THEME_CODES.DARK
    : THEME_CODES.LIGHT;
}

function getInitialTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // A aplicação continua funcional sem acesso ao localStorage.
  }
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
