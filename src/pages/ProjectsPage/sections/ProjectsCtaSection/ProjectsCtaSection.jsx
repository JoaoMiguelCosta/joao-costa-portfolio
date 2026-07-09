import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./ProjectsCtaSection.module.css";

export default function ProjectsCtaSection({ content }) {
  return (
    <section className={styles.section} aria-labelledby="projects-cta-title">
      <Container>
        <div className={styles.panel}>
          <h2 className={styles.title} id="projects-cta-title">
            {content.title}
          </h2>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            {content.actions.map((action, index) => (
              <a
                className={index === 0 ? styles.primaryAction : styles.secondaryAction}
                href={action.href}
                key={action.id}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
