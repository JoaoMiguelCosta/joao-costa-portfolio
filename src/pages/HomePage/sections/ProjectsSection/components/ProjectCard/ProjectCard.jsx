import styles from "./ProjectCard.module.css";

function ProjectLink({ href, label, projectTitle, variant, external = false }) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={`${styles.link} ${styles[variant]}`}
      href={href}
      aria-label={`${label}: ${projectTitle}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export default function ProjectCard({ project, variant, labels }) {
  const cardClassName = [
    styles.card,
    variant === "featured" ? styles.featured : styles.compact,
  ].join(" ");

  return (
    <article className={cardClassName}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <p className={styles.type}>{project.type}</p>
          <p className={styles.status}>{project.status}</p>
        </div>

        <h4 className={styles.title}>{project.title}</h4>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.responsibility}>
          <p className={styles.responsibilityLabel}>{labels.responsibility}</p>

          <p className={styles.responsibilityText}>{project.responsibility}</p>
        </div>

        <ul
          className={styles.tagList}
          aria-label={project.technologiesAriaLabel}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className={styles.links}>
          <ProjectLink
            href={project.links.website}
            label={labels.links.website}
            projectTitle={project.title}
            variant="primaryLink"
            external
          />

          <ProjectLink
            href={project.links.repository}
            label={labels.links.repository}
            projectTitle={project.title}
            variant="secondaryLink"
            external
          />

          <ProjectLink
            href={project.links.caseStudy}
            label={labels.links.caseStudy}
            projectTitle={project.title}
            variant="secondaryLink"
          />
        </div>
      </div>
    </article>
  );
}
