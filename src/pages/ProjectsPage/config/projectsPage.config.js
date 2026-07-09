import { projectsData } from "../../../data/projects.data.js";
import { ANCHOR_KEYS, getHomeAnchorHref } from "../../../i18n/routes.js";
import { getTranslations } from "../../../i18n/translations/index.js";

const CASE_STUDY_ORDER = ["farmacia-santa-casa", "sunlive-group"];

function getHeroConfig(translations) {
  return translations.projectsPage.hero;
}

function getIntroConfig(translations) {
  return translations.projectsPage.intro;
}

function getNavigation(translations) {
  const navigation = translations.projectsPage.navigation;

  return [
    {
      id: "farmacia-santa-casa",
      label: navigation.farmaciaSantaCasaLabel,
      href: "#farmacia-santa-casa",
    },
    {
      id: "sunlive-group",
      label: navigation.sunliveGroupLabel,
      href: "#sunlive-group",
    },
  ];
}

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

function getCaseStudies(translations) {
  return CASE_STUDY_ORDER.map((id) => getCaseStudy(id, translations));
}

function getCtaConfig(translations, language) {
  const cta = translations.projectsPage.cta;

  return {
    title: cta.title,
    description: cta.description,
    actions: [
      {
        id: "contact",
        label: cta.contactLabel,
        href: getHomeAnchorHref(ANCHOR_KEYS.CONTACT, language),
      },
      {
        id: "home",
        label: cta.homeLabel,
        href: getHomeAnchorHref(ANCHOR_KEYS.START, language),
      },
    ],
  };
}

export function getProjectsPageConfig(language) {
  const translations = getTranslations(language);
  const hero = getHeroConfig(translations);

  return {
    hero,
    intro: getIntroConfig(translations),
    navigation: getNavigation(translations),
    caseStudies: getCaseStudies(translations),
    cta: getCtaConfig(translations, language),
  };
}
