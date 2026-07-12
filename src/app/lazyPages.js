import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage.jsx"),
);
