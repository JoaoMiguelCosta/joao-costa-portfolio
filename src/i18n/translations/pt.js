const portugueseTranslations = {
  header: {
    skipLink: "Saltar para o conteúdo principal",
    navigationAriaLabel: "Navegação principal",
    brandAriaLabel: "Ir para o início",

    languageSwitcher: {
      ariaLabel: "Selecionar idioma",
      portugueseLabel: "Português",
      englishLabel: "Inglês",
    },

    themeToggle: {
      enableLightThemeLabel: "Ativar modo claro",
      enableDarkThemeLabel: "Ativar modo escuro",
    },

    mobileMenu: {
      openLabel: "Abrir menu de navegação",
      closeLabel: "Fechar menu de navegação",
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

    featuredTitle: "Projetos em destaque",
    otherTitle: "Outros projetos",

    responsibilityLabel: "Responsabilidade",

    links: {
      website: "Visitar website",
      repository: "Ver código no GitHub",
      caseStudy: "Ver caso de estudo",
    },

    technologiesAriaLabel: "Tecnologias utilizadas no projeto",

    items: {
      "farmacia-santa-casa": {
        type: "Aplicação web full stack",
        status: "Demonstração pública",
        description:
          "Plataforma operacional para gestão de utentes, receitas, pedidos, regularizações, alertas e utilizadores, com diferentes áreas e permissões.",
        responsibility:
          "Pesquisa, levantamento de necessidades, definição da solução, desenvolvimento frontend e backend, testes, publicação e suporte.",
        imageAlt:
          "Interface da aplicação Farmácia Santa Casa com listagem e gestão de utentes",
      },

      "sunlive-group": {
        type: "Plataforma institucional multimarcas",
        status: "Publicado",
        description:
          "Plataforma web corporativa que reúne várias marcas, cada uma com identidade visual, conteúdos, estrutura e experiência de navegação próprias.",
        responsibility:
          "Pesquisa, levantamento de necessidades, definição da arquitetura, desenvolvimento, publicação e suporte.",
        imageAlt:
          "Página principal do website Sunlive Group com identidade institucional",
      },

      "ria-canal-hair-design": {
        type: "Website institucional",
        status: "Publicado",
        description:
          "Website responsivo para apresentação do salão, serviços, trabalhos, espaço, equipa, testemunhos, Instagram e contactos.",
        responsibility:
          "Pesquisa, contacto com o cliente, definição da solução, desenvolvimento, publicação e suporte.",
        imageAlt: "Página principal do website Ria Canal Hair Design",
      },

      "wag-training-camp": {
        type: "Website de evento",
        status: "Publicado",
        description:
          "Website de divulgação dos camps internacionais de ginástica em Malta e Anadia, com programas, equipa, locais, parceiros e acesso às inscrições.",
        responsibility:
          "Pesquisa, contacto com o cliente, desenvolvimento, publicação e suporte.",
        imageAlt:
          "Página institucional do Sunlive International WAG Training Camp",
      },

      "continental-cup": {
        type: "Website de competição",
        status: "Publicado",
        description:
          "Website oficial de uma competição internacional de ginástica, com informações sobre o evento, local, alojamento, inscrições e documentação.",
        responsibility:
          "Pesquisa, contacto com o cliente, desenvolvimento, publicação e suporte.",
        imageAlt:
          "Página principal da International Continental Cup com participantes do evento",
      },
    },
  },

  about: {
    eyebrow: "Percurso profissional",
    title: "Sobre mim",
    description:
      "Transformo necessidades reais em soluções web claras, organizadas e preparadas para crescer.",

    imageAlt: "Retrato de João Costa, programador web full stack",

    paragraphs: [
      "Desde 2025, trabalho como freelancer e acompanho projetos de ponta a ponta: pesquisa, levantamento de requisitos, definição da solução, desenvolvimento, publicação e suporte.",

      "Antes de iniciar o meu percurso no desenvolvimento web, servi durante seis anos na Marinha Portuguesa. Essa experiência reforçou competências como disciplina, responsabilidade, resiliência, trabalho em equipa e capacidade de atuar sob pressão.",
    ],

    facts: {
      locationLabel: "Localização",
      freelanceLabel: "Freelance",
      freelanceValuePrefix: "Desde",
      navyLabel: "Marinha Portuguesa",
      navyValueSuffix: "anos de serviço",
    },
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
