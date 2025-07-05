import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider, { ThemeContext } from './utils/ThemeContext';
import App from './App';

const Root = () => {
  const { currentTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
