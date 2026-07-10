import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getLocalizedHash, getLocalizedPathname } from "../../i18n/routing/index.js";
import useLanguage from "../../i18n/language/useLanguage.js";
import { suppressNextHashScroll } from "./hashScroll/hashScrollSuppression.js";

export default function LocalizedRouteSync() {
  const { language } = useLanguage();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const localizedPathname = getLocalizedPathname(pathname, language) ?? pathname;
    const localizedHash = getLocalizedHash(hash, language) ?? hash;

    if (localizedPathname === pathname && localizedHash === hash) {
      return;
    }

    // Esta navegação corrige o URL para o idioma atual — não é um clique
    // intencional do utilizador, por isso não deve provocar scroll.
    suppressNextHashScroll(localizedHash);

    navigate(`${localizedPathname}${search}${localizedHash}`, {
      replace: true,
    });
  }, [language, pathname, search, hash, navigate]);

  return null;
}
