import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../../../shared/ui/SectionHeader/SectionHeader.jsx";

import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ content }) {
  return (
    <section
      className={styles.section}
      id={content.sectionId}
      aria-labelledby="projects-title"
    >
      <Container>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              titleId="projects-title"
              description={content.description}
            />
          </div>

          <div className={styles.groups}>
            <section
              className={styles.projectGroup}
              aria-labelledby="featured-projects-title"
            >
              <h3 className={styles.groupTitle} id="featured-projects-title">
                {content.featuredTitle}
              </h3>

              <div className={`${styles.projectGrid} ${styles.featuredGrid}`}>
                {content.featuredItems.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant="featured"
                    labels={content.cardLabels}
                  />
                ))}
              </div>
            </section>

            <section
              className={styles.projectGroup}
              aria-labelledby="other-projects-title"
            >
              <h3 className={styles.groupTitle} id="other-projects-title">
                {content.otherTitle}
              </h3>

              <div className={`${styles.projectGrid} ${styles.otherGrid}`}>
                {content.otherItems.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant="compact"
                    labels={content.cardLabels}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
