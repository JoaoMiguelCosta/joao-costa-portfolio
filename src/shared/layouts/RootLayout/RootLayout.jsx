import { useMemo } from "react";
import { Outlet } from "react-router-dom";

import useLanguage from "../../../i18n/useLanguage.js";

import SiteFooter from "../SiteFooter/SiteFooter.jsx";
import SiteHeader from "../SiteHeader/SiteHeader.jsx";

import { getRootLayoutConfig } from "./config/rootLayout.config.js";

export default function RootLayout() {
  const { language } = useLanguage();

  const rootLayoutConfig = useMemo(() => getRootLayoutConfig(language), [language]);

  return (
    <>
      <SiteHeader {...rootLayoutConfig.header} />

      <main id="main-content">
        <Outlet />
      </main>

      <SiteFooter content={rootLayoutConfig.footer} />
    </>
  );
}
