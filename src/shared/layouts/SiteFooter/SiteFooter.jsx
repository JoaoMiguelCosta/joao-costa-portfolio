import Container from "../../ui/Container/Container.jsx";

import styles from "./SiteFooter.module.css";

const currentYear = new Date().getFullYear();

function FooterLinkIcon({ src }) {
  return (
    <span className={styles.linkIconFrame} aria-hidden="true">
      <img
        className={styles.linkIcon}
        src={src}
        alt=""
        width="16"
        height="16"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export default function SiteFooter({ content }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.summary}>
            <div className={styles.identity}>
              <a className={styles.owner} href="/#inicio">
                {content.owner}
              </a>

              <p className={styles.role}>{content.role}</p>
            </div>

            <p className={styles.copyright}>
              © {currentYear} {content.owner}. {content.rights}
            </p>
          </div>

          <nav
            className={styles.links}
            aria-label={content.navigationAriaLabel}
          >
            {content.links.map((link) => (
              <a
                className={styles.link}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                key={link.id}
                aria-label={link.ariaLabel}
              >
                {link.icon ? <FooterLinkIcon src={link.icon} /> : null}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
