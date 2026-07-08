import { personalData } from "../../../data/personal.data.js";
import { projectsData } from "../../../data/projects.data.js";
import { skillsData } from "../../../data/skills.data.js";
import { LANGUAGE_CODES } from "../../../i18n/language.constants.js";
import { getTranslations } from "../../../i18n/translations/index.js";

const GITHUB_ICON = "/icons/technologies/github.svg";
const LINKEDIN_ICON = "/icons/social/linkedin.svg";
const PDF_ICON = "/icons/documents/pdf.svg";

function getLocalizedProjects(translations) {
  return projectsData
    .map((project) => {
      const translatedProject = translations.projects.items[project.id];

      return {
        ...project,
        ...translatedProject,

        image: {
          ...project.image,
          alt: translatedProject.imageAlt,
        },

        technologiesAriaLabel: `${translations.projects.technologiesAriaLabel} ${project.title}`,
      };
    })
    .sort(
      (firstProject, secondProject) =>
        firstProject.priority - secondProject.priority,
    );
}

function groupProjects(projects) {
  return {
    featuredItems: projects.filter((project) => project.featured),
    otherItems: projects.filter((project) => !project.featured),
  };
}

function getAboutConfig(translations) {
  const editCertificate = personalData.certificates.editFullStackBootcamp;

  return {
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

function getContactConfig(translations, language) {
  const documentLinks = [
    getActiveCvLink(translations, language),
    getCertificateLink(translations),
  ].filter((link) => Boolean(link.href));

  return {
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

function getLocalizedSkillGroups(skillGroups, translations) {
  return skillGroups.map((skill) => {
    const translatedSkill = translations.skills.items[skill.id];

    return {
      ...skill,
      ...translatedSkill,

      toolsAriaLabel:
        `${translations.skills.toolsAriaLabel} ` + translatedSkill.title,

      conceptsAriaLabel:
        `${translations.skills.conceptsAriaLabel} ` + translatedSkill.title,
    };
  });
}

export function getHomePageConfig(language) {
  const translations = getTranslations(language);
  const localizedProjects = getLocalizedProjects(translations);
  const groupedProjects = groupProjects(localizedProjects);

  return {
    header: {
      brand: {
        name: personalData.name,
        href: "#inicio",
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
    },

    hero: translations.hero,

    projects: {
      eyebrow: translations.projects.eyebrow,
      title: translations.projects.title,
      description: translations.projects.description,

      featuredTitle: translations.projects.featuredTitle,
      otherTitle: translations.projects.otherTitle,

      cardLabels: {
        responsibility: translations.projects.responsibilityLabel,
        links: translations.projects.links,
      },

      ...groupedProjects,
    },

    about: getAboutConfig(translations),

    skills: {
      eyebrow: translations.skills.eyebrow,
      title: translations.skills.title,
      description: translations.skills.description,

      appliedTitle: translations.skills.appliedTitle,
      appliedDescription: translations.skills.appliedDescription,

      learningTitle: translations.skills.learningTitle,
      learningDescription: translations.skills.learningDescription,

      labels: {
        tools: translations.skills.toolsLabel,
        concepts: translations.skills.conceptsLabel,
      },

      appliedItems: getLocalizedSkillGroups(skillsData.applied, translations),

      learningItems: getLocalizedSkillGroups(skillsData.learning, translations),
    },

    contact: getContactConfig(translations, language),

    footer: {
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
          href: "#inicio",
          external: false,
        },
      ],
    },
  };
}
