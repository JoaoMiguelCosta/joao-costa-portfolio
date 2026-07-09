import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "../../i18n/language.constants.js";
import { ROUTE_KEYS, getAllRoutePaths } from "../../i18n/routes.js";

const PAGE_TITLES_BY_LANGUAGE = {
  [LANGUAGE_CODES.PORTUGUESE]: {
    home: "João Costa | Programador Web Full Stack",
    projects: "Projetos | João Costa",
    notFound: "Página não encontrada | João Costa",
    error: "Erro | João Costa",
  },
  [LANGUAGE_CODES.ENGLISH]: {
    home: "João Costa | Full Stack Web Developer",
    projects: "Projects | João Costa",
    notFound: "Page not found | João Costa",
    error: "Error | João Costa",
  },
};

export function getPageTitle(pageKey, language) {
  const titles =
    PAGE_TITLES_BY_LANGUAGE[language] ?? PAGE_TITLES_BY_LANGUAGE[DEFAULT_LANGUAGE];

  return titles[pageKey] ?? titles.home;
}

export function getPageKeyFromPathname(pathname) {
  if (pathname === "/") {
    return "home";
  }

  if (getAllRoutePaths(ROUTE_KEYS.PROJECTS_PAGE).includes(pathname)) {
    return "projects";
  }

  return "notFound";
}
