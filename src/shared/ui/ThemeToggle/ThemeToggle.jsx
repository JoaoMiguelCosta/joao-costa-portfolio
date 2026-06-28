import useTheme from "../../../theme/useTheme.js";

import MoonIcon from "./icons/MoonIcon.jsx";
import SunIcon from "./icons/SunIcon.jsx";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({
  enableLightThemeLabel,
  enableDarkThemeLabel,
}) {
  const { isDarkTheme, toggleTheme } = useTheme();

  const accessibleLabel = isDarkTheme
    ? enableLightThemeLabel
    : enableDarkThemeLabel;

  return (
    <button
      className={styles.button}
      type="button"
      aria-label={accessibleLabel}
      title={accessibleLabel}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <SunIcon className={styles.icon} />
      ) : (
        <MoonIcon className={styles.icon} />
      )}
    </button>
  );
}
