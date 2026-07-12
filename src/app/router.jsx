import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "../shared/layouts/RootLayout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

import { HomePage, NotFoundPage } from "./lazyPages.js";

// A página dedicada de projetos foi removida — estes URLs antigos (PT/EN)
// continuam a existir noutros lados (motores de busca, marcadores) e
// passam a apontar para a secção de projetos na homepage. O LocalizedRouteSync
// ajusta o hash para o idioma atual caso não coincida.
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
      {
        path: "projetos",
        element: <Navigate to="/#projetos" replace />,
      },
      {
        path: "projects",
        element: <Navigate to="/#projects" replace />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
