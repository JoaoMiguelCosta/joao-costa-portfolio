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

    technologiesAriaLabel: "Technologies used in the project",

    items: {
      "farmacia-santa-casa": {
        type: "Full-stack web application",
        status: "Public demonstration",
        description:
          "An operational platform for managing residents, prescriptions, orders, regularisations, alerts and users across different areas and permission levels.",
        responsibility:
          "Research, requirements gathering, solution definition, frontend and backend development, testing, deployment and support.",
        imageAlt: "Farmácia Santa Casa application interface",
      },

      "sunlive-group": {
        type: "Multi-brand corporate web platform",
        status: "Published",
        description:
          "A corporate web platform containing several brands, each with its own visual identity, content, structure and navigation experience.",
        responsibility:
          "Research, requirements gathering, architecture definition, development, deployment and support.",
        imageAlt: "Sunlive Group website",
      },

      "ria-canal-hair-design": {
        type: "Corporate website",
        status: "Published",
        description:
          "A responsive corporate website presenting the salon's services, work, facilities, testimonials and contact information.",
        responsibility:
          "Research, client communication, solution definition, development, deployment and support.",
        imageAlt: "Ria Canal Hair Design website",
      },

      "wag-training-camp": {
        type: "Event website",
        status: "Published",
        description:
          "A website developed to present and communicate the WAG Training Camp as part of Sunlive's digital ecosystem.",
        responsibility:
          "Research, client communication, development, deployment and support.",
        imageAlt: "WAG Training Camp website",
      },

      "continental-cup": {
        type: "Competition website",
        status: "Published",
        description:
          "A website developed to present the Continental Cup, including institutional information and event-related content.",
        responsibility:
          "Research, client communication, development, deployment and support.",
        imageAlt: "Continental Cup website",
      },
    },
  },

  about: {
    eyebrow: "Professional background",
    title: "About me",

    paragraphs: [
      "I am a full-stack web developer working as a freelancer, building websites and applications adapted to the real needs of companies and organisations.",

      "I follow each project from research and requirements gathering through solution definition, development, deployment and support. I mainly work with JavaScript, React, Node.js, Express, Prisma and PostgreSQL.",

      "Before starting my career in web development, I served for six years in the Portuguese Navy. That experience strengthened skills such as discipline, responsibility, resilience, teamwork and the ability to perform under pressure.",

      "I currently aim to continue developing projects for clients and join a team where I can contribute practical experience, deepen my technical knowledge and help build solutions with real impact.",
    ],
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
