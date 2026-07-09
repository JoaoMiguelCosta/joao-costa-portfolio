import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "../language/constants.js";

import englishTranslations from "./en/index.js";
import portugueseTranslations from "./pt/index.js";

const translationsByLanguage = Object.freeze({
  [LANGUAGE_CODES.PORTUGUESE]: portugueseTranslations,
  [LANGUAGE_CODES.ENGLISH]: englishTranslations,
});

export function getTranslations(language) {
  return (
    translationsByLanguage[language] ?? translationsByLanguage[DEFAULT_LANGUAGE]
  );
}
