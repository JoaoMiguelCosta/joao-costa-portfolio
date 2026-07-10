import { personalData } from "../../../data/personal.data.js";
import { ANCHOR_KEYS, getAnchorId } from "../../../i18n/routing/index.js";

const PDF_ICON = "/icons/documents/pdf.svg";

export function getAboutConfig(translations, language) {
  const editCertificate = personalData.certificates.editFullStackBootcamp;

  return {
    sectionId: getAnchorId(ANCHOR_KEYS.ABOUT, language),

    eyebrow: translations.about.eyebrow,
    title: translations.about.title,
    description: translations.about.description,
    paragraphs: translations.about.paragraphs,

    profileImage: {
      ...personalData.profileImage,
      alt: translations.about.imageAlt,
    },

    facts: [
      {
        id: "location",
        label: translations.about.facts.locationLabel,
        value: personalData.location,
      },
      {
        id: "experience",
        label: translations.about.facts.experienceLabel,
        value: translations.about.facts.experienceValue,
      },
      {
        id: "process",
        label: translations.about.facts.processLabel,
        value: translations.about.facts.processValue,
      },
    ],

    education: {
      eyebrow: translations.about.education.eyebrow,
      title: translations.about.education.title,
      institution:
        `${editCertificate.institution} · ` + editCertificate.location,
      period: editCertificate.period,
      description: translations.about.education.description,
      certificate: {
        label: translations.about.education.certificate.label,
        ariaLabel: translations.about.education.certificate.ariaLabel,
        href: editCertificate.href,
        icon: PDF_ICON,
      },
    },
  };
}
