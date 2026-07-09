import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../shared/layouts/RootLayout/RootLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
