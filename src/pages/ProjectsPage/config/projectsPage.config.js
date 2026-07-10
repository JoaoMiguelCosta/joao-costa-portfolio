import { getTranslations } from "../../../i18n/translations/index.js";

import { getCaseStudies } from "./caseStudies.config.js";
import { getCtaConfig } from "./cta.config.js";
import { getNavigation } from "./navigation.config.js";

export function getProjectsPageConfig(language) {
  const translations = getTranslations(language);
  const projectsPage = translations.projectsPage;

  return {
    hero: projectsPage.hero,
    intro: projectsPage.intro,
    navigation: getNavigation(translations),
    caseStudies: getCaseStudies(translations),
    cta: getCtaConfig(translations, language),
  };
}
