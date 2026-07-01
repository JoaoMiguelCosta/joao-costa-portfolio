const TECHNOLOGY_ICONS_PATH = "/icons/technologies";

function createTechnology(id, name, iconFilename = `${id}.svg`) {
  return {
    id,
    name,
    icon: `${TECHNOLOGY_ICONS_PATH}/${iconFilename}`,
  };
}

export const skillsData = {
  applied: [
    {
      id: "frontend",
      tools: [
        createTechnology("html5", "HTML5"),
        createTechnology("css3", "CSS3"),
        createTechnology("javascript", "JavaScript"),
        createTechnology("react", "React"),
        createTechnology("vite", "Vite"),
        createTechnology("figma", "Figma"),
      ],
    },
    {
      id: "backend",
      tools: [
        createTechnology("nodejs", "Node.js"),
        createTechnology("express", "Express"),
        createTechnology("rest-api", "REST API"),
      ],
    },

    {
      id: "data",
      tools: [
        createTechnology("postgresql", "PostgreSQL"),
        createTechnology("mongodb", "MongoDB"),
        createTechnology("prisma", "Prisma"),
      ],
    },

    {
      id: "quality-delivery",
      tools: [
        createTechnology("git", "Git"),
        createTechnology("github", "GitHub"),
        createTechnology("github-actions", "GitHub Actions"),
        createTechnology("vitest", "Vitest"),
        createTechnology("vercel", "Vercel"),
        createTechnology("render", "Render"),
      ],
    },
  ],

  learning: [
    {
      id: "modern-web",
      tools: [
        createTechnology("nextjs", "Next.js"),
        createTechnology("typescript", "TypeScript"),
        createTechnology("tailwindcss", "Tailwind CSS"),
      ],
    },

    {
      id: "ai-assisted",
      tools: [createTechnology("claude", "Claude Code")],
    },
  ],
};
