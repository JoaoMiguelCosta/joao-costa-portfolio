import { useMemo } from "react";

import useLanguage from "../../i18n/useLanguage.js";

import AboutSection from "./sections/AboutSection/AboutSection.jsx";
import ContactSection from "./sections/ContactSection/ContactSection.jsx";
import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection/SkillsSection.jsx";

import { getHomePageConfig } from "./config/homePage.config.js";

export default function HomePage() {
  const { language } = useLanguage();

  const homePageConfig = useMemo(() => getHomePageConfig(language), [language]);

  return (
    <>
      <HeroSection content={homePageConfig.hero} />
      <ProjectsSection content={homePageConfig.projects} />
      <AboutSection content={homePageConfig.about} />
      <SkillsSection content={homePageConfig.skills} />
      <ContactSection content={homePageConfig.contact} />
    </>
  );
}
