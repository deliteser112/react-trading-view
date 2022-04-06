import React, { useState, useEffect } from "react";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineInfoCircle} from "react-icons/ai"
import {GiElephant, GiChicken} from "react-icons/gi"
import {liquidity} from "../assets/real-time.json";

// components
import Deposit from "./deposit";

function Liquidity() {
    const [sampleData, setSampleData] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const sampleArr = [];
        const cLength = liquidity.length-1;
        // eslint-disable-next-line
        [...Array(50)].map((a,i) => {
            const row = {
                isPlus: (Math.random()*220.00).toFixed(3) > 130 ? true : false,
                tokenAmount: {
                    up: (Math.random()*220.00).toFixed(3),
                    down: (Math.random()*220.00).toFixed(3)
                },
                tokenName: {
                    up: liquidity[(Math.random()*cLength).toFixed(0)],
                    down: liquidity[(Math.random()*cLength).toFixed(0)]
                },
                tokenValue: (Math.random()*220.00).toFixed(3),
                isElephont: (Math.random()*220.00).toFixed(3) > 130 ? true : false,
                ago: '3min'
            }
            sampleArr.push(row);
        })

        console.log(sampleArr);
        setSampleData(sampleArr);
    }, [])
    return (
        <div className="liquidity">
            <p className="category">Liquidity</p>
            <div className="d-flex">
                <p className="price">
                    <span className="currency">$</span>3.52B <span className="rate">+0.35%</span>
                </p>
                {!show && 
                    <div className="btn-deposit" onClick={() => setShow(true)}>
                        Deposit
                    </div>
                }
            </div>
            {show && <Deposit />}
            <div className="d-flex">
                <div className="d-flex right-act">
                    <span>Pools Activity</span>
                    <span>23sec.</span>
                </div>
                <div className="d-flex left-act">
                    <div className="category-btn active">All</div>
                    <div className="category-btn">Adds</div>
                    <div className="category-btn">Removes</div>
                </div>
            </div>

            <div className="table-header">
                <div>Token Amount</div>
                <div>Token Value</div>
                <div className="text-center"><AiOutlineInfoCircle /></div>
                <div className="text-left">Ago</div>
            </div>
            <div className="table-body">
                {sampleData.map((item, index) => 
                    <div className="table-row" key={index}>
                        <div className="text-center">
                            {item.isPlus ? <AiOutlinePlus className="plus-color" /> : <AiOutlineMinus className="minus-color" />}
                        </div>
                        <div className="text-right">
                            <div>{item.tokenAmount.up}</div>
                            <div>{item.tokenAmount.down}</div>
                        </div>
                        <div className="text-left ml-3">
                            <div className="text-dark">{item.tokenName.up}</div>
                            <div className="text-dark">{item.tokenName.down}</div>
                        </div>
                        <div className="text-right">
                            <div>{item.tokenValue}</div>
                            <div></div>
                        </div>
                        <div className="text-center icon-size">
                            {Number(item.tokenValue) > 100 ? <div></div> : item.isElephont ? <GiElephant /> : <GiChicken />}
                        </div>
                        <div className="text-left">
                            <div className="text-dark">{item.ago}.</div>
                            <div></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Liquidity;
