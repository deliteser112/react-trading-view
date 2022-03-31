import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

function Chart({ mode }) {
  return (
    <div className="chart">
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          interval: "1D",
          colorTheme: mode?'dark':'light',
          width: "100%",
          height: "100%",
          symbol: "BTCUSD"
        }}
      />
    </div>
    
  );
}

export default Chart;
