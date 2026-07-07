import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./ContactSection.module.css";

export default function ContactSection({ content }) {
  return (
    <section
      className={styles.section}
      id="contacto"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className={styles.panel}>
          <div className={styles.content}>
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              titleId="contact-title"
              description={content.description}
            />

            <p className={styles.availability}>{content.availability}</p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href={content.email.href}>
                {content.email.actionLabel}
              </a>
            </div>

            <p className={styles.emailLine}>
              <span>{content.email.label}</span>

              <a href={content.email.href}>{content.email.value}</a>
            </p>
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

            <div className={styles.resourceGroup}>
              <h3 className={styles.resourceTitle}>
                {content.documents.title}
              </h3>

              <div className={styles.resourceLinks}>
                {content.documents.links.map((link) => (
                  <a
                    className={styles.resourceLink}
                    href={link.href}
                    download={link.download}
                    key={link.id}
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.resourceGroup}>
              <h3 className={styles.resourceTitle}>{content.profiles.title}</h3>

              <div className={styles.resourceLinks}>
                {content.profiles.links.map((link) => (
                  <a
                    className={styles.resourceLink}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
