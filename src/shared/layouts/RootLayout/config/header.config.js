import { personalData } from "../../../../data/personal.data.js";
import {
  ANCHOR_KEYS,
  getHomeAnchorHref,
} from "../../../../i18n/routing/index.js";

function getNavigationItems(translations, language) {
  return translations.header.navigationItems.map((item) => ({
    label: item.label,
    href: getHomeAnchorHref(item.anchorKey, language),
  }));
}

export function getHeaderConfig(translations, language) {
  return {
    brand: {
      name: personalData.name,
      href: getHomeAnchorHref(ANCHOR_KEYS.START, language),
      ariaLabel: translations.header.brandAriaLabel,
    },

    navigationItems: getNavigationItems(translations, language),
    languageSwitcher: translations.header.languageSwitcher,
    themeToggle: translations.header.themeToggle,
    mobileMenu: translations.header.mobileMenu,

    accessibility: {
      skipLink: translations.header.skipLink,
      navigationAriaLabel: translations.header.navigationAriaLabel,
    },
  };
}
