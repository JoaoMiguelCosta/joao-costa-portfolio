import { useCallback, useEffect, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext.js";
import { DEFAULT_THEME, THEME_CODES } from "./constants.js";
import { isSupportedTheme } from "./helpers.js";
import { getStoredTheme, storeTheme } from "./storage.js";

function getInitialTheme() {
  return getStoredTheme() ?? DEFAULT_THEME;
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
