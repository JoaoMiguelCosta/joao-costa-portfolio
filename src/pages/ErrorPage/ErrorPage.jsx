import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { getTranslations } from "../../i18n/translations/index.js";
import useLanguage from "../../i18n/useLanguage.js";
import Container from "../../shared/ui/Container/Container.jsx";
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
      <Container>
        <div className={styles.content}>
          <p className="u-eyebrow">{statusCode ?? eyebrow}</p>

          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>

          <a className={styles.action} href="/">
            {actionLabel}
          </a>
        </div>
      </Container>
    </div>
  );
}
