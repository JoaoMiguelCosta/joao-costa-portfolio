import Container from "../../ui/Container/Container.jsx";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher.jsx";
import MenuToggle from "../../ui/MenuToggle/MenuToggle.jsx";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle.jsx";

import useMobileMenu from "./hooks/useMobileMenu.js";

import styles from "./SiteHeader.module.css";

const NAVIGATION_ID = "site-navigation";

export default function SiteHeader({
  brand,
  navigationItems,
  languageSwitcher,
  themeToggle,
  mobileMenu,
  accessibility,
}) {
  const { isMenuOpen, closeMenu, toggleMenu, triggerRef } = useMobileMenu();

  const menuPanelClassName = [
    styles.menuPanel,
    isMenuOpen ? styles.menuPanelOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

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
              onClick={closeMenu}
            >
              {brand.name}
            </a>

            <MenuToggle
              isOpen={isMenuOpen}
              controlsId={NAVIGATION_ID}
              openLabel={mobileMenu.openLabel}
              closeLabel={mobileMenu.closeLabel}
              onToggle={toggleMenu}
              triggerRef={triggerRef}
            />

            <div className={menuPanelClassName} id={NAVIGATION_ID}>
              <nav aria-label={accessibility.navigationAriaLabel}>
                <ul className={styles.navigationList}>
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} onClick={closeMenu}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.utilityControls}>
                <LanguageSwitcher
                  ariaLabel={languageSwitcher.ariaLabel}
                  portugueseLabel={languageSwitcher.portugueseLabel}
                  englishLabel={languageSwitcher.englishLabel}
                />

                <ThemeToggle
                  enableLightThemeLabel={themeToggle.enableLightThemeLabel}
                  enableDarkThemeLabel={themeToggle.enableDarkThemeLabel}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
