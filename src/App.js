import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from './contexts/ThemeContext';

import Chart from "./components/chart";
import Navbar from "./components/navbar";
import LongShort from "./components/longshort";
import CryptoForex from "./components/cryptoforex";

import OpenTrads from "./components/opentrades";
import OpenOrders from "./components/openorders";

import AllTrades from "./components/alltrades";
import LeaderBoard from "./components/leaderboard";
import PersonalTrading from "./components/personaltrading";

import NFTOrders from "./components/nftorders";

import Footer from "./components/footer";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    console.log(showSearch);
  }, [showSearch])

  return (
    <div>
      <Navbar mode={darkMode} setMode={setDarkMode} onShowSearch={() => setShowSearch(true)} />
      {/* <CryptoForex /> */}
      {showSearch && <CryptoForex onHideSearch={() => setShowSearch(false)} />}
      <div className="trading-panel row">
        <Chart mode={darkMode}/>
        <LongShort mode={darkMode} />
      </div>
      <div className="trading-container">
        <OpenTrads />
        <OpenOrders />
      </div>
      <div className="title-section">
        <h1 className="page-title-gradient">Virtual Leveraged Trading</h1>
        <p>Claim your free 10,000 DAI and train your leveraged trading skills on our platform.</p>
      </div>
      <div className="stats-24h">
        <div className="d-flex">
          <div />
          <div className="card pd-35 m-3">
            <p className="card-title">$2,579,157</p>
            <p className="card-subtitle">daily volume</p>
          </div>
          <div className="card pd-35 m-3">
            <p className="card-title">63</p>
            <p className="card-subtitle">TRADES COUNT</p>
          </div>
          <div />
        </div>
      </div>
      <p className="central-link"> <span><a href="/decentralize">Copy referral link</a> </span>  Traders earn 0.01% more, and you earn 0.01% on each trade.You have earned ... GNS so far.</p>

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
    </div>
  );
}

export default App;
