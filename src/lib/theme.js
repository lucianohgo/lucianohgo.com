import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [ref, setTheme] = useState({
    theme: 'light',
    toggleTheme: function toggleTheme() {
      setTheme((state) => {
        const theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        return { theme, toggleTheme };
      });
    },
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme((state) => ({ ...state, theme: 'dark' }));
    }
  }, []);

  return <ThemeContext.Provider value={ref}>{children}</ThemeContext.Provider>;
}

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme];
}
