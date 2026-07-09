import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { hashTargetAliases } from "../../i18n/routes.js";
import { shouldSuppressHashScroll } from "./hashScrollSuppression.js";

export default function HashScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return undefined;
    }

    if (shouldSuppressHashScroll(hash)) {
      return undefined;
    }

    const rawElementId = decodeURIComponent(hash.slice(1));
    const elementId = hashTargetAliases[rawElementId] ?? rawElementId;

    function scrollToElement() {
      const element = document.getElementById(elementId);

      if (!element) {
        return;
      }

      element.scrollIntoView({ block: "start" });
    }

    const frameId = requestAnimationFrame(scrollToElement);

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}
