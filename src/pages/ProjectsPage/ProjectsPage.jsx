import { useMemo } from "react";

import useLanguage from "../../i18n/useLanguage.js";

import ProjectsNavigation from "./components/ProjectsNavigation/ProjectsNavigation.jsx";
import CaseStudySection from "./sections/CaseStudySection/CaseStudySection.jsx";
import ProjectsCtaSection from "./sections/ProjectsCtaSection/ProjectsCtaSection.jsx";
import ProjectsHeroSection from "./sections/ProjectsHeroSection/ProjectsHeroSection.jsx";
import ProjectsIntroSection from "./sections/ProjectsIntroSection/ProjectsIntroSection.jsx";

import { getProjectsPageConfig } from "./config/projectsPage.config.js";

export default function ProjectsPage() {
  const { language } = useLanguage();

  const page = useMemo(() => getProjectsPageConfig(language), [language]);

  return (
    <>
      <ProjectsHeroSection content={page.hero} />
      <ProjectsIntroSection content={page.intro} />
      <ProjectsNavigation items={page.navigation} />

      {page.caseStudies.map((caseStudy) => (
        <CaseStudySection key={caseStudy.id} data={caseStudy} />
      ))}

      <ProjectsCtaSection content={page.cta} />
    </>
  );
}
