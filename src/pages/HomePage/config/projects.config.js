import { projectsData } from "../../../data/projects.data.js";
import {
  ANCHOR_KEYS,
  ROUTE_KEYS,
  getAnchorId,
  getRoutePath,
} from "../../../i18n/routing/index.js";

function getLocalizedProjects(translations, language) {
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

        links: {
          ...project.links,
          caseStudy: project.links.caseStudy
            ? `${getRoutePath(ROUTE_KEYS.PROJECTS_PAGE, language)}#${project.id}`
            : null,
        },
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

export function getProjectsConfig(translations, language) {
  const localizedProjects = getLocalizedProjects(translations, language);
  const groupedProjects = groupProjects(localizedProjects);

  return {
    sectionId: getAnchorId(ANCHOR_KEYS.PROJECTS, language),

    eyebrow: translations.projects.eyebrow,
    title: translations.projects.title,
    description: translations.projects.description,

    featuredTitle: translations.projects.featuredTitle,
    otherTitle: translations.projects.otherTitle,

    cardLabels: {
      responsibility: translations.projects.responsibilityLabel,
      links: translations.projects.links,
    },

    caseStudiesCta: {
      label: translations.projects.caseStudiesCtaLabel,
      href: getRoutePath(ROUTE_KEYS.PROJECTS_PAGE, language),
    },

    ...groupedProjects,
  };
}
