import useTheme from "../../../theme/useTheme.js";

import MoonIcon from "./icons/MoonIcon.jsx";
import SunIcon from "./icons/SunIcon.jsx";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({
  label,
  enableLightThemeLabel,
  enableDarkThemeLabel,
}) {
  const { isDarkTheme, toggleTheme } = useTheme();

  const actionLabel = isDarkTheme
    ? enableLightThemeLabel
    : enableDarkThemeLabel;

  return (
    <button
      className={styles.button}
      type="button"
      aria-label={label}
      aria-pressed={isDarkTheme}
      title={actionLabel}
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
