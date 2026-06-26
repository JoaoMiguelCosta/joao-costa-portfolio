export const homePageConfig = {
  brand: {
    name: "João Costa",
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
    eyebrow: "Programador Web Full Stack",
    title: "Desenvolvo aplicações web claras, funcionais e bem estruturadas.",
    description:
      "Trabalho principalmente com JavaScript, React, Node.js, Prisma e PostgreSQL, com foco em código limpo, usabilidade e organização.",
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
    title: "Projetos",
    description:
      "Projetos construídos para consolidar competências de frontend, backend, arquitetura e integração entre sistemas.",

    items: [
      {
        type: "Aplicação Full Stack",
        title: "Farmácia Santa Casa",
        description:
          "Plataforma de gestão de utentes, receitas, pedidos, regularizações e utilizadores, com diferentes áreas e permissões.",
        technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
      },
      {
        type: "Website institucional",
        title: "Sunlive Group",
        description:
          "Website corporativo multimarcas, com diferentes identidades visuais, conteúdos, estruturas e experiências de navegação.",
        technologies: ["React", "Vite", "JavaScript", "CSS Modules"],
      },
    ],
  },

  about: {
    eyebrow: "Percurso",
    title: "Sobre mim",
    paragraphs: [
      "Estou em transição de carreira para o desenvolvimento web, depois de vários anos de experiência profissional noutra área.",
      "Tenho desenvolvido projetos completos para aprofundar conhecimentos de frontend, backend, bases de dados, segurança, testes, Git e deploy.",
      "Procuro construir soluções simples de compreender, fáceis de manter e adequadas às necessidades reais de cada projeto.",
    ],
  },

  skills: {
    eyebrow: "Conhecimentos técnicos",
    title: "Competências",
    items: [
      {
        title: "Frontend",
        description: "HTML, CSS, JavaScript, React, Vite e CSS Modules.",
      },
      {
        title: "Backend e dados",
        description: "Node.js, Express, Prisma, PostgreSQL e APIs REST.",
      },
      {
        title: "Ferramentas",
        description: "Git, GitHub, VS Code, Vercel, Render e Postman.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Vamos conversar",
    description:
      "Estou disponível para oportunidades de desenvolvimento web, colaboração em projetos e contacto profissional.",
    note: "Os canais de contacto e os perfis profissionais serão adicionados no próximo lote.",
  },

  footer: {
    owner: "João Costa",
    rights: "Todos os direitos reservados.",
  },
};
