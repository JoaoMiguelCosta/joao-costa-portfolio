const englishTranslations = {
  header: {
    skipLink: "Skip to main content",
    navigationAriaLabel: "Primary navigation",
    brandAriaLabel: "Go to the homepage",

    languageSwitcher: {
      ariaLabel: "Select language",
      portugueseLabel: "Portuguese",
      englishLabel: "English",
    },

    themeToggle: {
      enableLightThemeLabel: "Enable light mode",
      enableDarkThemeLabel: "Enable dark mode",
    },

    mobileMenu: {
      openLabel: "Open navigation menu",
      closeLabel: "Close navigation menu",
    },

    navigationItems: [
      {
        label: "Projects",
        href: "/#projetos",
      },
      {
        label: "About",
        href: "/#sobre",
      },
      {
        label: "Skills",
        href: "/#competencias",
      },
      {
        label: "Contact",
        href: "/#contacto",
      },
    ],
  },

  hero: {
    eyebrow: "João Costa · Full Stack Web Developer",
    title: "I build web solutions designed to solve real business needs.",
    description:
      "I create websites and web applications that help businesses present their services, organise processes, reduce manual work and improve the user experience. I follow each project from planning to deployment, support and future improvements.",

    actions: [
      {
        label: "View projects",
        href: "#projetos",
        variant: "primary",
      },
      {
        label: "Get in touch",
        href: "#contacto",
        variant: "secondary",
      },
    ],
  },

  projects: {
    eyebrow: "Selected work",
    title: "Selected projects",
    description:
      "A selection of real projects that I followed from requirements gathering through development, deployment and ongoing support.",

    featuredTitle: "Featured projects",
    otherTitle: "Other projects",

    responsibilityLabel: "Responsibility",

    links: {
      website: "Visit website",
      repository: "View code on GitHub",
      caseStudy: "View case study",
    },

    technologiesAriaLabel: "Technologies used in the project",

    items: {
      "farmacia-santa-casa": {
        type: "Full-stack web application",
        status: "Public demonstration",
        description:
          "An operational platform for managing residents, prescriptions, orders, regularisations, alerts and users across different areas and permission levels.",
        responsibility:
          "Research, requirements gathering, solution definition, frontend and backend development, testing, deployment and support.",
        imageAlt:
          "Farmácia Santa Casa application interface showing resident management",
      },

      "sunlive-group": {
        type: "Multi-brand corporate platform",
        status: "Published",
        description:
          "A corporate web platform bringing together several brands, each with its own visual identity, content, structure and navigation experience.",
        responsibility:
          "Research, requirements gathering, architecture definition, development, deployment and support.",
        imageAlt: "Sunlive Group website homepage with its corporate identity",
      },

      "ria-canal-hair-design": {
        type: "Corporate website",
        status: "Published",
        description:
          "A responsive website presenting the salon, services, work, facilities, team, testimonials, Instagram content and contact information.",
        responsibility:
          "Research, client communication, solution definition, development, deployment and support.",
        imageAlt: "Ria Canal Hair Design website homepage",
      },

      "wag-training-camp": {
        type: "Event website",
        status: "Published",
        description:
          "A website promoting international gymnastics camps in Malta and Anadia, including programmes, staff, locations, partners and registration access.",
        responsibility:
          "Research, client communication, development, deployment and support.",
        imageAlt: "Sunlive International WAG Training Camp institutional page",
      },

      "continental-cup": {
        type: "Competition website",
        status: "Published",
        description:
          "The official website for an international gymnastics competition, with event, venue, accommodation, registration and documentation information.",
        responsibility:
          "Research, client communication, development, deployment and support.",
        imageAlt:
          "International Continental Cup homepage showing event participants",
      },
    },
  },

  about: {
    eyebrow: "Professional background",
    title: "About me",
    description:
      "I turn real needs into clear, organised web solutions designed to grow.",

    imageAlt: "Portrait of João Costa, full-stack web developer",

    paragraphs: [
      "Since 2025, I have worked as a freelance developer building websites and web applications, following each project from end to end: requirements gathering, solution definition, frontend and backend development, testing, deployment, maintenance and support.",

      "I have hands-on experience in projects shaped by real business needs, from corporate websites to web platforms with operational rules, authentication, permissions, data management and multiple functional areas. My goal is to create clear, reliable solutions that deliver real value to businesses and users.",
    ],

    facts: {
      locationLabel: "Location",
      experienceLabel: "Hands-on experience",
      experienceValue: "Real projects",
      processLabel: "Project involvement",
      processValue: "From planning to support",
    },

    education: {
      eyebrow: "Education",
      title: "Full Stack Development",
      description:
        "Intensive training in frontend and backend web development, with practical application of modern technologies and project development.",
      certificate: {
        label: "Download Full Stack certificate",
        ariaLabel: "Download Full Stack Development certificate as PDF",
      },
    },
  },

  skills: {
    eyebrow: "Technical knowledge",
    title: "Skills",
    description:
      "Technologies, practices and tools I use to build organized, accessible and scalable web interfaces, APIs and applications.",

    appliedTitle: "Applied skills",
    appliedDescription:
      "Skills applied in real projects, from React interfaces and APIs to databases, testing, deployment and maintenance.",

    learningTitle: "Currently learning",
    learningDescription:
      "Technologies and practices I am deepening to build more modern, typed, scalable and AI-assisted applications.",

    toolsLabel: "Technologies and tools",
    conceptsLabel: "Practices and knowledge",

    toolsAriaLabel: "Technologies and tools in",
    conceptsAriaLabel: "Practices and knowledge in",

    items: {
      frontend: {
        title: "Frontend",
        description:
          "Developing responsive, accessible interfaces organised into reusable components.",

        concepts: [
          "React Router",
          "CSS Modules",
          "Responsive Design",
          "Web Accessibility (a11y)",
          "Component-Based Architecture",
          "Semantic HTML",
        ],
      },

      backend: {
        title: "Backend",
        description:
          "Developing APIs, authentication, permissions, validation and business rules adapted to each application.",

        concepts: [
          "JWT",
          "Authentication",
          "Role-Based Access Control (RBAC)",
          "Data validation",
          "Business rules",
        ],
      },

      data: {
        title: "Databases",
        description:
          "Modelling, persisting and managing relational and document-oriented data.",

        concepts: [
          "SQL",
          "Relational Data Modelling",
          "Entity Relationships",
          "Database Migrations",
          "Referential Integrity",
          "Data Persistence",
        ],
      },

      "quality-delivery": {
        title: "Quality and delivery",
        description:
          "Version control, testing, continuous integration, visual support, deployment and application maintenance.",

        concepts: [
          "Code Quality and Linting",
          "Unit and Integration Testing",
          "End-to-End Testing (E2E)",
          "Automated API Testing",
          "Continuous Integration and Delivery (CI/CD)",
          "Deployment and Staging Environments",
        ],
      },

      "modern-web": {
        title: "Modern web development",
        description:
          "Developing knowledge of frameworks and tools for modern, typed and scalable applications.",

        concepts: [
          "App Router",
          "Server and Client Components",
          "Static Typing and Type Safety",
          "SSR, SSG and ISR",
          "Data Fetching and Caching",
          "SEO and Metadata Management",
        ],
      },

      "ai-assisted": {
        title: "AI-assisted development",
        description:
          "Using AI tools responsibly to plan, implement, review and validate software solutions.",

        concepts: [
          "AI-Assisted Development",
          "Prompt Engineering",
          "Context Engineering",
          "AI Agents",
          "Task Decomposition and Planning",
          "Code Review and Validation",
        ],
      },
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Do you have a project or opportunity in mind ?",
    description:
      "I am available to build websites, web applications and digital solutions shaped by real business needs.",
    availability:
      "Freelance projects, team collaboration and web development opportunities.",

    detailsAriaLabel: "Contact information and professional documents",

    emailLabel: "Email:",
    emailActionLabel: "Send email",

    locationLabel: "Location",
    availabilityLabel: "Availability",
    availabilityValue: "Freelance and development teams",

    documents: {
      title: "Documents",
      cvPortugueseLabel: "Download CV in Portuguese",
      cvPortugueseAriaLabel: "Download João Costa's CV in Portuguese",
      cvEnglishLabel: "Download CV",
      cvEnglishAriaLabel: "Download João Costa's CV in English",
    },

    profiles: {
      title: "Professional profiles",
      githubLabel: "GitHub",
      githubAriaLabel: "Open João Costa's GitHub profile",
      linkedinLabel: "LinkedIn",
      linkedinAriaLabel: "Open João Costa's LinkedIn profile",
    },
  },

  projectsPage: {
    hero: {
      eyebrow: "Projects",
      title: "Featured projects",
      description:
        "Two real projects where I worked from the technical structure through to the user experience, combining frontend, backend, business rules, deployment and maintenance.",
    },

    intro: {
      title: "Case studies with real context",
      description:
        "These projects represent two complementary sides of my work: a full-stack application built around internal processes, and a multi-brand institutional SPA focused on communication, visual consistency and frontend scalability.",

      highlights: [
        "Real applications, not academic exercises.",
        "Ownership across several stages of each project.",
        "Technical decisions made with maintenance and growth in mind.",
      ],
    },

    navigation: {
      farmaciaSantaCasaLabel: "Farmácia Santa Casa",
      sunliveGroupLabel: "Sunlive Group",
      technicalComparisonLabel: "Technical comparison",
    },

    caseStudies: {
      items: {
        "farmacia-santa-casa": {
          subtitle:
            "Full-stack application for operational management between Santa Casa, the pharmacy and the system/admin area.",
          role: "Full Stack Developer",
          summary:
            "Built to centralise processes, reduce manual work and give more control over operations across different user profiles.",

          context: {
            title: "Context",
            body:
              "The application was designed to support real workflows between an institution, a pharmacy and an administration area. The goal was to organise critical information, control the state of each process, and make sure each profile could only access the operations relevant to it.",
          },

          problem: {
            title: "Problem",
            body:
              "Manually managing residents, prescriptions, orders, regularisations and alerts becomes hard to sustain once several stakeholders, business rules and process states are involved. Without a centralised application, the risk of errors, data duplication and lost traceability increases.",
          },

          solution: {
            title: "Solution",
            body:
              "A full-stack web application was built with a React frontend, a Node/Express backend, a PostgreSQL database managed through Prisma, and JWT authentication stored in an HTTP-only cookie. The system separates permissions by role and organises the main operational flows into their own areas.",
          },

          responsibilities: {
            title: "Responsibilities",
            items: [
              "Requirements gathering and analysis of the core workflows.",
              "Frontend development with React, Vite and CSS Modules.",
              "Backend development with Node.js, Express and Prisma.",
              "PostgreSQL database modelling.",
              "Implementation of authentication, authorisation and roles.",
              "Business rules for orders, prescriptions, regularisations and alerts.",
              "Testing, validation, staging deployment and ongoing support.",
            ],
          },

          features: {
            title: "Features",
            items: [
              "Management of residents, prescriptions and orders.",
              "ADMIN, SANTACASA and FARMACIA profiles.",
              "JWT authentication with HTTP-only cookies.",
              "Permission-based access control.",
              "Suspended/extra sales and regularisations.",
              "Alerts, history and health checks.",
              "User administration area.",
              "Automated tests and a staging environment.",
            ],
          },

          technicalDecisions: {
            title: "Technical decisions",
            items: [
              "Clear separation between frontend, backend and data layer.",
              "Prisma as the database access layer.",
              "PostgreSQL for relational, traceable data.",
              "JWT stored in an HTTP-only cookie to reduce token exposure on the frontend.",
              "Login rate limiting and origin protection.",
              "Organisation by functional domain to ease maintenance.",
              "Validation through tests and a staging environment before further changes.",
            ],
          },

          result: {
            title: "Result",
            body:
              "The result is an operational application with authentication, permissions, business rules, history and a staging environment. The project shows the ability to build a complete full-stack solution, from requirements and data to deployment and maintenance.",
          },
        },

        "sunlive-group": {
          subtitle:
            "Multi-brand institutional SPA presenting the Sunlive Group ecosystem.",
          role: "Frontend Developer",
          summary:
            "Focused on building a consistent digital presence for several brand areas, on top of a single, organised codebase prepared for future growth.",

          context: {
            title: "Context",
            body:
              "Sunlive Group brings together several business areas, including Group, Travel, Sports and Hotel. The application needed to communicate these areas coherently, while keeping each brand's own identity and a consistent navigation experience.",
          },

          problem: {
            title: "Challenge",
            body:
              "The main challenge was organising several brands and pages within the same SPA without ending up with a confusing, repetitive or hard-to-maintain structure. It also had to guarantee responsiveness, clear navigation and visual consistency across sections with different goals.",
          },

          solution: {
            title: "Solution",
            body:
              "A React/Vite application was built with a multi-brand structure, dedicated routes, shared components, visual tokens, desktop/mobile navigation and deployment on Vercel. The visual refactor evolved into a Light Forest direction, clearer and more institutional.",
          },

          responsibilities: {
            title: "Responsibilities",
            items: [
              "Frontend development with React, Vite and CSS Modules.",
              "Structuring the application by brand and page.",
              "Creating and organising shared components.",
              "Implementing responsive desktop/mobile navigation.",
              "Working with visual tokens and cross-brand consistency.",
              "Incremental interface refactoring.",
              "Deployment and validation on Vercel.",
            ],
          },

          features: {
            title: "Features",
            items: [
              "Multi-brand SPA with Group, Travel, Sports and Hotel areas.",
              "Dedicated routes per brand.",
              "UtilityBar, Header, Footer and BrandSwitcher.",
              "Mobile drawer with adapted navigation.",
              "Token-based visual system.",
              "Institutional pages per business area.",
              "Public deployment on Vercel.",
            ],
          },

          technicalDecisions: {
            title: "Technical decisions",
            items: [
              "Brand-based architecture to reduce coupling between areas.",
              "Shared components to avoid duplication.",
              "CSS Modules for style isolation.",
              "Semantic tokens to keep visual consistency.",
              "Lazy loading and route fallbacks where applicable.",
              "Refactoring in batches to control risk and validate the UI progressively.",
            ],
          },

          result: {
            title: "Result",
            body:
              "The result is a scalable institutional SPA, with multiple business areas organised on a consistent codebase. The project shows the ability to structure a frontend, apply a design system, respond to visual feedback and prepare an application for growth.",
          },
        },
      },
    },

    technicalComparison: {
      title: "Technical overview compared",
      description:
        "The two projects highlight different skills: one goes deep into full-stack logic and internal processes; the other focuses on frontend architecture, visual consistency and multi-brand organisation.",

      rows: [
        {
          label: "Project type",
          farmaciaSantaCasa: "Operational full-stack application",
          sunliveGroup: "Multi-brand institutional SPA",
        },
        {
          label: "Main focus",
          farmaciaSantaCasa:
            "Internal processes, business rules and permissions",
          sunliveGroup: "Communication, navigation and visual consistency",
        },
        {
          label: "Frontend",
          farmaciaSantaCasa: "React, Vite and CSS Modules",
          sunliveGroup: "React, Vite and CSS Modules",
        },
        {
          label: "Backend",
          farmaciaSantaCasa: "Node.js, Express, Prisma and PostgreSQL",
          sunliveGroup: "Not applicable",
        },
        {
          label: "Authentication",
          farmaciaSantaCasa: "JWT, HTTP-only cookies and roles",
          sunliveGroup: "Public navigation",
        },
        {
          label: "Database",
          farmaciaSantaCasa: "PostgreSQL with Prisma",
          sunliveGroup: "Not applicable",
        },
        {
          label: "Deployment",
          farmaciaSantaCasa: "Staging on Render",
          sunliveGroup: "Vercel",
        },
        {
          label: "Quality",
          farmaciaSantaCasa: "Tests, validation and technical documentation",
          sunliveGroup:
            "Visual refactoring, responsiveness and component organisation",
        },
        {
          label: "Value demonstrated",
          farmaciaSantaCasa:
            "Ability to deliver a full-stack product with real business logic",
          sunliveGroup:
            "Ability to structure a scalable, visually consistent frontend",
        },
      ],
    },

    cta: {
      title: "Have a project that needs to get off the ground?",
      description:
        "I can help turn a real need into an organised, responsive web application that is ready to grow.",
      contactLabel: "Get in touch",
      homeLabel: "Back to homepage",
    },
  },

  footer: {
    role: "Full Stack Web Developer",
    rights: "All rights reserved.",
    navigationAriaLabel: "Footer links",
    githubLabel: "GitHub",
    githubAriaLabel: "Open João Costa's GitHub profile",
    linkedinLabel: "LinkedIn",
    linkedinAriaLabel: "Open João Costa's LinkedIn profile",
    backToTopLabel: "Back to top ↑",
    backToTopAriaLabel: "Back to the top of the page",
  },
};

export default englishTranslations;
