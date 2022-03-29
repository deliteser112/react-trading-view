import React from "react";

import { leaderboard } from "../assets/real-time.json";

function LeaderBoard() {
    return (
        <div className="card m-3">
           <div className="card-header">
                <p className="title">Leaderboard (7 days)</p>
           </div>
           <div className="card-content">
                <div className="table-container">
                    <div className="table-header text-uppercase">
                        <div>#</div>
                        <div>Addr</div>
                        <div>Trades</div>
                        <div>Winrate</div>
                        <div>Pnl</div>
                    </div>
                    <div className="table-body">
                        {leaderboard.map((item, index) => 
                            <div className="trade-row" key={index}>
                                <div>{item.grade}</div>
                                <div>{item.addr}</div>
                                <div>{item.trades}</div>
                                <div>{item.winrate}</div>
                                <div>{item.pnl}</div>
                            </div>
                        )}
                        
                    </div>
                </div>
                <p className="central-link">Your Rank: please connect your wallet.</p>
           </div>
        </div>
    );
}

export default LeaderBoard;
