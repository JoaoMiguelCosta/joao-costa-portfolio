import { Suspense, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

import useLanguage from "../../../i18n/useLanguage.js";

import SiteFooter from "../SiteFooter/SiteFooter.jsx";
import SiteHeader from "../SiteHeader/SiteHeader.jsx";

import DocumentTitleHandler from "../../routing/DocumentTitleHandler.jsx";
import HashScrollHandler from "../../routing/HashScrollHandler.jsx";
import LocalizedRouteSync from "../../routing/LocalizedRouteSync.jsx";
import Loading from "../../ui/Loading/Loading.jsx";

import { getRootLayoutConfig } from "./config/rootLayout.config.js";

export default function RootLayout() {
  const { language } = useLanguage();
  const { pathname } = useLocation();

  const rootLayoutConfig = useMemo(
    () => getRootLayoutConfig(language, pathname),
    [language, pathname],
  );

  return (
    <>
      <LocalizedRouteSync />
      <DocumentTitleHandler />

      <SiteHeader {...rootLayoutConfig.header} />

      <main id="main-content">
        <Suspense fallback={<Loading />}>
          <Outlet />
          <HashScrollHandler />
        </Suspense>
      </main>

      <SiteFooter content={rootLayoutConfig.footer} />
    </>
  );
}
