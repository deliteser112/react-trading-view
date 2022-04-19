import React, {useState} from "react";

import OpenTrads from "../OpenTrades";
import OpenOrders from "../OpenOrders";

function ActivityMobile() {
    const [short, setShort] = useState(false);
    const [long, setLong] = useState(true);

    const handleTab = (isSelected) => {
        if(isSelected === 'long') {
            setLong(true);
            setShort(false);
        } else {
            setLong(false);
            setShort(true);
        }
    }

    return (
        <div className="mobile-leaderboard">
            <ul className="tab-item">
                <li className={long ? 'active' : ''} onClick={() => handleTab('long')}> Active</li>
                <li className={short ? 'active' : ''} onClick={() => handleTab('short')}> Closed</li>
            </ul>
            <div className="trading-container">
                <OpenTrads />
                <OpenOrders />
            </div>
        </div>
    );
}

export default ActivityMobile;
