import { useContext } from "react";

import { LanguageContext } from "./LanguageContext.js";

export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage deve ser utilizado dentro de LanguageProvider.",
    );
  }

  return context;
}
