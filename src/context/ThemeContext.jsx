import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

const STORAGE_KEY = "re_theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : "light";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }, [theme]);

  const value = useMemo(() => {
    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    return { theme, setTheme, toggleTheme };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

