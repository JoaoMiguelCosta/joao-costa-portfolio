import { useContext } from "react";

import { ThemeContext } from "./ThemeContext.js";

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve ser utilizado dentro de ThemeProvider.");
  }

  return context;
}
