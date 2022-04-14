import React from "react";
import {AiOutlineClose} from "react-icons/ai"

function LowBalanceOverlay({ onHidePaymentOverlay }) {
    return (
        <div className="popup">
            <div className="popup-header">
                <AiOutlineClose onClick={onHidePaymentOverlay} className="popup-close" />
            </div>

            <div className="payment-card">
              <img src="/icons/invoice.png" alt="invoice" className="invoice-icon" />
              <h3>Oops! Low wallet DAI Balance, buy DAI instantly!</h3>
              <div className="option-row">
                <img src="/icons/bank.png" alt="bank" />
                <span>Bank Account</span>  
              </div>    
              <div className="option-row">
                <img src="/icons/debit-card.png" alt="bank" />
                <span>Credit Card</span>  
              </div> 
              <div className="btn btn-deposit" style={{ margin: 'auto', color: 'white' }}>GO!</div>
            </div>
            <img src="/icons/payment-back.png" alt="area_2" className="mini-chart" />
        </div>
    );
}

export default LowBalanceOverlay;
