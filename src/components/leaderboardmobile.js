import React from "react";

import { people } from "../assets/real-time.json";
import {BsHandThumbsUpFill} from "react-icons/bs"

function LeaderBoardMobile() {
    return (
        <div className="mobile-leaderboard">
            <p className="title">Leaderboard</p>
            <p className="end-time">End In 2d 23Hours</p>
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
                {people.map((item, index) => 
                    <div className="list-row" key={index}>
                        <span>{index+4}</span>
                        <img src={item.img_url} alt={item.img_url} className="list-avatar" />
                        <span>{item.name}</span>
                        <div style={{ textAlign: 'right' }}>
                            <span className="badge"><BsHandThumbsUpFill className="bs-icon" /> {(Math.random() * 9999 + 1000).toFixed(0)}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LeaderBoardMobile;
