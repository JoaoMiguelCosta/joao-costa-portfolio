import { projectsData } from "../../../data/projects.data.js";
import { ANCHOR_KEYS, getAnchorId } from "../../../i18n/routing/index.js";

function getLocalizedDemoAccess(project, translations) {
  if (!project.demoAccess) {
    return null;
  }

  const accountNames = translations.projects.demoAccessModal.accountNames;

  return {
    demoUrl: project.links.website,
    accounts: project.demoAccess.accounts.map((account) => ({
      ...account,
      name: accountNames[account.id],
    })),
  };
}

function getLocalizedProjects(translations) {
  return projectsData
    .map((project) => {
      const translatedProject = translations.projects.items[project.id];
      const isDemoWebsite = project.links.websiteEnvironment === "demo";

      return {
        ...project,
        ...translatedProject,

        image: {
          ...project.image,
          alt: translatedProject.imageAlt,
        },

        technologiesAriaLabel: `${translations.projects.technologiesAriaLabel} ${project.title}`,

        websiteLinkLabel: isDemoWebsite
          ? translations.projects.links.demo.label
          : translations.projects.links.website,
        websiteLinkAriaLabel: isDemoWebsite
          ? translations.projects.links.demo.ariaLabel
          : undefined,

        demoAccess: getLocalizedDemoAccess(project, translations),
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
  const localizedProjects = getLocalizedProjects(translations);
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
      demoAccessModal: translations.projects.demoAccessModal,
    },

    ...groupedProjects,
  };
}
