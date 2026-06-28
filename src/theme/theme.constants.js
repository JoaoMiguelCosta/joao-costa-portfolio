export const THEME_CODES = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

export const DEFAULT_THEME = THEME_CODES.LIGHT;

export const THEME_STORAGE_KEY = "portfolio-theme";

export const SYSTEM_DARK_THEME_QUERY = "(prefers-color-scheme: dark)";

export const SUPPORTED_THEME_CODES = Object.freeze(Object.values(THEME_CODES));

export function isSupportedTheme(theme) {
  return SUPPORTED_THEME_CODES.includes(theme);
}
