import { personalData } from "../../../data/personal.data.js";
import { projectsData } from "../../../data/projects.data.js";
import { skillsData } from "../../../data/skills.data.js";
import { getTranslations } from "../../../i18n/translations/index.js";

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
        id: "freelance",
        label: translations.about.facts.freelanceLabel,
        value:
          `${translations.about.facts.freelanceValuePrefix} ` +
          personalData.freelancerSince,
      },
      {
        id: "navy",
        label: translations.about.facts.navyLabel,
        value:
          `${personalData.navyServiceYears} ` +
          translations.about.facts.navyValueSuffix,
      },
    ],
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

      learningTitle: translations.skills.learningTitle,
      learningDescription: translations.skills.learningDescription,

      labels: {
        tools: translations.skills.toolsLabel,
        concepts: translations.skills.conceptsLabel,
      },

      appliedItems: getLocalizedSkillGroups(skillsData.applied, translations),

      learningItems: getLocalizedSkillGroups(skillsData.learning, translations),
    },

    contact: {
      eyebrow: translations.contact.eyebrow,
      title: translations.contact.title,
      description: translations.contact.description,
      note: `${translations.contact.emailLabel}: ` + personalData.email,
    },

    footer: {
      owner: personalData.name,
      rights: translations.footer.rights,
    },
  };
}
