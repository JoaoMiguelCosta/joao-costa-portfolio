import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { getTranslations } from "../../i18n/translations/index.js";
import useLanguage from "../../i18n/language/useLanguage.js";
import { getPageTitle } from "../../shared/routing/documentTitle/pageTitles.js";

export default function useErrorPage() {
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

  return {
    eyebrow: statusCode ?? eyebrow,
    title,
    description,
    actionLabel,
    actionHref: "/",
  };
}
