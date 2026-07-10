import { personalData } from "../../../data/personal.data.js";
import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "../../../i18n/language/constants.js";

const PAGE_TITLES_BY_LANGUAGE = {
  [LANGUAGE_CODES.PORTUGUESE]: {
    home: `${personalData.name} | ${personalData.role.portuguese}`,
    projects: "Projetos | João Costa",
    notFound: "Página não encontrada | João Costa",
    error: "Erro | João Costa",
  },
  [LANGUAGE_CODES.ENGLISH]: {
    home: `${personalData.name} | ${personalData.role.english}`,
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
