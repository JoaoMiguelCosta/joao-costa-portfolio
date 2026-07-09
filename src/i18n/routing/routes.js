import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "../language/constants.js";

export const ROUTE_KEYS = Object.freeze({
  PROJECTS_PAGE: "projectsPage",
});

const ROUTE_PATHS_BY_KEY = {
  [ROUTE_KEYS.PROJECTS_PAGE]: {
    [LANGUAGE_CODES.PORTUGUESE]: "/projetos",
    [LANGUAGE_CODES.ENGLISH]: "/projects",
  },
};

export function getRoutePath(routeKey, language) {
  const pathsByLanguage = ROUTE_PATHS_BY_KEY[routeKey];

  return pathsByLanguage[language] ?? pathsByLanguage[DEFAULT_LANGUAGE];
}

export function getAllRoutePaths(routeKey) {
  return Object.values(ROUTE_PATHS_BY_KEY[routeKey]);
}

export function getLocalizedPathname(pathname, language) {
  const routeKey = Object.keys(ROUTE_PATHS_BY_KEY).find((key) =>
    getAllRoutePaths(key).includes(pathname),
  );

  if (!routeKey) {
    return null;
  }

  return getRoutePath(routeKey, language);
}
