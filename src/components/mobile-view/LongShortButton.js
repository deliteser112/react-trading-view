import React from "react";

import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

function LongShortButton({ onShowLongShort }) {
  return (
    <div className="mobile-long-short">
      <ul className="tab-item">
        <li className="active" onClick={onShowLongShort}><img src={ArrowUp} alt="long" /> Long</li>
        <li onClick={onShowLongShort}><img src={ArrowDown} alt="short" /> Short</li>
      </ul>
    </div>
  );
}

export default LongShortButton;
