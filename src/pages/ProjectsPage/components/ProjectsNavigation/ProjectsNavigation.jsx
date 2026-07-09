import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./ProjectsNavigation.module.css";

export default function ProjectsNavigation({ items }) {
  return (
    <nav className={styles.nav}>
      <Container>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <a className={styles.link} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
