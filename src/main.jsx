import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider, { ThemeContext } from './utils/ThemeContext';
import App from './App';

const Root = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
