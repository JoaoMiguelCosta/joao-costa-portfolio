import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ content }) {
  return (
    <section
      className={styles.section}
      id="projetos"
      aria-labelledby="projects-title"
    >
      <Container>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            titleId="projects-title"
            description={content.description}
          />
        </div>

        <div className={styles.projectGrid}>
          {content.items.map((project) => (
            <article className={styles.projectCard} key={project.id}>
              <div>
                <p className={styles.projectType}>{project.type}</p>

                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <ul
                className={styles.tagList}
                aria-label={project.technologiesAriaLabel}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
