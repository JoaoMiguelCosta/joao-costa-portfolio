import { personalData } from "../../../data/personal.data.js";
import { LANGUAGE_CODES } from "../../../i18n/language/constants.js";
import { ANCHOR_KEYS, getAnchorId } from "../../../i18n/routing/index.js";

const GITHUB_ICON = "/icons/technologies/github.svg";
const LINKEDIN_ICON = "/icons/social/linkedin.svg";
const PDF_ICON = "/icons/documents/pdf.svg";

function getActiveCvLink(translations, language) {
  const isPortuguese = language === LANGUAGE_CODES.PORTUGUESE;

  return isPortuguese
    ? {
        id: "cv-pt",
        label: translations.contact.documents.cvPortugueseLabel,
        ariaLabel: translations.contact.documents.cvPortugueseAriaLabel,
        href: personalData.cv.portuguese,
        download: "joao-costa-cv-pt.pdf",
        icon: PDF_ICON,
      }
    : {
        id: "cv-en",
        label: translations.contact.documents.cvEnglishLabel,
        ariaLabel: translations.contact.documents.cvEnglishAriaLabel,
        href: personalData.cv.english,
        download: "joao-costa-cv-en.pdf",
        icon: PDF_ICON,
      };
}

function getCertificateLink(translations) {
  const editCertificate = personalData.certificates.editFullStackBootcamp;

  return {
    id: "certificate",
    label: translations.about.education.certificate.label,
    ariaLabel: translations.about.education.certificate.ariaLabel,
    href: editCertificate.href,
    download: "joao-costa-certificado-full-stack.pdf",
    icon: PDF_ICON,
  };
}

export function getContactConfig(translations, language) {
  const documentLinks = [
    getActiveCvLink(translations, language),
    getCertificateLink(translations),
  ].filter((link) => Boolean(link.href));

  return {
    sectionId: getAnchorId(ANCHOR_KEYS.CONTACT, language),

    eyebrow: translations.contact.eyebrow,
    title: translations.contact.title,
    description: translations.contact.description,
    availability: translations.contact.availability,
    detailsAriaLabel: translations.contact.detailsAriaLabel,

    email: {
      label: translations.contact.emailLabel,
      actionLabel: translations.contact.emailActionLabel,
      value: personalData.email,
      href: `mailto:${personalData.email}`,
    },

    details: [
      {
        id: "location",
        label: translations.contact.locationLabel,
        value: personalData.location,
      },
      {
        id: "availability",
        label: translations.contact.availabilityLabel,
        value: translations.contact.availabilityValue,
      },
    ],

    documents: {
      title: translations.contact.documents.title,
      links: documentLinks,
    },

    profiles: {
      title: translations.contact.profiles.title,
      links: [
        {
          id: "github",
          label: translations.contact.profiles.githubLabel,
          ariaLabel: translations.contact.profiles.githubAriaLabel,
          href: personalData.socialLinks.github,
          icon: GITHUB_ICON,
        },
        {
          id: "linkedin",
          label: translations.contact.profiles.linkedinLabel,
          ariaLabel: translations.contact.profiles.linkedinAriaLabel,
          href: personalData.socialLinks.linkedin,
          icon: LINKEDIN_ICON,
        },
      ],
    },
  };
}
