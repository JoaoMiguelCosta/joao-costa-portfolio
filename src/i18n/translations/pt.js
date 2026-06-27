const portugueseTranslations = {
  header: {
    skipLink: "Saltar para o conteúdo principal",
    navigationAriaLabel: "Navegação principal",
    brandAriaLabel: "Ir para o início",

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
  },

  hero: {
    eyebrow: "Programador Web Full Stack",
    title:
      "Desenvolvo websites e aplicações web orientados às necessidades reais de cada negócio.",
    description:
      "Trabalho como freelancer no desenvolvimento completo de soluções web, desde o levantamento de necessidades até à publicação e suporte.",

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

    technologiesAriaLabel: "Tecnologias utilizadas no projeto",

    items: {
      "farmacia-santa-casa": {
        type: "Aplicação web full stack",
        status: "Demonstração pública",
        description:
          "Plataforma operacional para gestão de utentes, receitas, pedidos, regularizações, alertas e utilizadores, com diferentes áreas e permissões.",
        responsibility:
          "Pesquisa, levantamento de necessidades, definição da solução, desenvolvimento frontend e backend, testes, publicação e suporte.",
        imageAlt: "Interface da aplicação Farmácia Santa Casa",
      },

      "sunlive-group": {
        type: "Plataforma web institucional multimarcas",
        status: "Publicado",
        description:
          "Plataforma web corporativa com várias marcas, identidades visuais, conteúdos, estruturas e experiências de navegação distintas.",
        responsibility:
          "Pesquisa, levantamento de necessidades, definição da arquitetura, desenvolvimento, publicação e suporte.",
        imageAlt: "Website da Sunlive Group",
      },

      "ria-canal-hair-design": {
        type: "Website institucional",
        status: "Publicado",
        description:
          "Website institucional responsivo para apresentação dos serviços, trabalhos, espaço, testemunhos e contactos do salão.",
        responsibility:
          "Pesquisa, contacto com o cliente, definição da solução, desenvolvimento, publicação e suporte.",
        imageAlt: "Website da Ria Canal Hair Design",
      },

      "wag-training-camp": {
        type: "Website de evento",
        status: "Publicado",
        description:
          "Website desenvolvido para apresentação e comunicação do WAG Training Camp, integrado no ecossistema digital da Sunlive.",
        responsibility:
          "Pesquisa, contacto com o cliente, desenvolvimento, publicação e suporte.",
        imageAlt: "Website do WAG Training Camp",
      },

      "continental-cup": {
        type: "Website de competição",
        status: "Publicado",
        description:
          "Website desenvolvido para apresentação da Continental Cup, com informação institucional e conteúdos associados ao evento.",
        responsibility:
          "Pesquisa, contacto com o cliente, desenvolvimento, publicação e suporte.",
        imageAlt: "Website da Continental Cup",
      },
    },
  },

  about: {
    eyebrow: "Percurso profissional",
    title: "Sobre mim",

    paragraphs: [
      "Sou programador web full stack e trabalho como freelancer no desenvolvimento de websites e aplicações adaptados às necessidades reais de empresas e organizações.",

      "Acompanho cada projeto desde a pesquisa e levantamento de requisitos até à definição da solução, desenvolvimento, publicação e suporte. Trabalho principalmente com JavaScript, React, Node.js, Express, Prisma e PostgreSQL.",

      "Antes de iniciar o meu percurso no desenvolvimento web, servi durante seis anos na Marinha Portuguesa. Essa experiência consolidou competências como disciplina, responsabilidade, resiliência, trabalho em equipa e capacidade de trabalhar sob pressão.",

      "Atualmente, procuro continuar a desenvolver projetos para clientes e integrar uma equipa onde possa contribuir com experiência prática, aprofundar conhecimentos técnicos e participar na construção de soluções com impacto real.",
    ],
  },

  skills: {
    eyebrow: "Conhecimentos técnicos",
    title: "Competências",
    description:
      "Tecnologias e práticas aplicadas no desenvolvimento, validação e publicação de projetos reais.",

    technologiesAriaLabel: "Tecnologias de",

    items: {
      frontend: {
        title: "Frontend",
        description:
          "Construção de interfaces responsivas, acessíveis e organizadas por componentes.",
      },

      backend: {
        title: "Backend",
        description:
          "Desenvolvimento de APIs REST, autenticação, autorização, validação e regras de negócio.",
      },

      data: {
        title: "Bases de dados",
        description: "Modelação, persistência e gestão de dados relacionais.",
      },

      "quality-delivery": {
        title: "Qualidade e entrega",
        description:
          "Controlo de versões, testes, validação, publicação e manutenção de projetos.",
      },
    },
  },

  contact: {
    eyebrow: "Contacto",
    title: "Vamos conversar",
    description:
      "Disponível para novos projetos freelance e para oportunidades de integração em equipas de desenvolvimento web.",
    emailLabel: "Email",
  },

  footer: {
    rights: "Todos os direitos reservados.",
  },
};

export default portugueseTranslations;
