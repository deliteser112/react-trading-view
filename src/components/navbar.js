import React, {useState} from "react";
import logo from '../assets/logo.png';
import {FaExchangeAlt, FaPowerOff, FaBars, FaTimes} from "react-icons/fa"

function Navbar() {

    const [isShow, setIsShow] = useState(false)

    return (
        <div className="navbar">
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
            </ul>
        </div>
    );
}

export default Navbar;
