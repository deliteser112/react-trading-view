import React from "react";

function MediumSection() {
  return (
    <div>
      <div className="title-section">
        <h1 className="page-title-gradient">Virtual Leveraged Trading</h1>
        <p>Claim your free 10,000 DAI and train your leveraged trading skills on our platform.</p>
      </div>
      <div className="stats-24h">
        <div className="d-flex">
          <div />
          <div className="card pd-35 m-3">
            <p className="card-title">$2,579,157</p>
            <p className="card-subtitle">daily volume</p>
          </div>
          <div className="card pd-35 m-3">
            <p className="card-title">63</p>
            <p className="card-subtitle">TRADES COUNT</p>
          </div>
          <div />
        </div>
      </div>
      <p className="central-link"> <span><a href="/decentralize">Copy referral link</a> </span>  Traders earn 0.01% more, and you earn 0.01% on each trade.You have earned ... GNS so far.</p>
    </div>
  );
}

export default MediumSection;
