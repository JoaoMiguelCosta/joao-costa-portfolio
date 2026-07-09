import Container from "../../../../shared/ui/Container/Container.jsx";
import IconFrame from "../../../../shared/ui/IconFrame/IconFrame.jsx";

import styles from "./ContactSection.module.css";

function ResourceGroup({ title, links, isExternal = false }) {
  return (
    <div className={styles.resourceGroup}>
      <h3 className={styles.resourceTitle}>{title}</h3>

      <div className={styles.resourceLinks}>
        {links.map((link) => (
          <a
            className={styles.resourceLink}
            href={link.href}
            download={link.download || undefined}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            key={link.id}
            aria-label={link.ariaLabel}
          >
            <IconFrame src={link.icon} size={20} />

            <span className={styles.resourceLinkLabel}>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactSection({ content }) {
  return (
    <section
      className={styles.section}
      id={content.sectionId}
      aria-labelledby="contact-title"
    >
      <Container>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

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
                <a className={styles.primaryAction} href={content.email.href}>
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
