const projects = {
  eyebrow: "Selected work",
  title: "Selected projects",
  description:
    "A selection of real projects that I followed from requirements gathering through development, deployment and ongoing support.",

  featuredTitle: "Featured projects",
  otherTitle: "Other projects",

  responsibilityLabel: "Responsibility",

  links: {
    website: "Visit website",
    repository: "View project on GitHub",
    demo: {
      label: "View Demo",
      ariaLabel: "Open the Farmácia Santa Casa demo",
    },
    demoAccess: "Demo access",
  },

  demoAccessModal: {
    title: "Demo access",
    description: "Choose the profile you want to use to test the application.",
    usernameLabel: "Username",
    passwordLabel: "Password",
    accountNames: {
      santacasa: "Santa Casa",
      farmacia: "Pharmacy",
    },
    copyLabel: "Copy",
    copiedLabel: "Copied",
    openDemoLabel: "Open demo",
    closeLabel: "Close",
    note: "These accounts use demonstration data only.",
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

    "ria-canal-hair-design": {
      type: "Corporate website",
      status: "Published",
      description:
        "A responsive website presenting the salon, services, work, facilities, team, testimonials, Instagram content and contact information.",
      responsibility:
        "Research, client communication, solution definition, development, deployment and support.",
      imageAlt: "Ria Canal Hair Design website homepage",
    },
  },
};

export default projects;
