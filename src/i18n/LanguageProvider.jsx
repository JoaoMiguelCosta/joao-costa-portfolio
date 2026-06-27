import { useCallback, useEffect, useMemo, useState } from "react";

import { LanguageContext } from "./LanguageContext.js";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getHtmlLanguage,
  isSupportedLanguage,
} from "./language.constants.js";

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

function getInitialLanguage() {
  return getStoredLanguage() ?? getBrowserLanguage();
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // A aplicação continua funcional quando o armazenamento está indisponível.
  }
}

export default function LanguageProvider({ children }) {
  const [language, setCurrentLanguage] = useState(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    setCurrentLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = getHtmlLanguage(language);
    storeLanguage(language);
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
