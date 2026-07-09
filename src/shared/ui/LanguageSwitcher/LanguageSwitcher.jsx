import { LANGUAGE_CODES } from "../../../i18n/language/constants.js";
import useLanguage from "../../../i18n/language/useLanguage.js";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  ariaLabel,
  portugueseLabel,
  englishLabel,
}) {
  const { language, setLanguage } = useLanguage();

  const isPortuguese = language === LANGUAGE_CODES.PORTUGUESE;

  const isEnglish = language === LANGUAGE_CODES.ENGLISH;

  return (
    <div className={styles.switcher} role="group" aria-label={ariaLabel}>
      <button
        className={`${styles.option} ${isPortuguese ? styles.active : ""}`}
        type="button"
        aria-label={portugueseLabel}
        aria-pressed={isPortuguese}
        onClick={() => setLanguage(LANGUAGE_CODES.PORTUGUESE)}
      >
        PT
      </button>

      <button
        className={`${styles.option} ${isEnglish ? styles.active : ""}`}
        type="button"
        aria-label={englishLabel}
        aria-pressed={isEnglish}
        onClick={() => setLanguage(LANGUAGE_CODES.ENGLISH)}
      >
        EN
      </button>
    </div>
  );
}
