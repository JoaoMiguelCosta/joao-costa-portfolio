import SiteFooter from "../../shared/layouts/SiteFooter/SiteFooter.jsx";
import SiteHeader from "../../shared/layouts/SiteHeader/SiteHeader.jsx";

import AboutSection from "./sections/AboutSection/AboutSection.jsx";
import ContactSection from "./sections/ContactSection/ContactSection.jsx";
import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection/SkillsSection.jsx";

import { homePageConfig } from "./config/homePage.config.js";

export default function HomePage() {
  return (
    <>
      <SiteHeader
        brand={homePageConfig.brand}
        navigationItems={homePageConfig.navigationItems}
      />

      <main id="main-content">
        <HeroSection content={homePageConfig.hero} />
        <ProjectsSection content={homePageConfig.projects} />
        <AboutSection content={homePageConfig.about} />
        <SkillsSection content={homePageConfig.skills} />
        <ContactSection content={homePageConfig.contact} />
      </main>

      <SiteFooter content={homePageConfig.footer} />
    </>
  );
}
