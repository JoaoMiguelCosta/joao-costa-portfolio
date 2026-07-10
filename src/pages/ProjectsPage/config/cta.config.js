import {
  ANCHOR_KEYS,
  getHomeAnchorHref,
} from "../../../i18n/routing/index.js";

export function getCtaConfig(translations, language) {
  const cta = translations.projectsPage.cta;

  return {
    title: cta.title,
    description: cta.description,
    actions: [
      {
        id: "contact",
        label: cta.contactLabel,
        href: getHomeAnchorHref(ANCHOR_KEYS.CONTACT, language),
      },
      {
        id: "home",
        label: cta.homeLabel,
        href: getHomeAnchorHref(ANCHOR_KEYS.START, language),
      },
    ],
  };
}
