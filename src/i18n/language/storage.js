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

export function getInitialLanguage() {
  return getStoredLanguage() ?? DEFAULT_LANGUAGE;
}

export function storeLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // A aplicação continua funcional quando o armazenamento está indisponível.
  }
}
