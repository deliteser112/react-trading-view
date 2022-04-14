import React, { useState, useContext, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from './contexts/ThemeContext';

// import components
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import LongShort from "./components/LongShort";
import CryptoForex from "./components/CryptoForex";

import PopupOverlay from "./components/mobile-view/PopupOverlay";
import LongShortButton from "./components/mobile-view/LongShortButton";
import LowBalanceOverlay from "./components/mobile-view/LowBalanceOverlay"

import OpenTrads from "./components/OpenTrades";
import OpenOrders from "./components/OpenOrders";

import MediumSection from "./components/MediumSection";

import AllTrades from "./components/AllTrades";
import LeaderBoard from "./components/LeaderBoard";
import PersonalTrading from "./components/PersonalTrading";

import NFTOrders from "./components/NFTOrders";

import Liquidity from "./components/Liquidity";

import Footer from "./components/Footer";

import LeaderBoardMobile from "./components/mobile-view/LeaderBoardMobile";

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
      <Navbar mode={darkMode} setMode={setDarkMode} onShowSearch={() => setShowSearch(true)} onShowOverlay={() => setShowOverlay(true)} />
      {showSearch && <CryptoForex onHideSearch={() => setShowSearch(false)} />}
      {showOverlay && <PopupOverlay onHideOverlay={() => setShowOverlay(false)} />}
      {showLowBalanceOverlay && <LowBalanceOverlay onHidePaymentOverlay={() => setShowLowBalanceOverlay(false)}/>}

      <div className="trading-panel row">
        <Chart mode={darkMode}/>
        <LongShort mode={darkMode} />
      </div>
      <div className="trading-container">
        <OpenTrads />
        <OpenOrders />
      </div>
      <MediumSection />
      <div className="all-trades-container">
        <div className="row">
          <div className="left-trade col-6">
            <AllTrades />
          </div>
          <div className="right-trade col-6">
            <LeaderBoard />
            <PersonalTrading />
          </div>
        </div>
        <NFTOrders />
      </div>
      <Footer />


      {/* Mobile version */}
      <div className="mobile-version-section">
        <Navbar mode={darkMode} setMode={setDarkMode} onShowSearch={() => setShowSearch(true)} />
        <Tabs className="mobile-section-tab">
          <TabPanel>
            <div className="mobile-tab-body" style={{ overflow: `${showLongShort ? 'auto' : 'hidden'}` }}>
              <div className="trading-panel row">
                <Chart mode={darkMode}/>
                {showLongShort && <LongShort mode={darkMode} />}
                {!showLongShort && 
                  <LongShortButton onShowLongShort={handleShowLongShort} />
                }
                <div ref={bottomRef} style={{ height: 'calc(100vh - 130px)' }} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body">
              <div className="trading-container">
                <OpenTrads />
                <OpenOrders />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body right-trade">
              <LeaderBoardMobile />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mobile-tab-body">
              <Liquidity />
            </div>
          </TabPanel>
          <TabList className="tab-buttons">
              <Tab>
                <img src="/icons/trade.png" alt="trade" className="tab-button-icon" />
                <p>Trade</p> 
              </Tab>
              <Tab onClick={() => setShowLongShort(false)}>
                <img src="/icons/activity.png" alt="activity" className="tab-button-icon" />
                <p>Activity</p> 
              </Tab>
              <Tab onClick={() => setShowLongShort(false)}>
                <img src="/icons/leadboard.png" alt="leaderboard" className="tab-button-icon" />
                <p>LeaderBoard</p> 
              </Tab>
              <Tab onClick={() => setShowLongShort(false)}>
                <img src="/icons/liquidity.png" alt="liquidity" className="tab-button-icon" />
                <p>Liquidity</p> 
              </Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
