import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem("darkMode");
    if (stored) {
      return JSON.parse(stored);
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Store preference in localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};
