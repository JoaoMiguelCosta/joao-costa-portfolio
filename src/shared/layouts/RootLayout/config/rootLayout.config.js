import { personalData } from "../../../../data/personal.data.js";
import { LANGUAGE_CODES } from "../../../../i18n/language.constants.js";
import {
  ANCHOR_KEYS,
  ROUTE_KEYS,
  getAllRoutePaths,
  getHomeAnchorHref,
} from "../../../../i18n/routing/index.js";
import { getTranslations } from "../../../../i18n/translations/index.js";

const GITHUB_ICON = "/icons/technologies/github.svg";
const LINKEDIN_ICON = "/icons/social/linkedin.svg";

function getRoleLabel(language) {
  const isPortuguese = language === LANGUAGE_CODES.PORTUGUESE;

  return isPortuguese ? personalData.role.portuguese : personalData.role.english;
}

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

function getHeaderConfig(translations, pathname, language) {
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

function getFooterConfig(translations, language) {
  return {
    owner: personalData.name,
    ownerHref: getHomeAnchorHref(ANCHOR_KEYS.START, language),
    role: getRoleLabel(language),
    rights: translations.footer.rights,
    navigationAriaLabel: translations.footer.navigationAriaLabel,
    links: [
      {
        id: "github",
        label: translations.footer.githubLabel,
        ariaLabel: translations.footer.githubAriaLabel,
        href: personalData.socialLinks.github,
        icon: GITHUB_ICON,
        external: true,
      },
      {
        id: "linkedin",
        label: translations.footer.linkedinLabel,
        ariaLabel: translations.footer.linkedinAriaLabel,
        href: personalData.socialLinks.linkedin,
        icon: LINKEDIN_ICON,
        external: true,
      },
      {
        id: "back-to-top",
        label: translations.footer.backToTopLabel,
        ariaLabel: translations.footer.backToTopAriaLabel,
        href: "#main-content",
        external: false,
      },
    ],
  };
}

export function getRootLayoutConfig(language, pathname) {
  const translations = getTranslations(language);

  return {
    header: getHeaderConfig(translations, pathname, language),
    footer: getFooterConfig(translations, language),
  };
}
