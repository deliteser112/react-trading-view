import React from "react";
import {AiOutlineClose} from "react-icons/ai"

function LowBalanceOverlay({ onHidePaymentOverlay }) {
    return (
        <div className="popup transparent">
            <div className="popup-header">
                <AiOutlineClose onClick={onHidePaymentOverlay} className="popup-close" />
            </div>

            <div className="payment-card">
              <h3 style={{ fontWeight: 100 }}>Oops! Low wallet DAI Balance, buy DAI instantly!</h3>
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
        </div>
    );
}

export default LowBalanceOverlay;
