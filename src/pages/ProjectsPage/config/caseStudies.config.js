import { projectsData } from "../../../data/projects.data.js";

const CASE_STUDY_ORDER = ["farmacia-santa-casa", "sunlive-group"];

function getCaseStudy(id, translations) {
  const project = projectsData.find((projectItem) => projectItem.id === id);
  const content = translations.projectsPage.caseStudies.items[id];

  return {
    id: project.id,
    title: project.title,
    technologies: project.technologies,
    technologiesAriaLabel: `${translations.projects.technologiesAriaLabel} ${project.title}`,
    links: project.links,
    linkLabels: translations.projects.links,
    image: project.image,
    ...content,
  };
}

export function getCaseStudies(translations) {
  return CASE_STUDY_ORDER.map((id) => getCaseStudy(id, translations));
}
