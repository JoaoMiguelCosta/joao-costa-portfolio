import { personalData } from "../../../data/personal.data.js";
import { projectsData } from "../../../data/projects.data.js";
import { skillsData } from "../../../data/skills.data.js";

export const homePageConfig = {
  brand: {
    name: personalData.name,
    href: "#inicio",
    ariaLabel: "Ir para o início",
  },

  navigationItems: [
    {
      label: "Projetos",
      href: "#projetos",
    },
    {
      label: "Sobre",
      href: "#sobre",
    },
    {
      label: "Competências",
      href: "#competencias",
    },
    {
      label: "Contacto",
      href: "#contacto",
    },
  ],

  hero: {
    ...personalData.hero,
    actions: [
      {
        label: "Ver projetos",
        href: "#projetos",
        variant: "primary",
      },
      {
        label: "Entrar em contacto",
        href: "#contacto",
        variant: "secondary",
      },
    ],
  },

  projects: {
    eyebrow: "Trabalho desenvolvido",
    title: "Projetos selecionados",
    description:
      "Uma seleção de trabalhos reais que acompanhei desde o levantamento de necessidades até ao desenvolvimento, publicação e suporte.",
    items: projectsData,
  },

  about: {
    eyebrow: "Percurso profissional",
    title: "Sobre mim",
    paragraphs: personalData.about,
  },

  skills: {
    eyebrow: "Conhecimentos técnicos",
    title: "Competências",
    description:
      "Tecnologias e práticas aplicadas no desenvolvimento, validação e publicação de projetos reais.",
    items: skillsData,
  },

  contact: {
    eyebrow: "Contacto",
    title: "Vamos conversar",
    description: personalData.availability,
    note: `Email: ${personalData.email}`,
  },

  footer: {
    owner: personalData.name,
    rights: "Todos os direitos reservados.",
  },
};
