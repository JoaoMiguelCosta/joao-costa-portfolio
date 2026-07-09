import { useMemo } from "react";

import useLanguage from "../../i18n/useLanguage.js";
import Container from "../../shared/ui/Container/Container.jsx";

import { getProjectsPageConfig } from "./config/projectsPage.config.js";

import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  const { language } = useLanguage();

  const projectsPageConfig = useMemo(
    () => getProjectsPageConfig(language),
    [language],
  );

  return (
    <section className={styles.section} aria-labelledby="projects-page-title">
      <Container>
        <p className={styles.eyebrow}>{projectsPageConfig.eyebrow}</p>

        <h1 className={styles.title} id="projects-page-title">
          {projectsPageConfig.title}
        </h1>

        <p className={styles.description}>{projectsPageConfig.description}</p>
      </Container>
    </section>
  );
}
