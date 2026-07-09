const projectsPage = {
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

  cta: {
    title: "Have a project that needs to get off the ground?",
    description:
      "I can help turn a real need into an organised, responsive web application that is ready to grow.",
    contactLabel: "Get in touch",
    homeLabel: "Back to homepage",
  },
};

export default projectsPage;
