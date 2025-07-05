import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  currentTheme: 'light',
  changeCurrentTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const persistedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(persistedTheme || 'light');

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Remove any previous transition disabling class
    document.documentElement.classList.remove('no-transition');

    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }

    // Optional: Add a class to temporarily disable transitions (if needed)
    document.documentElement.classList.add('no-transition');
    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 1);

    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
