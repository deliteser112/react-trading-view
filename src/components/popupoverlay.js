import React from "react";
import {AiOutlineClose} from "react-icons/ai"

function PopupOverlay({ onHideOverlay }) {
    return (
        <div className="popup">
            <div className="popup-header">
                <AiOutlineClose onClick={onHideOverlay} className="popup-close" />
            </div>
            <div className="intro-section">
                <img src="/avatars/avatar_16.jpg" alt="avatar" className="popup-avatar" />
                <h3>Ahmed Moneymagnet</h3>
            </div>
            
            <div className="card">
                <div className="d-flex item-center flex-start">
                    <img src="/icons/dai.png" alt="lvrj" className="currency-icon" />
                    <img src="/icons/usdc.jpeg" alt="lvrj" className="currency-icon ml-5" />
                    <p> $LVRJ-DAI</p>
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
                <img src="/icons/Area_2.png" alt="area_2" className="mini-chart" />
            </div>
                  
        </div>
    );
}

export default PopupOverlay;
