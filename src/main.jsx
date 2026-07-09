import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App.jsx";
import LanguageProvider from "./i18n/language/LanguageProvider.jsx";
import ThemeProvider from "./theme/ThemeProvider.jsx";

import "./styles/tokens.css";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/utilities.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("O elemento raiz da aplicação não foi encontrado.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
