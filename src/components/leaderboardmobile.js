/* eslint-disable array-callback-return */
import React, {useState} from "react";

import { leaderboard } from "../assets/real-time.json";

function LeaderBoardMobile() {
    const [short, setShort] = useState(false);
    const [long, setLong] = useState(true);

    const [listData, setListData] = useState(leaderboard);

    const [showTip, setShowTip] = useState(0);

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

    const handleShowTip = (tip) => {
        if (tip === showTip) {
            setShowTip(0)
        } else {
            setShowTip(tip)
        }
    }

    return (
        <div className="mobile-leaderboard">
            <ul className="tab-item">
                <li className={long ? 'active' : ''} onClick={() => handleTab('long')}> Weekly</li>
                <li className={short ? 'active' : ''} onClick={() => handleTab('short')}> Montly</li>
            </ul>
            {/* <p className="end-time">Leaderboard closes Sunday midnight and the top 3 win $2k of $LVRJ tokens.</p> */}
            <div className="top-rated-section">
                <div className="rated-1">
                    <img src="/icons/crown.png" alt="lvrj" className="crawn-img" />
                    <img src="/avatars/avatar_9.jpg" alt="avatar_1" className="avatar" />
                    <p className="name">Hodges</p>
                    <p className="badge pnl-color" onClick={() => handleShowTip(1)}>+2331%</p>
                    {showTip === 1 && 
                        <div className="detailed-info-top-3">
                            <div>TRADES: <strong> 4 </strong></div>
                            <div>WINRATE: <strong> 100% </strong></div>
                            <span role="img" aria-label="Fire">🔥 WIN STREAK: 3</span>
                        </div>
                    }
                </div>
                <div className="rated-2">
                    <p className="name">#2</p>
                    <img src="/avatars/avatar_10.jpg" alt="avatar_2" className="avatar" />
                    <p className="name">Johnny Rios</p>
                    <p className="badge pnl-color" onClick={() => handleShowTip(2)}>+1832%</p>
                    {showTip === 2 && 
                        <div className="detailed-info-top-3">
                            <div>TRADES: <strong> 12 </strong></div>
                            <div>WINRATE: <strong> 94.1% </strong></div>
                            <span role="img" aria-label="Fire">🔥 WIN STREAK: 8</span>
                        </div>
                    }
                </div>
                <div className="rated-3">
                    <p className="name">#3</p>
                    <img src="/avatars/avatar_11.jpg" alt="avatar_3" className="avatar" />
                    <p className="name">Hammond</p>
                    <p className="badge pnl-color" onClick={() => handleShowTip(3)}>+1384%</p>
                    {showTip === 3 && 
                        <div className="detailed-info-top-3">
                            <div>TRADES: <strong> 31 </strong></div>
                            <div>WINRATE: <strong> 71.1% </strong></div>
                            <span role="img" aria-label="Fire">🔥 WIN STREAK: 6</span>
                        </div>
                    }
                </div>
            </div>

            <div className="rated-list">
                <div className="list-header">
                    <div>USER</div>
                    <div style={{ textAlign: 'right', paddingRight: '20px' }}>PNL</div>
                </div>
                {listData.map((item, index) => 
                    <div className="list-item" key={index}>
                        <div className="list-row" onClick={() => handleExpandItem(index)}>
                            <span>{index+4}</span>
                            <img src={item.img_url} alt={item.img_url} className="list-avatar" />
                            <span>{item.name}</span>
                            <div style={{ textAlign: 'right' }}>
                                <span className={`${item.pnl > 0 ? 'pnl-color':'fall-color'}`}>{item.pnl > 0 ? '+':''}{item.pnl}%</span>
                            </div>
                        </div>
                        {item.expanded && 
                            <div className="detailed-info">
                                <span>TRADES: <strong>{item.trades}</strong></span>
                                <span>WINRATE: <strong>{item.winrate}</strong></span>
                                <span role="img" aria-label="Fire">🔥 WIN STREAK: 5</span>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default LeaderBoardMobile;
