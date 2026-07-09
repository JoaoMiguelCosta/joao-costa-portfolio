import useLanguage from "../../../i18n/useLanguage.js";
import { getTranslations } from "../../../i18n/translations/index.js";

import styles from "./Loading.module.css";

export default function Loading() {
  const { language } = useLanguage();
  const { label } = getTranslations(language).loading;

  return (
    <div className={styles.wrapper} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.srOnly}>{label}</span>
    </div>
  );
}
