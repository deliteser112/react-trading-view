/* eslint-disable array-callback-return */
import React, {useState} from "react";

import { leaderboard } from "../assets/real-time.json";
import {BsHandThumbsUpFill} from "react-icons/bs"

function LeaderBoardMobile() {
    const [short, setShort] = useState(false);
    const [long, setLong] = useState(true);

    const [listData, setListData] = useState(leaderboard);

    const handleTab = (isSelected) => {
        if(isSelected === 'long') {
            setLong(true);
            setShort(false);
        } else {
            setLong(false);
            setShort(true);
        }
    }

    const handleExpandItem = (index) => {
        const tmpList = [];
        listData.map((item, i) => {
            if (i === index) {
                const { expanded } = item;
                tmpList.push({...item, expanded: !expanded});
            } else {
                tmpList.push(item);
            }
        });
        setListData(tmpList);
    }
    return (
        <div className="mobile-leaderboard">
            <ul className="tab-item">
                <li className={long ? 'active' : ''} onClick={() => handleTab('long')}> Weekly</li>
                <li className={short ? 'active' : ''} onClick={() => handleTab('short')}> Montly</li>
            </ul>
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
                    <div style={{ textAlign: 'right' }}>PNL</div>
                </div>
                {listData.map((item, index) => 
                    <div className="list-item" key={index}>
                        <div className="list-row" onClick={() => handleExpandItem(index)}>
                            <span>{index+4}</span>
                            <img src={item.img_url} alt={item.img_url} className="list-avatar" />
                            <span>{item.name}</span>
                            <div style={{ textAlign: 'right' }}>
                                <span className="pnl-color">{item.pnl}</span>
                            </div>
                        </div>
                        {item.expanded && 
                            <div className="detailed-info">
                                <span>TRADE: <strong>{item.trades}</strong></span>
                                <span>WINRATE: <strong>{item.winrate}</strong></span>
                                <span role="img" aria-label="Fire">🔥 WIN STREAK</span>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default LeaderBoardMobile;
