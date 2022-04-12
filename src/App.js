import React, { useState, useEffect, useContext, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from './contexts/ThemeContext';
// import icons
// import {GiSuperMushroom, GiCampfire, GiTakeMyMoney} from "react-icons/gi"
// import {MdAutoGraph} from "react-icons/md"

// import components
import Chart from "./components/chart";
import Navbar from "./components/navbar";
import LongShort from "./components/longshort";
import CryptoForex from "./components/cryptoforex";

import PopupOverlay from "./components/popupoverlay";
import LongShortButton from "./components/longshortbutton";

import OpenTrads from "./components/opentrades";
import OpenOrders from "./components/openorders";

import MediumSection from "./components/mediumsection";

import AllTrades from "./components/alltrades";
import LeaderBoard from "./components/leaderboard";
import PersonalTrading from "./components/personaltrading";

import NFTOrders from "./components/nftorders";

import Liquidity from "./components/liquidity";

import Footer from "./components/footer";

import LeaderBoardMobile from "./components/leaderboardmobile";

function App() {
  const bottomRef = useRef();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [showSearch, setShowSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const [showLongShort, setShowLongShort] = useState(false);

  useEffect(() => {
    console.log(showSearch);
  }, [showSearch])

  const handleShowLongShort = () => {
    setShowLongShort(true);
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div>
      <Navbar mode={darkMode} setMode={setDarkMode} onShowSearch={() => setShowSearch(true)} onShowOverlay={() => setShowOverlay(true)} />
      {showSearch && <CryptoForex onHideSearch={() => setShowSearch(false)} />}
      {showOverlay && <PopupOverlay onHideOverlay={() => setShowOverlay(false)} />}
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
