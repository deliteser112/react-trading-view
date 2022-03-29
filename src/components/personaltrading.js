import React from "react";

function PersonalTrading() {
    return (
        <div className="card m-3">
           <div className="card-header">
                <p className="title">Personal Trading Report</p>
           </div>
           <div className="card-content">
                <div className="empty-row d-flex">
                    <p className="p-2">
                        <span className="text-bold">...</span> <br />
                        trades
                    </p>
                    <p className="p-2 tc-primary">
                        <span className="text-bold">...</span> <br />
                        winrate
                    </p>
                    <p className="p-2 tc-success">
                        <span className="text-bold">...</span> <br />
                        average profit
                    </p>
                    <p className="p-2 tc-danger">
                        <span className="text-bold">...</span> <br />
                        average loss
                    </p>
                </div>
           </div>
        </div>
    );
}

export default PersonalTrading;
