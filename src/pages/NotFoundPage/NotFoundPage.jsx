import { getTranslations } from "../../i18n/translations/index.js";
import useLanguage from "../../i18n/useLanguage.js";
import Container from "../../shared/ui/Container/Container.jsx";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const { eyebrow, title, description, actionLabel } =
    getTranslations(language).notFoundPage;

  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h1 className={styles.title} id="not-found-title">
            {title}
          </h1>

          <p className={styles.description}>{description}</p>

          <a className={styles.action} href="/">
            {actionLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
