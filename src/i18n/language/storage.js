import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from "./constants.js";
import { isSupportedLanguage } from "./helpers.js";

function getStoredLanguage() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

function getBrowserLanguage() {
  if (typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguage = navigator.language.toLowerCase().split("-")[0];

  return isSupportedLanguage(browserLanguage)
    ? browserLanguage
    : DEFAULT_LANGUAGE;
}

export function getInitialLanguage() {
  return getStoredLanguage() ?? getBrowserLanguage();
}

export function storeLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // A aplicação continua funcional quando o armazenamento está indisponível.
  }
}
