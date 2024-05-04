import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/localstorage";

type theme = "dark" | "light";

type themeContext = {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<themeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<theme>("light");
  const [localStoragetheme, setLocalStorageTheme] = useLocalStorage("theme");

  const toggleTheme = () => {
    const newTheme: theme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    setLocalStorageTheme(newTheme);
  };

  useEffect(() => {
    if (localStoragetheme) {
      setTheme(localStoragetheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
