import React from "react";
import logo from '../assets/logo.png';
import {FaExchangeAlt, FaPowerOff} from "react-icons/fa"

function Navbar() {
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
        </div>
    );
}

export default Navbar;
