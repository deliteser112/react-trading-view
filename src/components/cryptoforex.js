import React, {useState, useEffect} from "react";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"

import {crypto, forex} from "../assets/real-time.json";

function Navbar() {
    const [cryptoData, setCryptoData] = useState([]);
    const [forexData, setForexData] = useState([]);
    const [vcrypto, setCrypto] = useState(true);
    const [vforex, setForex] = useState(false);

    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setInterval(setData, 3000);
        }, 500);
    }, [])

    const setData = () => {
        const newCrypto = [];
        const newForex = [];

        // eslint-disable-next-line
        crypto.map((pair) => {
            const row = {
                pair,
                price: (Math.random() * 80.000 + 100).toFixed(3),
                hour: `+${(Math.random()*1.00).toFixed(3)}%`
            }
            newCrypto.push(row);
        })
        setCryptoData(newCrypto);
        // eslint-disable-next-line
        forex.map((pair) => {
            const row = {
                pair,
                price: (Math.random() * 80.000 + 100).toFixed(3),
                hour: `+${(Math.random()*1.00).toFixed(3)}%`
            }
            newForex.push(row);
        })
        setForexData(newForex);
    }

    const handleTab = (isSelected) => {
        if(isSelected === 'crypto') {
            setForex(false);
            setCrypto(true);
        } else {
            setForex(true);
            setCrypto(false);
        }
    }

    return (
        <div>
            <div className={`crypto-forex-panel ${isShow?'show':'hide'}`}>
                <ul className="tab-item">
                    <li className={vcrypto ? 'active' : ''} onClick={() => handleTab('crypto')}>Crypto</li>
                    <li className={vforex ? 'active' : ''} onClick={() => handleTab('forex')}>Forex</li>
                </ul>
                <input type="text" className="search-bar" placeholder="Search a specific pair..." />
                <div className="crypto-forex-tab-panel">
                    <div className="table-header">
                        <span>PAIR</span>
                        <span>PRICE</span>
                        <span>24H</span>
                    </div>
                    <div className="table-content">
                        {vcrypto && cryptoData.map((item, index) => 
                            <div className="table-row" key={index}>
                                <span>{item.pair}</span>
                                <span className={item.price < 131.00 ? 'fall-color' : 'rising-color'}>{item.price}</span>
                                <span className="rising-color">{item.hour}</span>
                            </div>
                        )}
                        {vforex && forexData.map((item, index) => 
                            <div className="table-row" key={index}>
                                <span>{item.pair}</span>
                                <span className={item.price < 131.00 ? 'fall-color' : 'rising-color'}>{item.price}</span>
                                <span className="rising-color">{item.hour}</span>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
            

            <div className="mobile-crypto-view" onClick={() => setIsShow(!isShow)}>
                {isShow ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
        </div>
    );
}

export default Navbar;
