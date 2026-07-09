import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./CaseStudySection.module.css";

function NarrativeBlock({ title, body }) {
  return (
    <div className={styles.narrativeBlock}>
      <h3 className={styles.blockTitle}>{title}</h3>
      <p className={styles.blockBody}>{body}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div className={styles.listBlock}>
      <h3 className={styles.blockTitle}>{title}</h3>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyLink({ href, label }) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

export default function CaseStudySection({ data }) {
  const hasLinks = Boolean(data.links.website) || Boolean(data.links.repository);

  return (
    <section
      className={styles.section}
      id={data.id}
      aria-labelledby={`${data.id}-title`}
    >
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.role}>{data.role}</p>

            <h2 className={styles.title} id={`${data.id}-title`}>
              {data.title}
            </h2>

            <p className={styles.subtitle}>{data.subtitle}</p>
            <p className={styles.summary}>{data.summary}</p>
          </header>

          <div className={styles.narrative}>
            <NarrativeBlock title={data.context.title} body={data.context.body} />
            <NarrativeBlock title={data.problem.title} body={data.problem.body} />
            <NarrativeBlock title={data.solution.title} body={data.solution.body} />
          </div>

          <div className={styles.lists}>
            <ListBlock
              title={data.responsibilities.title}
              items={data.responsibilities.items}
            />
            <ListBlock title={data.features.title} items={data.features.items} />
            <ListBlock
              title={data.technicalDecisions.title}
              items={data.technicalDecisions.items}
            />
          </div>

          <div className={styles.result}>
            <h3 className={styles.resultTitle}>{data.result.title}</h3>
            <p className={styles.resultBody}>{data.result.body}</p>
          </div>

          <ul
            className={styles.technologies}
            aria-label={data.technologiesAriaLabel}
          >
            {data.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          {hasLinks ? (
            <div className={styles.links}>
              <CaseStudyLink
                href={data.links.website}
                label={data.linkLabels.website}
              />
              <CaseStudyLink
                href={data.links.repository}
                label={data.linkLabels.repository}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
