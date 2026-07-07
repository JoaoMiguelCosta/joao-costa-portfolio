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
    eyebrow: "João Costa · Programador Web Full Stack",
    title:
      "Desenvolvo soluções web pensadas para resolver necessidades reais de negócio.",
    description:
      "Crio websites e aplicações web que ajudam empresas a apresentar melhor os seus serviços, organizar processos, reduzir trabalho manual e melhorar a experiência dos utilizadores. Acompanho o projeto desde o planeamento até à publicação, suporte e evolução.",

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
      "Desde 2025, trabalho como freelancer no desenvolvimento de websites e aplicações web, acompanhando os projetos de ponta a ponta: levantamento de requisitos, definição da solução, desenvolvimento frontend e backend, testes, publicação, manutenção e suporte.",

      "Tenho experiência prática em projetos orientados a necessidades reais de negócio, desde websites institucionais até plataformas web com regras operacionais, autenticação, permissões, gestão de dados e diferentes áreas funcionais. Procuro criar soluções claras, fiáveis e preparadas para gerar valor real para empresas e utilizadores.",
    ],

    facts: {
      locationLabel: "Localização",
      experienceLabel: "Experiência prática",
      experienceValue: "Projetos reais",
      processLabel: "Acompanhamento",
      processValue: "Do planeamento ao suporte",
    },

    education: {
      eyebrow: "Formação",
      title: "Full Stack Development",
      description:
        "Formação intensiva em desenvolvimento web frontend e backend, com aplicação prática de tecnologias modernas e desenvolvimento de projetos.",
      certificate: {
        label: "Ver certificado de conclusão",
        ariaLabel:
          "Abrir certificado de conclusão do curso Full Stack Development da EDIT",
      },
    },
  },

  skills: {
    eyebrow: "Conhecimentos técnicos",
    title: "Competências",
    description:
      "Tecnologias, práticas e ferramentas aplicadas no desenvolvimento, validação e publicação de projetos reais.",

    appliedTitle: "Competências aplicadas",

    learningTitle: "Em aprendizagem e evolução",
    learningDescription:
      "Tecnologias e práticas que estou atualmente a aprofundar através de estudo e aplicação em novos projetos.",

    toolsLabel: "Tecnologias e ferramentas",
    conceptsLabel: "Práticas e conhecimentos",

    toolsAriaLabel: "Tecnologias e ferramentas de",
    conceptsAriaLabel: "Práticas e conhecimentos de",

    items: {
      frontend: {
        title: "Frontend",
        description:
          "Desenvolvimento de interfaces responsivas, acessíveis e organizadas em componentes reutilizáveis.",

        concepts: [
          "React Router",
          "CSS Modules",
          "Design responsivo",
          "Acessibilidade web (a11y)",
          "Arquitetura baseada em componentes",
          "HTML semântico",
        ],
      },

      backend: {
        title: "Backend",
        description:
          "Desenvolvimento de APIs, autenticação, permissões, validações e regras de negócio adaptadas a cada aplicação.",

        concepts: [
          "JWT",
          "Autenticação",
          "Controlo de acesso baseado em funções (RBAC)",
          "Validação de dados",
          "Regras de negócio",
        ],
      },

      data: {
        title: "Bases de dados",
        description:
          "Modelação, persistência e gestão de dados relacionais e orientados a documentos.",

        concepts: [
          "SQL",
          "Modelação de dados relacionais",
          "Relações entre entidades",
          "Migrações de base de dados",
          "Integridade referencial",
          "Persistência de dados",
        ],
      },

      "quality-delivery": {
        title: "Qualidade e entrega",
        description:
          "Controlo de versões, testes, integração contínua, apoio visual, publicação e manutenção de aplicações.",

        concepts: [
          "Qualidade de código e linting",
          "Testes unitários e de integração",
          "Testes end-to-end (E2E)",
          "Testes automatizados de APIs",
          "Integração e entrega contínuas (CI/CD)",
          "Deploy e ambientes de staging",
        ],
      },

      "modern-web": {
        title: "Desenvolvimento web moderno",
        description:
          "Aprofundamento de frameworks e ferramentas orientadas para aplicações modernas, tipadas e escaláveis.",

        concepts: [
          "App Router",
          "Componentes de servidor e cliente",
          "Tipagem estática e segurança de tipos",
          "SSR, SSG e ISR",
          "Data fetching e cache",
          "SEO e gestão de metadata",
        ],
      },

      "ai-assisted": {
        title: "Desenvolvimento assistido por IA",
        description:
          "Utilização responsável de ferramentas de IA para planear, implementar, rever e validar soluções de software.",

        concepts: [
          "Desenvolvimento assistido por IA",
          "Prompt Engineering",
          "Context Engineering",
          "Agentes de IA",
          "Decomposição e planeamento de tarefas",
          "Revisão e validação de código",
        ],
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
