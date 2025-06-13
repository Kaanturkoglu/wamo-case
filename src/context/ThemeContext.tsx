import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../constants/colors";

type ThemeName = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeName;                      
  themeData: typeof lightTheme;          
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialTheme = (): ThemeName => {
    const storedTheme = localStorage.getItem("theme") as ThemeName | null;
    return storedTheme === "dark" ? "dark" : "dark"; 
  };

  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  const themeData = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;  
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeData, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};