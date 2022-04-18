import React, { useState, useContext, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from './contexts/ThemeContext';

// import components
// import Chart from "./components/Chart";
// import Navbar from "./components/Navbar";
// import LongShort from "./components/LongShort";
// import CryptoForex from "./components/CryptoForex";

// import PopupOverlay from "./components/mobile-view/PopupOverlay";
// import LongShortButton from "./components/mobile-view/LongShortButton";
// import LowBalanceOverlay from "./components/mobile-view/LowBalanceOverlay"
// import Liquidity from "./components/mobile-view/Liquidity";
// import ActivityMobile from "./components/mobile-view/ActivityMobile";

// import OpenTrads from "./components/OpenTrades";
// import OpenOrders from "./components/OpenOrders";

// import MediumSection from "./components/MediumSection";

// import AllTrades from "./components/AllTrades";
// import LeaderBoard from "./components/LeaderBoard";
// import PersonalTrading from "./components/PersonalTrading";

// import NFTOrders from "./components/NFTOrders";


// import Footer from "./components/Footer";

// import LeaderBoardMobile from "./components/mobile-view/LeaderBoardMobile";

function App() {
  const bottomRef = useRef();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [showSearch, setShowSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLowBalanceOverlay, setShowLowBalanceOverlay] = useState(false);

  const [showLongShort, setShowLongShort] = useState(false);

  const handleShowLongShort = () => {
    setShowLongShort(true);
    setShowLowBalanceOverlay(true);
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  // onHidePaymentOverlay
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
