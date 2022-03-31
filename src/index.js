import React from "react";
import ReactDOM from "react-dom";

// import styling
import "./assets/hero.css";
import "./assets/trading-view.css";
import "./assets/trading-dashboard.css";

// import App.js
import App from './App';

import ThemeContextProvider from './contexts/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);