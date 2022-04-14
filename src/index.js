import React from "react";
import ReactDOM from "react-dom";

// import styling
import "./assets/css/hero.css";
import "./assets/css/navbar.css";
import "./assets/css/trading-view.css";
import "./assets/css/trading-dashboard.css";
import "./assets/css/search-input.css";
import "./assets/css/mobile-section.css";
import "./assets/css/profile.css";
import "./assets/css/popup.css";
import "./assets/css/mobile-leaderboard.css";

// import App.js
import App from './App';

import ThemeContextProvider from './contexts/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);