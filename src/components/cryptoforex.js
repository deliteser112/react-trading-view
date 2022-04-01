import React, {useState, useEffect} from "react";
import ReactLoading from 'react-loading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SearchInput, {createFilter} from 'react-search-input'
import {FaPlus} from "react-icons/fa"

import {crypto, forex, people} from "../assets/real-time.json";

const KEYS_TO_FILTERS = ['pair', 'name']

function CryptoForex({ onHideSearch }) {
    const [cryptoData, setCryptoData] = useState([]);
    const [forexData, setForexData] = useState([]);
    const [selectedTab, setSelectedTab] = useState('crypto');

    const [selectedData, setSelectedData] = useState([]);

    const [isLoading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setData();
        setInterval(setData, 2000);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    useEffect(() => {
        if(selectedTab === 'crypto') setSelectedData(cryptoData);
        else if(selectedTab === 'forex') setSelectedData(forexData);
        else setSelectedData(people);
    }, [selectedTab, cryptoData, forexData]);

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

    const searchUpdate = (term) => {
        setSearchTerm(term);
    }

    const filteredData = selectedData.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

    return (
        <div className="crypto-forex-panel">
            <div className="real-search-bar">
                <SearchInput className="search-input" onChange={searchUpdate} />
                <FaPlus className="x-marks" onClick={() => onHideSearch()} />
            </div>
            <Tabs className="search-result-box">
                <TabList>
                    <Tab onClick={() => setSelectedTab('crypto')}>Crypto</Tab>
                    <Tab onClick={() => setSelectedTab('forex')}>Forex</Tab>
                    <Tab onClick={() => setSelectedTab('people')}>People</Tab>
                </TabList>

                <TabPanel>
                    {isLoading ? <ReactLoading type={'bubbles'} className="loading-style" color={'grey'} height={'470px'} width={'20%'} /> :
                        <div>
                            <div className="table-header">
                                <span>PAIR</span>
                                <span>PRICE</span>
                                <span>24H</span>
                            </div>
                            <div className="table-content">
                                {filteredData.map((item, index) => 
                                    <div className="table-row" key={index}>
                                        <span className="pair-color">{item.pair}</span>
                                        <span className={item.price < 131.00 ? 'fall-color' : 'rising-color'}>{item.price}</span>
                                        <span className="rising-color">{item.hour}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                    
                </TabPanel>
                <TabPanel>
                    <div className="table-header">
                        <span>PAIR</span>
                        <span>PRICE</span>
                        <span>24H</span>
                    </div>
                    <div className="table-content">
                        {filteredData.map((item, index) => 
                            <div className="table-row" key={index}>
                                <span className="pair-color">{item.pair}</span>
                                <span className={item.price < 131.00 ? 'fall-color' : 'rising-color'}>{item.price}</span>
                                <span className="rising-color">{item.hour}</span>
                            </div>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="people-section">
                        {filteredData.map((item, index) => 
                            <div className="people-row" key={index}>
                                <img src={item.img_url} alt={`avatar_${index}`} />
                                <span>{item.name}</span>
                            </div>
                        )}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default CryptoForex;
