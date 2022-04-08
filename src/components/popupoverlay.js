import React from "react";
import {AiOutlineClose} from "react-icons/ai"

import area_graph from '../assets/Vector.svg';

function PopupOverlay({ onHideOverlay }) {
    return (
        <div className="popup">
            <div className="popup-header">
                <AiOutlineClose onClick={onHideOverlay} className="popup-close" />
            </div>
            {/* <div className="intro-section">
                <img src="/avatars/avatar_16.jpg" alt="avatar" className="popup-avatar" />
                <h3>Ahmed Moneymagnet</h3>
                <img src="/icons/rating.svg" alt="rating" className="rating" />
                <div className="d-flex">
                    <img src="/icons/badge_1.svg" alt="badge_1" />
                    <img src="/icons/badge_2.svg" alt="badge_2" className="badge_offset" />
                    <img src="/icons/badge_3.svg" alt="badge_3" />
                </div>
            </div> */}

            <div className="popup-card">
                <div className="trade-info flex-start">
                    <img src="/icons/status.png" alt="lvrj" className="tab-button-icon" /> <h4>My Stats</h4>
                </div>
                <ul className="invoice-list">
                    <li>
                        <span>Win rate</span>
                        <span>57.34%</span>
                    </li>
                    <li>
                        <span>Total trades</span>
                        <span>$2,244,634</span>
                    </li> 
                    <li>
                        <span>Total Gains / losses</span>
                        <span>$8,965.34</span>
                    </li> 
                    <li>
                        <span>Today's Gains losses</span>
                        <span>$42.46</span>
                    </li> 
                </ul>
                {/* <div className="d-flex space-between">
                    <div className="btn btn-withdraw">Withdraw</div>
                    <div className="btn btn-deposit">Deposit</div>
                </div> */}
            </div>
            <img src={area_graph} alt="area_2" className="mini-chart" />
        </div>
    );
}

export default PopupOverlay;
