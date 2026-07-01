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

function getLocalizedSkills(translations) {
  return skillsData.map((skill) => {
    const translatedSkill = translations.skills.items[skill.id];

    return {
      ...skill,
      ...translatedSkill,

      technologiesAriaLabel: `${translations.skills.technologiesAriaLabel} ${translatedSkill.title}`,
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

    about: translations.about,

    skills: {
      eyebrow: translations.skills.eyebrow,
      title: translations.skills.title,
      description: translations.skills.description,
      items: getLocalizedSkills(translations),
    },

    contact: {
      eyebrow: translations.contact.eyebrow,
      title: translations.contact.title,
      description: translations.contact.description,
      note: `${translations.contact.emailLabel}: ${personalData.email}`,
    },

    footer: {
      owner: personalData.name,
      rights: translations.footer.rights,
    },
  };
}
