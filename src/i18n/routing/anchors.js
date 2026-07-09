import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "../language/constants.js";

export const ANCHOR_KEYS = Object.freeze({
  START: "start",
  PROJECTS: "projects",
  ABOUT: "about",
  SKILLS: "skills",
  CONTACT: "contact",
});

// O ID real da secção inicial mantém-se "inicio" em qualquer idioma
// (ver HeroSection.jsx). O hash "start" em inglês não tem elemento
// correspondente no DOM, por isso é resolvido via hashTargetAliases.
export const hashTargetAliases = Object.freeze({
  start: "inicio",
});

const ANCHOR_IDS_BY_KEY = {
  [ANCHOR_KEYS.START]: {
    [LANGUAGE_CODES.PORTUGUESE]: "inicio",
    [LANGUAGE_CODES.ENGLISH]: "start",
  },
  [ANCHOR_KEYS.PROJECTS]: {
    [LANGUAGE_CODES.PORTUGUESE]: "projetos",
    [LANGUAGE_CODES.ENGLISH]: "projects",
  },
  [ANCHOR_KEYS.ABOUT]: {
    [LANGUAGE_CODES.PORTUGUESE]: "sobre",
    [LANGUAGE_CODES.ENGLISH]: "about",
  },
  [ANCHOR_KEYS.SKILLS]: {
    [LANGUAGE_CODES.PORTUGUESE]: "competencias",
    [LANGUAGE_CODES.ENGLISH]: "skills",
  },
  [ANCHOR_KEYS.CONTACT]: {
    [LANGUAGE_CODES.PORTUGUESE]: "contacto",
    [LANGUAGE_CODES.ENGLISH]: "contact",
  },
};

export function getAnchorId(anchorKey, language) {
  const idsByLanguage = ANCHOR_IDS_BY_KEY[anchorKey];

  return idsByLanguage[language] ?? idsByLanguage[DEFAULT_LANGUAGE];
}

export function getAnchorHref(anchorKey, language) {
  return `#${getAnchorId(anchorKey, language)}`;
}

export function getHomeAnchorHref(anchorKey, language) {
  return `/#${getAnchorId(anchorKey, language)}`;
}

export function getLocalizedHash(hash, language) {
  if (!hash) {
    return null;
  }

  const anchorId = decodeURIComponent(hash.replace(/^#/, ""));

  const anchorKey = Object.keys(ANCHOR_IDS_BY_KEY).find((key) =>
    Object.values(ANCHOR_IDS_BY_KEY[key]).includes(anchorId),
  );

  if (!anchorKey) {
    return null;
  }

  return getAnchorHref(anchorKey, language);
}
