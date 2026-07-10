import { THEME_STORAGE_KEY } from "./constants.js";
import { isSupportedTheme } from "./helpers.js";

export function getStoredTheme() {
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

export function storeTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // A aplicação continua funcional sem acesso ao localStorage.
  }
}
