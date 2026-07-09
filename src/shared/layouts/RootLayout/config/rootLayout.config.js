import { personalData } from "../../../../data/personal.data.js";
import { getTranslations } from "../../../../i18n/translations/index.js";

const GITHUB_ICON = "/icons/technologies/github.svg";
const LINKEDIN_ICON = "/icons/social/linkedin.svg";

function getHeaderConfig(translations) {
  return {
    brand: {
      name: personalData.name,
      href: "/#inicio",
      ariaLabel: translations.header.brandAriaLabel,
    },

    navigationItems: translations.header.navigationItems,
    languageSwitcher: translations.header.languageSwitcher,
    themeToggle: translations.header.themeToggle,
    mobileMenu: translations.header.mobileMenu,

    accessibility: {
      skipLink: translations.header.skipLink,
      navigationAriaLabel: translations.header.navigationAriaLabel,
    },
  };
}

function getFooterConfig(translations) {
  return {
    owner: personalData.name,
    role: translations.footer.role,
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
        href: "/#inicio",
        external: false,
      },
    ],
  };
}

export function getRootLayoutConfig(language) {
  const translations = getTranslations(language);

  return {
    header: getHeaderConfig(translations),
    footer: getFooterConfig(translations),
  };
}
