import Container from "../../ui/Container/Container.jsx";

import styles from "./SiteHeader.module.css";

export default function SiteHeader({ brand, navigationItems }) {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Saltar para o conteúdo principal
      </a>

      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <a
              className={styles.brand}
              href={brand.href}
              aria-label={brand.ariaLabel}
            >
              {brand.name}
            </a>

            <nav aria-label="Navegação principal">
              <ul className={styles.navigationList}>
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
