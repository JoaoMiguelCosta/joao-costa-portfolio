import { personalData } from "../../../../data/personal.data.js";
import {
  ANCHOR_KEYS,
  ROUTE_KEYS,
  getAllRoutePaths,
  getHomeAnchorHref,
} from "../../../../i18n/routing/index.js";

function getNavigationItems(translations, pathname, language) {
  const projectsPagePaths = getAllRoutePaths(ROUTE_KEYS.PROJECTS_PAGE);
  const hasHomeNavigation = !projectsPagePaths.includes(pathname);

  if (!hasHomeNavigation) {
    return [];
  }

  return translations.header.navigationItems.map((item) => ({
    label: item.label,
    href: getHomeAnchorHref(item.anchorKey, language),
  }));
}

export function getHeaderConfig(translations, pathname, language) {
  return {
    brand: {
      name: personalData.name,
      href: getHomeAnchorHref(ANCHOR_KEYS.START, language),
      ariaLabel: translations.header.brandAriaLabel,
    },

    navigationItems: getNavigationItems(translations, pathname, language),
    languageSwitcher: translations.header.languageSwitcher,
    themeToggle: translations.header.themeToggle,
    mobileMenu: translations.header.mobileMenu,

    accessibility: {
      skipLink: translations.header.skipLink,
      navigationAriaLabel: translations.header.navigationAriaLabel,
    },
  };
}
