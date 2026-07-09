const home = {
  hero: {
    title: "I build web solutions designed to solve real business needs.",
    description:
      "I create websites and web applications that help businesses present their services, organise processes, reduce manual work and improve the user experience. I follow each project from planning to deployment, support and future improvements.",

    actions: [
      {
        label: "View projects",
        anchorKey: "projects",
        variant: "primary",
      },
      {
        label: "Get in touch",
        anchorKey: "contact",
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

    caseStudiesCtaLabel: "View full case studies",

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
};

export default home;
