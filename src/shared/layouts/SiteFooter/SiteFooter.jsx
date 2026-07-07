import Container from "../../ui/Container/Container.jsx";

import styles from "./SiteFooter.module.css";

const currentYear = new Date().getFullYear();

export default function SiteFooter({ content }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.identity}>
            <a className={styles.owner} href="#inicio">
              {content.owner}
            </a>

            <p className={styles.role}>{content.role}</p>
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
                {link.label}
              </a>
            ))}
          </nav>

          <p className={styles.copyright}>
            © {currentYear} {content.owner}. {content.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
