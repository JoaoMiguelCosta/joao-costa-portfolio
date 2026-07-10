import { personalData } from "../../../data/personal.data.js";
import { LANGUAGE_CODES } from "../../../i18n/language/constants.js";
import { getAnchorHref } from "../../../i18n/routing/index.js";

export function getHeroConfig(translations, language) {
  const hero = translations.hero;
  const isPortuguese = language === LANGUAGE_CODES.PORTUGUESE;
  const role = isPortuguese ? personalData.role.portuguese : personalData.role.english;

  return {
    ...hero,
    eyebrow: `${personalData.name} · ${role}`,
    actions: hero.actions.map((action) => ({
      label: action.label,
      href: getAnchorHref(action.anchorKey, language),
      variant: action.variant,
    })),
  };
}
