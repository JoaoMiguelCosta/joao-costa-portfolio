import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useLanguage from "../../../i18n/language/useLanguage.js";
import { getPageKeyFromPathname } from "./pageRouteResolver.js";
import { getPageTitle } from "./pageTitles.js";

export default function DocumentTitleHandler() {
  const { language } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getPageTitle(getPageKeyFromPathname(pathname), language);
  }, [language, pathname]);

  return null;
}
