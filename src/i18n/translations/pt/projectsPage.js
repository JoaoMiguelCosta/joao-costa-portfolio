const projectsPage = {
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
};

export default projectsPage;
