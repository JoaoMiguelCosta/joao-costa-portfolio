import { getTranslations } from "../../../i18n/translations/index.js";

export function getProjectsPageConfig(language) {
  const translations = getTranslations(language);

  return translations.projectsPage;
}
