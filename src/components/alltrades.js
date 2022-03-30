import React, {useEffect, useState} from "react";
import {crypto, addr, type} from "../assets/real-time.json";

function AllTrades() {
    const [sampleData, setSampleData] = useState([]);
    useEffect(() => {
        const sampleArr = [];
        const cLength = crypto.length-1;
        const aLength = addr.length-1;
        const tLength = type.length-1;
        // eslint-disable-next-line
        [...Array(50)].map((a,i) => {
            const row = {
                time: `${((Math.random()*23)+1).toFixed(0)}:${((Math.random()*59)+1).toFixed(0)}`,
                pair: crypto[(Math.random()*cLength).toFixed(0)],
                addr: addr[(Math.random()*aLength).toFixed(0)],
                type: type[(Math.random()*tLength).toFixed(0)],
                price: (Math.random()*220.00).toFixed(3),
                lev: `${(Math.random()*50 + 120).toFixed(0)}x`,
                coll: (Math.random()*40.00).toFixed(2),
                pnl: Math.random()*100%2===0 ? '' : Math.random()*100 > 10 ? ('+'+(Math.random()*100.0).toFixed(2)) : ('-'+(Math.random()*100.0).toFixed(2)),
                percent: Math.random()*100%2===0 ? '' : Math.random()*100 > 10 ? ('+'+(Math.random()*100.0).toFixed(2)+'%') : ('-'+(Math.random()*100.0).toFixed(2)+'%'),
            }
            sampleArr.push(row);
        })

        setSampleData(sampleArr);
    }, [])
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
                        {sampleData.map((item, index) => 
                            <div className="trade-row" key={index}>
                                <div>{item.time}</div>
                                <div>{item.pair}</div>
                                <div>{item.addr}</div>
                                <div className='rising-color'>{item.type}</div>
                                <div>{item.price}</div>
                                <div>{item.lev}</div>
                                <div>{item.coll}</div>
                                <div className={(Math.random()*100)<40? 'fall-color': 'rising-color'}>{item.pnl}</div>
                                <div className={(Math.random()*100)<40? 'fall-color': 'rising-color'}>{item.percent}</div>
                            </div>
                        )}
                    </div>
                </div>
           </div>
        </div>
    );
}

export default AllTrades;
