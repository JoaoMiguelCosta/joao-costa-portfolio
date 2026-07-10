import { getTranslations } from "../../i18n/translations/index.js";
import useLanguage from "../../i18n/language/useLanguage.js";
import FeedbackPage from "../../shared/ui/FeedbackPage/FeedbackPage.jsx";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const { eyebrow, title, description, actionLabel } =
    getTranslations(language).notFoundPage;

  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <FeedbackPage
        eyebrow={eyebrow}
        title={title}
        description={description}
        actionLabel={actionLabel}
        actionHref="/"
        titleId="not-found-title"
      />
    </section>
  );
}
