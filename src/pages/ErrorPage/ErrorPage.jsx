import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { getTranslations } from "../../i18n/translations/index.js";
import useLanguage from "../../i18n/language/useLanguage.js";
import FeedbackPage from "../../shared/ui/FeedbackPage/FeedbackPage.jsx";
import { getPageTitle } from "../../shared/routing/pageTitles.js";

import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const { language } = useLanguage();
  const { eyebrow, title, description, actionLabel } =
    getTranslations(language).errorPage;

  const error = useRouteError();
  const statusCode = isRouteErrorResponse(error) ? error.status : null;

  useEffect(() => {
    console.error(error);
  }, [error]);

  useEffect(() => {
    document.title = getPageTitle("error", language);
  }, [language]);

  return (
    <div className={styles.page}>
      <FeedbackPage
        eyebrow={statusCode ?? eyebrow}
        title={title}
        description={description}
        actionLabel={actionLabel}
        actionHref="/"
      />
    </div>
  );
}
