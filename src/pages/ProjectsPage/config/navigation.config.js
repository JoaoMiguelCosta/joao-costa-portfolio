export function getNavigation(translations) {
  const navigation = translations.projectsPage.navigation;

  return [
    {
      id: "farmacia-santa-casa",
      label: navigation.farmaciaSantaCasaLabel,
      href: "#farmacia-santa-casa",
    },
    {
      id: "sunlive-group",
      label: navigation.sunliveGroupLabel,
      href: "#sunlive-group",
    },
  ];
}
