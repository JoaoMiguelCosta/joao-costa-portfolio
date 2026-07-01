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
        href: "#projetos",
      },
      {
        label: "About",
        href: "#sobre",
      },
      {
        label: "Skills",
        href: "#competencias",
      },
      {
        label: "Contact",
        href: "#contacto",
      },
    ],
  },

  hero: {
    eyebrow: "Full-Stack Web Developer",
    title:
      "I build websites and web applications around the real needs of each business.",
    description:
      "I work as a freelance developer, delivering complete web solutions from requirements gathering to deployment and ongoing support.",

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
      "Since 2025, I have worked as a freelance developer, following projects from research and requirements gathering through solution definition, development, deployment and ongoing support.",

      "Before starting my career in web development, I served for six years in the Portuguese Navy. That experience strengthened skills such as discipline, responsibility, resilience, teamwork and the ability to perform under pressure.",
    ],

    facts: {
      locationLabel: "Location",
      freelanceLabel: "Freelance",
      freelanceValuePrefix: "Since",
      navyLabel: "Portuguese Navy",
      navyValueSuffix: "years of service",
    },
  },

  skills: {
    eyebrow: "Technical knowledge",
    title: "Skills",
    description:
      "Technologies, practices and tools applied to the development, validation and deployment of real projects.",

    appliedTitle: "Applied skills",

    learningTitle: "Currently learning",
    learningDescription:
      "Technologies and practices I am currently developing through study and application in new projects.",

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
    title: "Let's talk",
    description:
      "Available for new freelance projects and opportunities to join web development teams.",
    emailLabel: "Email",
  },

  footer: {
    rights: "All rights reserved.",
  },
};

export default englishTranslations;
