import React from "react";

function AllTrades() {
    return (
        <div className="card m-3">
           <div className="card-header">
                <p className="title">All Trades (24h)</p>
                <div className="display-lines"><button className="trade-button">My Trades</button></div>
           </div>
           <div className="card-content">
                <div className="table-container">
                    <div className="table-header text-uppercase">
                        <div>Time</div>
                        <div>Pair</div>
                        <div>Addr</div>
                        <div>Type</div>
                        <div>Price</div>
                        <div>Lev</div>
                        <div>Coll</div>
                        <div>Pnl</div>
                        <div>%</div>
                    </div>
                    <div className="table-body">
                        <div className="trade-row">
                            <div>17:39</div>
                            <div>ETH/USD</div>
                            <div>D0AE</div>
                            <div>SL</div>
                            <div>3410.00</div>
                            <div>5x</div>
                            <div>498.0</div>
                            <div>+0.1</div>
                            <div>+0.0%</div>
                        </div>
                        <div className="trade-row">
                            <div>17:39</div>
                            <div>ETH/USD</div>
                            <div>D0AE</div>
                            <div>SL</div>
                            <div>3410.00</div>
                            <div>5x</div>
                            <div>498.0</div>
                            <div>+0.1</div>
                            <div>+0.0%</div>
                        </div>
                        <div className="trade-row">
                            <div>17:39</div>
                            <div>ETH/USD</div>
                            <div>D0AE</div>
                            <div>SL</div>
                            <div>3410.00</div>
                            <div>5x</div>
                            <div>498.0</div>
                            <div>+0.1</div>
                            <div>+0.0%</div>
                        </div>
                        <div className="trade-row">
                            <div>17:39</div>
                            <div>ETH/USD</div>
                            <div>D0AE</div>
                            <div>SL</div>
                            <div>3410.00</div>
                            <div>5x</div>
                            <div>498.0</div>
                            <div>+0.1</div>
                            <div>+0.0%</div>
                        </div>
                        <div className="trade-row">
                            <div>17:39</div>
                            <div>ETH/USD</div>
                            <div>D0AE</div>
                            <div>SL</div>
                            <div>3410.00</div>
                            <div>5x</div>
                            <div>498.0</div>
                            <div>+0.1</div>
                            <div>+0.0%</div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default AllTrades;
