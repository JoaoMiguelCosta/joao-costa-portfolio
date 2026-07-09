import Container from "../../ui/Container/Container.jsx";
import IconFrame from "../../ui/IconFrame/IconFrame.jsx";

import styles from "./SiteFooter.module.css";

const currentYear = new Date().getFullYear();

export default function SiteFooter({ content }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.summary}>
            <div className={styles.identity}>
              <a className={styles.owner} href={content.ownerHref}>
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
                {link.icon ? <IconFrame src={link.icon} size={16} /> : null}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
