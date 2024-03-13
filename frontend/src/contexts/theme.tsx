import { ReactElement, createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/localstorage";

interface themeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<themeContext | null>(null);

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState("light");
  const [localStoragetheme, setLocalStorageTheme] = useLocalStorage("theme");

  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
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
