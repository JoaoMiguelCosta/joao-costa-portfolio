import { projectsData } from "../../../data/projects.data.js";

const CASE_STUDY_ORDER = ["farmacia-santa-casa", "sunlive-group"];

function getCaseStudy(id, translations) {
  const project = projectsData.find((projectItem) => projectItem.id === id);
  const content = translations.projectsPage.caseStudies.items[id];
  const isDemoWebsite = project.links.websiteEnvironment === "demo";
  const demoAccessLabels = translations.projectsPage.caseStudies.demoAccess;

  return {
    id: project.id,
    title: project.title,
    technologies: project.technologies,
    technologiesAriaLabel: `${translations.projects.technologiesAriaLabel} ${project.title}`,
    links: project.links,
    linkLabels: {
      ...translations.projects.links,
      website: isDemoWebsite
        ? translations.projects.links.demo.label
        : translations.projects.links.website,
    },
    websiteLinkAriaLabel: isDemoWebsite
      ? translations.projects.links.demo.ariaLabel
      : undefined,
    image: project.image,
    demoAccess: project.demoAccess
      ? {
          title: demoAccessLabels.title,
          usernameLabel: demoAccessLabels.usernameLabel,
          passwordLabel: demoAccessLabels.passwordLabel,
          accounts: project.demoAccess.accounts.map((account) => ({
            ...account,
            name: demoAccessLabels.accountNames[account.id],
          })),
        }
      : null,
    ...content,
  };
}

export function getCaseStudies(translations) {
  return CASE_STUDY_ORDER.map((id) => getCaseStudy(id, translations));
}
