import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher.jsx";
import Container from "../../ui/Container/Container.jsx";

import styles from "./SiteHeader.module.css";

export default function SiteHeader({
  brand,
  navigationItems,
  languageSwitcher,
  accessibility,
}) {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        {accessibility.skipLink}
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

            <div className={styles.headerControls}>
              <nav aria-label={accessibility.navigationAriaLabel}>
                <ul className={styles.navigationList}>
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <LanguageSwitcher
                ariaLabel={languageSwitcher.ariaLabel}
                portugueseLabel={languageSwitcher.portugueseLabel}
                englishLabel={languageSwitcher.englishLabel}
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
