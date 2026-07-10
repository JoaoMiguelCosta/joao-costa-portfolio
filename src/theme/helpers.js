import {
  DEFAULT_THEME,
  SUPPORTED_THEME_CODES,
  SYSTEM_DARK_THEME_QUERY,
  THEME_CODES,
} from "./constants.js";

export function isSupportedTheme(theme) {
  return SUPPORTED_THEME_CODES.includes(theme);
}

export function getSystemTheme() {
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
