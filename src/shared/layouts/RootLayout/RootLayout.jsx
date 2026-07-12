import { Suspense, useMemo } from "react";
import { Outlet } from "react-router-dom";

import useLanguage from "../../../i18n/language/useLanguage.js";

import SiteFooter from "../SiteFooter/SiteFooter.jsx";
import SiteHeader from "../SiteHeader/SiteHeader.jsx";

import DocumentTitleHandler from "../../routing/documentTitle/DocumentTitleHandler.jsx";
import HashScrollHandler from "../../routing/hashScroll/HashScrollHandler.jsx";
import LocalizedRouteSync from "../../routing/LocalizedRouteSync.jsx";
import Loading from "../../ui/Loading/Loading.jsx";

import { getRootLayoutConfig } from "./config/rootLayout.config.js";

export default function RootLayout() {
  const { language } = useLanguage();

  const rootLayoutConfig = useMemo(
    () => getRootLayoutConfig(language),
    [language],
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
