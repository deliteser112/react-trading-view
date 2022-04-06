import React from "react";

function Profile() {
    return (
        <div className="user-profile">
           <h3>$LVRJ Earn</h3>
           <p>
               $LVRJ Earn offers liquidity providers attractive APYs through efficient use of capital. The first $LVRJ Earn trading strategy is $LVRJ-USDC.
           </p>
           <div className="d-flex item-center flex-start">
                <img src="/icons/dai.png" alt="lvrj" className="currency-icon" />
                <img src="/icons/usdc.jpeg" alt="lvrj" className="currency-icon ml-5" />
                <p> $LVRJ-USDC</p>
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
            <div className="d-flex space-between">
                <div className="btn btn-withdraw">Withdraw</div>
                <div className="btn btn-deposit">Deposit</div>
            </div>
        </div>
    );
}

export default Profile;
