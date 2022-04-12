import React from "react";

import { leaderboard } from "../assets/real-time.json";
import {BsHandThumbsUpFill} from "react-icons/bs"

function LeaderBoardMobile() {
    return (
        <div className="mobile-leaderboard">
            <p className="title">Leaderboard</p>
            <p className="end-time">Leaderboard closes Sunday midnight and the top 3 win $2k of $LVRJ tokens.</p>
            <div className="top-rated-section">
                <div className="rated-1">
                    <img src="/avatars/avatar_9.jpg" alt="avatar_1" className="avatar" />
                    <p className="name">Hodges</p>
                    <p className="badge"><BsHandThumbsUpFill className="bs-icon" /> 23131</p>
                </div>
                <div className="rated-2">
                    <img src="/avatars/avatar_10.jpg" alt="avatar_2" className="avatar" />
                    <p className="name">Johnny Rios</p>
                    <p className="badge"><BsHandThumbsUpFill className="bs-icon" />12332</p>
                </div>
                <div className="rated-3">
                    <img src="/avatars/avatar_11.jpg" alt="avatar_3" className="avatar" />
                    <p className="name">Hammond</p>
                    <p className="badge"><BsHandThumbsUpFill className="bs-icon" />6984</p>
                </div>
                <img src="/icons/rated_board.png" alt="rated_board" className="rated-board" />
            </div>

            <div className="rated-list">
                <div className="list-header">
                    <div>USER</div>
                    <div sx={{ textAlign: 'left' }}>TRADES</div>
                    <div>WINRATE</div>
                    <div>PNL</div>
                </div>
                {leaderboard.map((item, index) => 
                    <div className="list-row" key={index}>
                        <span>{index+4}</span>
                        <img src={item.img_url} alt={item.img_url} className="list-avatar" />
                        <span>{item.name}</span>
                        <span style={{ textAlign: 'center' }}>{item.trades}</span>
                        <span>{item.winrate}</span>
                        <div style={{ textAlign: 'right' }}>
                            <span className="badge"><BsHandThumbsUpFill className="bs-icon" /> {item.pnl}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LeaderBoardMobile;
