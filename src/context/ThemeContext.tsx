import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../constants/colors";

type ThemeName = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeName;
  themeData: typeof lightTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export default ThemeContext;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getInitialTheme = (): ThemeName => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      return "light"; // Default for SSR
    }

    // Get stored theme from localStorage
    const storedTheme = localStorage.getItem("theme") as ThemeName | null;
    
    // If we have a stored theme, use it
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    
    // If no stored theme, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    
    // Default to light theme
    return "light";
  };

  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);
  const themeData = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      document.documentElement.className = theme;
      
      // Optional: Also set data attribute for CSS
      document.documentElement.setAttribute('data-theme', theme);
    }
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