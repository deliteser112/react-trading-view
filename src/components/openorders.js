import React from "react";
import {FaInfoCircle} from "react-icons/fa"
import empty from "../assets/empty.svg";

function OpenOrders() {
    return (
        <div className="card open-orders">
           <div className="card-header">
                <p>Your Open Orders</p>
           </div>
           <div className="card-content">
                <div className="empty-row">
                    <img src={empty} alt="no data" className="empty-img" />
                    <div className="trade-info"><FaInfoCircle /><p> Can be canceled after 1 minute.</p></div>
                </div>
           </div>
        </div>
    );
}

export default OpenOrders;
