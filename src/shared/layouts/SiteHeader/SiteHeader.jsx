import Container from "../../ui/Container/Container.jsx";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher.jsx";
import MenuToggle from "../../ui/MenuToggle/MenuToggle.jsx";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle.jsx";

import useMobileMenu from "./useMobileMenu.js";

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
  const { isMenuOpen, closeMenu, toggleMenu, triggerRef, panelRef } =
    useMobileMenu();

  const hasNavigationItems = navigationItems.length > 0;

  const menuPanelClassName = [
    styles.menuPanel,
    isMenuOpen ? styles.menuPanelOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const utilityControls = (
    <div className={styles.utilityControls}>
      <LanguageSwitcher
        ariaLabel={languageSwitcher.ariaLabel}
        portugueseLabel={languageSwitcher.portugueseLabel}
        englishLabel={languageSwitcher.englishLabel}
      />

      <ThemeToggle
        label={themeToggle.label}
        enableLightThemeLabel={themeToggle.enableLightThemeLabel}
        enableDarkThemeLabel={themeToggle.enableDarkThemeLabel}
      />
    </div>
  );

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

            {hasNavigationItems ? (
              <>
                <MenuToggle
                  isOpen={isMenuOpen}
                  controlsId={NAVIGATION_ID}
                  openLabel={mobileMenu.openLabel}
                  closeLabel={mobileMenu.closeLabel}
                  onToggle={toggleMenu}
                  triggerRef={triggerRef}
                />

                <div
                  className={menuPanelClassName}
                  id={NAVIGATION_ID}
                  ref={panelRef}
                >
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

                  {utilityControls}
                </div>
              </>
            ) : (
              utilityControls
            )}
          </div>
        </Container>
      </header>
    </>
  );
}
