import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import {FaExchangeAlt, FaPowerOff, FaAngleLeft, FaAngleRight} from "react-icons/fa"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar({ mode, setMode, onShowSearch, onShowOverlay }) {

    const [isShow, setIsShow] = useState(false);
    const [showTip, setShowTip] = useState(false);
    useEffect(() => {
        const r = document.querySelector(':root');
        if (!mode) {
            r.style.setProperty('--dark3', '#fff');
            r.style.setProperty('--dark2', '#dddde3');
            r.style.setProperty('--dark1', '#c7c7d1');
            r.style.setProperty('--grey3', '#000');
            r.style.setProperty('--grey2', '#333');
            r.style.setProperty('--grey1', '#555');
            r.style.setProperty('--rising-color', '#218d0d');
            r.style.setProperty('--transparent', '#09090b1a');
        }
    }, [mode])
    
    const handleChangeMode = (currentMode) => {
        setMode(currentMode);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <div>
            <div className={`mobile-toggle-panel ${isShow?'show':'hide'}`}>
                <div className="toggle-button-group">
                    {isShow ? <FaAngleRight className="toggle-arrow" onClick={() => setIsShow(!isShow)} /> : <FaAngleLeft className="toggle-arrow" onClick={() => setIsShow(!isShow)} />}
                    <span>Dark Mode</span> <Switch onChange={() => handleChangeMode(!mode)} checked={mode} />
                </div>
            </div>
            <div className={`navbar ${mode? 'dark': 'light'}`}>
                <img src="/icons/profile.svg" alt="profile" className="mobile-view-icons" onClick={() => onShowOverlay(true)} />
                <div className="navbar-left">
                    <div className="navbar-logo" onClick={() => onShowSearch(true)}>
                        <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
                        Search markets here
                    </div>
                    <div className="navbar-menu">
                        <a className="menu-link" href="/decentralized-trading/">Platform</a>
                        <a className="menu-link" href="/decentralized-trading/">Practice</a>
                        <a className="menu-link" href="/decentralized-trading/">Staking</a>
                        <a className="menu-link" href="/decentralized-trading/">Statistics</a>
                        <a className="menu-link" href="/decentralized-trading/">Documentation</a>
                    </div>
                </div>

                <ul className="menu-btns">
                    <li>
                        <div className="toggle-button-group">
                            <span>Dark Mode</span> <Switch onChange={() => handleChangeMode(!mode)} checked={mode} />
                        </div>
                    </li>
                    <li>
                        <a className="button btn-pink" href="/decentralized-trading/">Buy $LVRJ" <FaExchangeAlt className="reg-circle-icon" /></a>
                    </li>
                    <li>
                        <a className="button btn-pink" href="/decentralized-trading/">Connect Wallet <FaPowerOff className="reg-circle-icon" /></a>
                    </li>
                </ul>
                <div className="wallet-icon" onMouseOver={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
                    <img src="/icons/wallet.svg" alt="profile" className="mobile-view-icons" />
                    <div className="low-balance-dot" />
                    {showTip && 
                        <div className="dropdown-push">
                            <span role="img" aria-label="Fire">⚠️ Your DAI wallet balance is below $10</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
