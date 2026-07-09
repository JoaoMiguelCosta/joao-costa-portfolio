import { createBrowserRouter } from "react-router-dom";

import { ROUTE_KEYS, getAllRoutePaths } from "../i18n/routing/index.js";
import RootLayout from "../shared/layouts/RootLayout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

import { HomePage, NotFoundPage, ProjectsPage } from "./lazyPages.js";

const projectsPageRoutes = getAllRoutePaths(ROUTE_KEYS.PROJECTS_PAGE).map(
  (path) => ({
    path: path.replace(/^\//, ""),
    element: <ProjectsPage />,
  }),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...projectsPageRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
