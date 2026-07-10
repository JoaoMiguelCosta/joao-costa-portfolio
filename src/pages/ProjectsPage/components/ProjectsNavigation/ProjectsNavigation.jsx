import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./ProjectsNavigation.module.css";

export default function ProjectsNavigation({ items, ariaLabel }) {
  return (
    <nav className={styles.nav} aria-label={ariaLabel}>
      <Container>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <a className={`${styles.link} u-surface-link`} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
