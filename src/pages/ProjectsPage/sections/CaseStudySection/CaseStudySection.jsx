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

function CaseStudyLink({ href, label, ariaLabel }) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={`${styles.link} u-surface-link`}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

export default function CaseStudySection({ data }) {
  const hasLinks = Boolean(data.links.website) || Boolean(data.links.repository);
  const demoAccessTitleId = `${data.id}-demo-access-title`;

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
                ariaLabel={data.websiteLinkAriaLabel}
              />
              <CaseStudyLink
                href={data.links.repository}
                label={data.linkLabels.repository}
              />
            </div>
          ) : null}

          {data.demoNote ? (
            <p className={styles.demoNote}>{data.demoNote}</p>
          ) : null}

          {data.demoAccess ? (
            <section
              className={styles.demoAccess}
              aria-labelledby={demoAccessTitleId}
            >
              <h4 className={styles.demoAccessTitle} id={demoAccessTitleId}>
                {data.demoAccess.title}
              </h4>

              <div className={styles.demoAccounts}>
                {data.demoAccess.accounts.map((account) => (
                  <article className={styles.demoAccount} key={account.id}>
                    <h5 className={styles.demoAccountTitle}>{account.name}</h5>

                    <dl className={styles.demoCredentials}>
                      <div className={styles.demoCredential}>
                        <dt>{data.demoAccess.usernameLabel}</dt>
                        <dd>{account.username}</dd>
                      </div>

                      <div className={styles.demoCredential}>
                        <dt>{data.demoAccess.passwordLabel}</dt>
                        <dd>{account.password}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
