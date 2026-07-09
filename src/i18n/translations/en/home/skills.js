const skills = {
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
};

export default skills;
