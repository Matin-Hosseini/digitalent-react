import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/localstorage";

type Theme = "dark" | "light";

type ThemeContextProps = {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [localStoragetheme, setLocalStorageTheme] = useLocalStorage("theme");

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    setLocalStorageTheme(newTheme);
  };

  useEffect(() => {
    if (localStoragetheme) {
      setTheme(localStoragetheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme context muse be used in a ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
