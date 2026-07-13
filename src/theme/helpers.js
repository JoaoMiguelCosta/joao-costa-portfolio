import { SUPPORTED_THEME_CODES } from "./constants.js";

export function isSupportedTheme(theme) {
  return SUPPORTED_THEME_CODES.includes(theme);
}
