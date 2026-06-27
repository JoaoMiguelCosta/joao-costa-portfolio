export const LANGUAGE_CODES = Object.freeze({
  PORTUGUESE: "pt",
  ENGLISH: "en",
});

export const DEFAULT_LANGUAGE = LANGUAGE_CODES.PORTUGUESE;

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const SUPPORTED_LANGUAGE_CODES = Object.freeze(
  Object.values(LANGUAGE_CODES),
);

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
