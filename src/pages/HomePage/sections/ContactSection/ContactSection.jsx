import Container from "../../../../shared/ui/Container/Container.jsx";

import ResourceGroup from "./components/ResourceGroup/ResourceGroup.jsx";

import styles from "./ContactSection.module.css";

export default function ContactSection({ content }) {
  return (
    <section
      className={styles.section}
      id={content.sectionId}
      aria-labelledby="contact-title"
    >
      <Container>
        <div className={styles.inner}>
          <p className={`${styles.eyebrow} u-eyebrow`}>{content.eyebrow}</p>

          <div className={styles.panel}>
            <div className={styles.intro}>
              <h2 className={styles.title} id="contact-title">
                {content.title}
              </h2>

              <div className={styles.textBlock}>
                <p className={styles.description}>{content.description}</p>
                <p className={styles.availability}>{content.availability}</p>
              </div>

              <div className={styles.contactRow}>
                <a
                  className={`${styles.primaryAction} u-action-link`}
                  href={content.email.href}
                >
                  {content.email.actionLabel}
                </a>

                <p className={styles.emailLine}>
                  <span className={styles.emailLabel}>
                    {content.email.label}
                  </span>

                  <a className={styles.emailValue} href={content.email.href}>
                    {content.email.value}
                  </a>
                </p>
              </div>
            </div>

            <aside
              className={styles.sidebar}
              aria-label={content.detailsAriaLabel}
            >
              <dl className={styles.details}>
                {content.details.map((detail) => (
                  <div className={styles.detail} key={detail.id}>
                    <dt className={styles.detailLabel}>{detail.label}</dt>
                    <dd className={styles.detailValue}>{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <div className={styles.resourceGrid}>
                <ResourceGroup
                  title={content.documents.title}
                  links={content.documents.links}
                />

                <ResourceGroup
                  title={content.profiles.title}
                  links={content.profiles.links}
                  isExternal
                />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
