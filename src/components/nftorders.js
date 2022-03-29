import React from "react";

function NFTOrders() {
    return (
        <div className="card m-3 nft-orders">
           <div className="card-header">
                <p className="title">NFT Orders</p>
                <div className="display-lines">
                    <label>Display on chart</label>
                    <select className="option-style">
                        <option>Select an NFT</option>
                    </select>
                </div>
           </div>
           <div className="card-content">
                <div className="table-container">
                    <div className="table-header text-uppercase">
                        <div>Pair</div>
                        <div>Address</div>
                        <div>Trigger price</div>
                        <div>Current Price</div>
                        <div>Reward</div>
                        <div>Action</div>
                    </div>
                    <div className="table-body">
                        <div className="empty-row">
                            <p className="central-link">There is a LINK fee for each NFT order.</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default NFTOrders;
