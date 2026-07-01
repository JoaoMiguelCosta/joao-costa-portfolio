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
      "Technologies and practices applied to the development, validation and deployment of real projects.",

    technologiesAriaLabel: "Technologies in",

    items: {
      frontend: {
        title: "Frontend",
        description:
          "Building responsive, accessible interfaces organised into reusable components.",
      },

      backend: {
        title: "Backend",
        description:
          "Developing REST APIs, authentication, authorisation, validation and business rules.",
      },

      data: {
        title: "Databases",
        description: "Modelling, persisting and managing relational data.",
      },

      "quality-delivery": {
        title: "Quality and delivery",
        description:
          "Version control, testing, validation, deployment and project maintenance.",
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
