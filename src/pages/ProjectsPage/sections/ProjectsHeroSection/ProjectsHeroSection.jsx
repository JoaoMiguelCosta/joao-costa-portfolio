import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./ProjectsHeroSection.module.css";

export default function ProjectsHeroSection({ content }) {
  return (
    <section className={styles.hero} aria-labelledby="projects-hero-title">
      <Container>
        <div className={styles.content}>
          <p className={`${styles.eyebrow} u-eyebrow`}>{content.eyebrow}</p>

          <h1 className={styles.title} id="projects-hero-title">
            {content.title}
          </h1>

          <p className={styles.description}>{content.description}</p>
        </div>
      </Container>
    </section>
  );
}
