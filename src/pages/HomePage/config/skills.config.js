import { skillsData } from "../../../data/skills.data.js";
import { ANCHOR_KEYS, getAnchorId } from "../../../i18n/routing/index.js";

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

export function getSkillsConfig(translations, language) {
  return {
    sectionId: getAnchorId(ANCHOR_KEYS.SKILLS, language),

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
  };
}
