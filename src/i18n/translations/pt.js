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
        anchorKey: "projects",
      },
      {
        label: "Sobre",
        anchorKey: "about",
      },
      {
        label: "Competências",
        anchorKey: "skills",
      },
      {
        label: "Contacto",
        anchorKey: "contact",
      },
    ],
  },

  hero: {
    title:
      "Desenvolvo soluções web pensadas para resolver necessidades reais de negócio.",
    description:
      "Crio websites e aplicações web que ajudam empresas a apresentar melhor os seus serviços, organizar processos, reduzir trabalho manual e melhorar a experiência dos utilizadores. Acompanho o projeto desde o planeamento até à publicação, suporte e evolução.",

    actions: [
      {
        label: "Ver projetos",
        anchorKey: "projects",
        variant: "primary",
      },
      {
        label: "Entrar em contacto",
        anchorKey: "contact",
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

    caseStudiesCtaLabel: "Ver case studies completos",

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
        label: "Descarregar certificado Full Stack",
        ariaLabel: "Descarregar certificado de Desenvolvimento Full Stack em PDF",
      },
    },
  },

  skills: {
    eyebrow: "Conhecimentos técnicos",
    title: "Competências",
    description:
      "Tecnologias, práticas e ferramentas que utilizo para desenvolver interfaces, APIs e aplicações web organizadas, acessíveis e preparadas para evoluir.",

    appliedTitle: "Competências aplicadas",
    appliedDescription:
      "Competências usadas em projetos reais, desde interfaces React e APIs até bases de dados, testes, publicação e manutenção.",

    learningTitle: "Em aprendizagem e evolução",
    learningDescription:
      "Tecnologias e práticas que estou a aprofundar para construir aplicações mais modernas, tipadas, escaláveis e apoiadas por IA.",

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
    title: "Tens um projeto ou oportunidade em mente ?",
    description:
      "Estou disponível para desenvolver websites, aplicações web e soluções digitais orientadas a necessidades reais de negócio.",
    availability:
      "Projetos freelance, colaboração com equipas e oportunidades de desenvolvimento web.",

    detailsAriaLabel: "Informações de contacto e documentos profissionais",

    emailLabel: "Email:",
    emailActionLabel: "Enviar email",

    locationLabel: "Localização",
    availabilityLabel: "Disponibilidade",
    availabilityValue: "Freelance e equipas de desenvolvimento",

    documents: {
      title: "Documentos",
      cvPortugueseLabel: "Descarregar CV",
      cvPortugueseAriaLabel: "Descarregar currículo de João Costa em português",
      cvEnglishLabel: "Descarregar CV em inglês",
      cvEnglishAriaLabel: "Descarregar currículo de João Costa em inglês",
    },

    profiles: {
      title: "Perfis profissionais",
      githubLabel: "GitHub",
      githubAriaLabel: "Abrir perfil de GitHub de João Costa",
      linkedinLabel: "LinkedIn",
      linkedinAriaLabel: "Abrir perfil de LinkedIn de João Costa",
    },
  },

  projectsPage: {
    hero: {
      eyebrow: "Projetos",
      title: "Projetos em destaque",
      description:
        "Dois projetos reais onde trabalhei desde a estrutura técnica à experiência de utilização, combinando frontend, backend, regras de negócio, deploy e manutenção.",
    },

    intro: {
      title: "Case studies com contexto real",
      description:
        "Estes projetos representam duas áreas complementares do meu trabalho: uma aplicação full-stack orientada a processos internos e uma SPA institucional multi-brand focada em comunicação, consistência visual e escalabilidade frontend.",

      highlights: [
        "Aplicações reais, não exercícios académicos.",
        "Responsabilidade em várias fases do projeto.",
        "Decisões técnicas pensadas para manutenção e evolução.",
      ],
    },

    navigation: {
      farmaciaSantaCasaLabel: "Farmácia Santa Casa",
      sunliveGroupLabel: "Sunlive Group",
    },

    caseStudies: {
      items: {
        "farmacia-santa-casa": {
          subtitle:
            "Aplicação full-stack para gestão operacional entre Santa Casa, Farmácia e Sistema/Admin.",
          role: "Full Stack Developer",
          summary:
            "Projeto desenvolvido para centralizar processos, reduzir trabalho manual e dar mais controlo às operações entre diferentes perfis de utilizador.",

          context: {
            title: "Contexto",
            body:
              "A aplicação foi pensada para suportar fluxos reais entre uma instituição, uma farmácia e uma área de administração. O objetivo era organizar informação crítica, controlar estados dos processos e permitir que cada perfil acedesse apenas às operações relevantes.",
          },

          problem: {
            title: "Problema",
            body:
              "A gestão manual de utentes, receitas, pedidos, regularizações e alertas torna-se difícil de manter quando existem vários intervenientes, regras de negócio e estados diferentes. Sem uma aplicação centralizada, aumenta o risco de erros, duplicação de dados e perda de rastreabilidade.",
          },

          solution: {
            title: "Solução",
            body:
              "Foi criada uma aplicação web full-stack com frontend em React, backend em Node/Express, base de dados PostgreSQL com Prisma e autenticação por JWT em cookie HTTP-only. O sistema separa permissões por roles e organiza os principais fluxos operacionais em áreas próprias.",
          },

          responsibilities: {
            title: "Responsabilidades",
            items: [
              "Levantamento de requisitos e análise dos fluxos principais.",
              "Desenvolvimento frontend com React, Vite e CSS Modules.",
              "Desenvolvimento backend com Node.js, Express e Prisma.",
              "Modelação da base de dados PostgreSQL.",
              "Implementação de autenticação, autorização e roles.",
              "Criação de regras de negócio para pedidos, receitas, regularizações e alertas.",
              "Testes, validação, publicação em staging e suporte contínuo.",
            ],
          },

          features: {
            title: "Funcionalidades",
            items: [
              "Gestão de utentes, receitas e pedidos.",
              "Perfis ADMIN, SANTACASA e FARMACIA.",
              "Autenticação JWT com cookies HTTP-only.",
              "Controlo de acesso por permissões.",
              "Vendas suspensas/extras e regularizações.",
              "Alertas, histórico e health checks.",
              "Área de administração de utilizadores.",
              "Testes e ambiente de staging.",
            ],
          },

          technicalDecisions: {
            title: "Decisões técnicas",
            items: [
              "Separação clara entre frontend, backend e camada de dados.",
              "Prisma como camada de acesso à base de dados.",
              "PostgreSQL para dados relacionais e rastreáveis.",
              "JWT em cookie HTTP-only para reduzir exposição do token no frontend.",
              "Rate limit no login e proteção de origem.",
              "Organização por domínios funcionais para facilitar manutenção.",
              "Validação com testes e ambiente de staging antes de evolução.",
            ],
          },

          result: {
            title: "Resultado",
            body:
              "O resultado é uma aplicação operacional com autenticação, permissões, regras de negócio, histórico e ambiente de staging. O projeto demonstra capacidade de desenvolver uma solução full-stack completa, desde requisitos e dados até deploy e manutenção.",
          },
        },

        "sunlive-group": {
          subtitle:
            "SPA institucional multi-brand para apresentar o ecossistema Sunlive Group.",
          role: "Frontend Developer",
          summary:
            "Projeto focado na criação de uma presença digital consistente para várias áreas da marca, mantendo uma única base de código organizada e preparada para evolução.",

          context: {
            title: "Contexto",
            body:
              "O Sunlive Group reúne diferentes áreas de atuação, incluindo grupo, travel, sports e hotel. A aplicação precisava de comunicar estas áreas de forma coerente, mantendo identidade própria por marca e consistência na experiência de navegação.",
          },

          problem: {
            title: "Desafio",
            body:
              "O principal desafio era organizar várias marcas e páginas dentro da mesma SPA sem criar uma estrutura confusa, repetitiva ou difícil de manter. Também era necessário garantir responsividade, navegação clara e consistência visual entre secções com objetivos diferentes.",
          },

          solution: {
            title: "Solução",
            body:
              "Foi criada uma aplicação React/Vite com estrutura multi-brand, rotas dedicadas, componentes partilhados, tokens visuais, navegação desktop/mobile e deploy em Vercel. A refatoração visual evoluiu para uma direção Light Forest, mais clara e institucional.",
          },

          responsibilities: {
            title: "Responsabilidades",
            items: [
              "Desenvolvimento frontend com React, Vite e CSS Modules.",
              "Estruturação da aplicação por marcas e páginas.",
              "Criação e organização de componentes partilhados.",
              "Implementação de navegação responsiva desktop/mobile.",
              "Trabalho com tokens visuais e consistência entre marcas.",
              "Refatoração incremental da interface.",
              "Deploy e validação em Vercel.",
            ],
          },

          features: {
            title: "Funcionalidades",
            items: [
              "SPA multi-brand com áreas Group, Travel, Sports e Hotel.",
              "Rotas dedicadas por marca.",
              "UtilityBar, Header, Footer e BrandSwitcher.",
              "Drawer mobile com navegação adaptada.",
              "Sistema visual baseado em tokens.",
              "Páginas institucionais por área de negócio.",
              "Deploy público em Vercel.",
            ],
          },

          technicalDecisions: {
            title: "Decisões técnicas",
            items: [
              "Arquitetura por brand para reduzir acoplamento entre áreas.",
              "Componentes partilhados para evitar duplicação.",
              "CSS Modules para isolamento de estilos.",
              "Tokens semânticos para manter consistência visual.",
              "Lazy loading e fallbacks de rota quando aplicável.",
              "Refatoração por lotes para controlar risco e validar a UI progressivamente.",
            ],
          },

          result: {
            title: "Resultado",
            body:
              "O resultado é uma SPA institucional escalável, com múltiplas áreas de negócio organizadas numa base de código consistente. O projeto demonstra capacidade de estruturar frontend, aplicar design system, responder a feedback visual e preparar uma aplicação para crescimento.",
          },
        },
      },
    },

    cta: {
      title: "Tens um projeto que precisa de sair do papel?",
      description:
        "Posso ajudar a transformar uma necessidade real numa aplicação web organizada, responsiva e preparada para evoluir.",
      contactLabel: "Contactar",
      homeLabel: "Voltar à homepage",
    },
  },

  footer: {
    rights: "Todos os direitos reservados.",
    navigationAriaLabel: "Links do rodapé",
    githubLabel: "GitHub",
    githubAriaLabel: "Abrir perfil de GitHub de João Costa",
    linkedinLabel: "LinkedIn",
    linkedinAriaLabel: "Abrir perfil de LinkedIn de João Costa",
    backToTopLabel: "Voltar ao topo ↑",
    backToTopAriaLabel: "Voltar ao início da página",
  },

  loading: {
    label: "A carregar...",
  },

  errorPage: {
    eyebrow: "Erro",
    title: "Ocorreu um erro inesperado",
    description:
      "Não foi possível carregar esta página. Tenta novamente ou volta à página inicial.",
    actionLabel: "Voltar à página inicial",
  },

  notFoundPage: {
    eyebrow: "404",
    title: "Página não encontrada",
    description: "A página que procuras não existe ou foi movida.",
    actionLabel: "Voltar à página inicial",
  },
};

export default portugueseTranslations;
