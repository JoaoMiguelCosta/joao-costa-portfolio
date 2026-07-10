import { getTranslations } from "../../../i18n/translations/index.js";

import { getAboutConfig } from "./about.config.js";
import { getContactConfig } from "./contact.config.js";
import { getHeroConfig } from "./hero.config.js";
import { getProjectsConfig } from "./projects.config.js";
import { getSkillsConfig } from "./skills.config.js";

export function getHomePageConfig(language) {
  const translations = getTranslations(language);

  return {
    hero: getHeroConfig(translations, language),
    projects: getProjectsConfig(translations, language),
    about: getAboutConfig(translations, language),
    skills: getSkillsConfig(translations, language),
    contact: getContactConfig(translations, language),
  };
}
