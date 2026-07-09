import { useCallback, useEffect, useMemo, useState } from "react";

import { LanguageContext } from "./LanguageContext.js";
import { getHtmlLanguage, isSupportedLanguage } from "./helpers.js";
import { getInitialLanguage, storeLanguage } from "./storage.js";

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
