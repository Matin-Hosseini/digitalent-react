import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    let newTheme;
    setTheme((current) => {
      newTheme = current === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
