import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../../../shared/ui/SectionHeader/SectionHeader.jsx";

import styles from "./ProjectsIntroSection.module.css";

export default function ProjectsIntroSection({ content }) {
  return (
    <section
      className={styles.section}
      aria-labelledby="projects-intro-title"
    >
      <Container>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <SectionHeader
              title={content.title}
              titleId="projects-intro-title"
              description={content.description}
            />
          </div>

          <ul className={styles.highlights}>
            {content.highlights.map((highlight) => (
              <li className={styles.highlight} key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
