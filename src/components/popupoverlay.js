import React from "react";
import {AiOutlineClose} from "react-icons/ai"

function PopupOverlay({ onHideOverlay }) {
    return (
        <div className="popup">
           <div className="popup-header">
                <AiOutlineClose className="popup-close" onClick={() => onHideOverlay()} />
           </div>
           <h2>$LVRJ Earn</h2>
           <p>
               $LVRJ Earn offers liquidity providers attractive APYs through efficient use of capital. The first $LVRJ Earn trading strategy is $LVRJ-USDC.
           </p>
           <div className="card">
                <div>
                    <div className="d-flex item-center flex-start">
                        <img src="/icons/dai.png" alt="lvrj" className="currency-icon" />
                        <img src="/icons/usdc.jpeg" alt="lvrj" className="currency-icon ml-5" />
                        <p> $LVRJ-USDC</p>
                    </div>
                </div>
                <ul className="invoice-list">
                    <li>
                        <span>Earnings</span>
                        <span>$43,831</span>
                    </li>
                    <li>
                        <span>Total trades</span>
                        <span>$2,244,634</span>
                    </li> 
                    <li>
                        <span>My liquidity</span>
                        <span>$89.34</span>
                    </li> 
                    <li>
                        <span>APY</span>
                        <span>0.02%</span>
                    </li> 
                </ul>
                <img src="/icons/mini_chart_skeleton.png" alt="mini-chart" className="mini-chart" />
                <div className="d-flex space-between">
                    <div className="btn btn-withdraw">Withdraw</div>
                    <div className="btn btn-deposit">Deposit</div>
                </div>
           </div>
        </div>
    );
}

export default PopupOverlay;
