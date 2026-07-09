import {
  DEFAULT_LANGUAGE,
  LANGUAGE_CODES,
  SUPPORTED_LANGUAGE_CODES,
} from "./constants.js";

const HTML_LANGUAGE_BY_CODE = Object.freeze({
  [LANGUAGE_CODES.PORTUGUESE]: "pt-PT",
  [LANGUAGE_CODES.ENGLISH]: "en",
});

export function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGE_CODES.includes(language);
}

export function getHtmlLanguage(language) {
  return (
    HTML_LANGUAGE_BY_CODE[language] ?? HTML_LANGUAGE_BY_CODE[DEFAULT_LANGUAGE]
  );
}
