import { personalData } from "../../../../data/personal.data.js";
import { LANGUAGE_CODES } from "../../../../i18n/language/constants.js";
import {
  ANCHOR_KEYS,
  getHomeAnchorHref,
} from "../../../../i18n/routing/index.js";

const GITHUB_ICON = "/icons/technologies/github.svg";
const LINKEDIN_ICON = "/icons/social/linkedin.svg";

function getRoleLabel(language) {
  const isPortuguese = language === LANGUAGE_CODES.PORTUGUESE;

  return isPortuguese ? personalData.role.portuguese : personalData.role.english;
}

export function getFooterConfig(translations, language) {
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
