import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import {FaExchangeAlt, FaPowerOff, FaBars, FaTimes} from "react-icons/fa"
import logo from '../assets/logo.png';

function Navbar({ mode, setMode }) {

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const r = document.querySelector(':root');
        if (!mode) {
            r.style.setProperty('--dark3', '#fff');
            r.style.setProperty('--dark2', '#dddde3');
            r.style.setProperty('--dark1', '#c7c7d1');
            r.style.setProperty('--grey3', '#000');
            r.style.setProperty('--grey2', '#222');
            r.style.setProperty('--grey1', '#333');
        }
    }, [mode])

    const handleChangeMode = (currentMode) => {
        setMode(currentMode);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <div className={`navbar ${mode? 'dark': 'light'}`}>
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={logo} alt="logo-img" className="logo-image" />
                    <h4 className="logo-text">LVRJ</h4>
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
            {isShow ? <FaTimes className="hamburger" onClick={() => setIsShow(!isShow)} /> : <FaBars className="hamburger" onClick={() => setIsShow(!isShow)} />}

            <ul className={`mobile-navbar ${isShow?'show':'hide'}`}>
                <li><a className="menu-link" href="/decentralized-trading/">Platform</a></li>
                <li><a className="menu-link" href="/decentralized-trading/">Practice</a></li>
                <li><a className="menu-link" href="/decentralized-trading/">Staking</a></li>
                <li><a className="menu-link" href="/decentralized-trading/">Statistics</a></li>
                <li><a className="menu-link" href="/decentralized-trading/">Documentation</a></li>
                <li>
                    <a className="button btn-pink menu-link" href="/decentralized-trading/">Buy $LVRJ" <FaExchangeAlt className="reg-circle-icon" /></a>
                </li>
                <li>
                    <a className="button btn-pink menu-link" href="/decentralized-trading/">Connect Wallet <FaPowerOff className="reg-circle-icon" /></a>
                </li>
                <li>
                    <div className="toggle-button-group">
                        <span>Dark Mode</span> <Switch onChange={() => handleChangeMode(!mode)} checked={mode} />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
