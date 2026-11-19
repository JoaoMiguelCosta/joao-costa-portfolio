export const projectsData = [
  {
    id: "farmacia-santa-casa",
    slug: "farmacia-santa-casa",
    title: "Farmácia Santa Casa",
    featured: true,
    priority: 1,

    technologies: [
      "React",
      "Vite",
      "CSS Modules",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],

    links: {
      website: "https://farmacia-santacasa-frontend-staging.onrender.com/",
      websiteEnvironment: "demo",
      repository: "https://github.com/JoaoMiguelCosta/farmacia-santa-casa-app",
    },

    demoAccess: {
      accounts: [
        {
          id: "santacasa",
          username: "demo.santacasa@sistema.local",
          password: "123456789123456789",
        },
        {
          id: "farmacia",
          username: "demo.farmacia@sistema.local",
          password: "123456789123456789",
        },
      ],
    },

    image: {
      src: "/images/projects/farmacia-santa-casa.webp",
      width: 1672,
      height: 941,
    },
  },

  {
    id: "ria-canal-hair-design",
    slug: "ria-canal-hair-design",
    title: "Ria Canal Hair Design",
    featured: true,
    priority: 2,

    technologies: ["React", "Vite", "JavaScript", "CSS Modules"],

    links: {
      website: "https://www.riacanalhairdesign.pt/",
      repository: "https://github.com/JoaoMiguelCosta/RiaCanalHairDesign",
    },

    image: {
      src: "/images/projects/ria-canal-hair-design.webp",
      width: 1672,
      height: 941,
    },
  },
];
