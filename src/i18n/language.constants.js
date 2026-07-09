export const LANGUAGE_CODES = Object.freeze({
  PORTUGUESE: "pt",
  ENGLISH: "en",
});

export const DEFAULT_LANGUAGE = LANGUAGE_CODES.PORTUGUESE;

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const SUPPORTED_LANGUAGE_CODES = Object.freeze(
  Object.values(LANGUAGE_CODES),
);
