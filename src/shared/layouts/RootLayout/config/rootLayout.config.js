import { getTranslations } from "../../../../i18n/translations/index.js";

import { getFooterConfig } from "./footer.config.js";
import { getHeaderConfig } from "./header.config.js";

export function getRootLayoutConfig(language) {
  const translations = getTranslations(language);

  return {
    header: getHeaderConfig(translations, language),
    footer: getFooterConfig(translations, language),
  };
}
