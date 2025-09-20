import React from "react";
import ThemedIcon from "./ThemedIcon";

import LightChart from "../assets/image/RevenueChart.png";
import DarkChart from "../assets/image/RevenueChart-dark.png";

import "../css/components/GraphComponent.css";

const GraphComponent = () => {
  return (
    <div className="graph-component">
      <div className="graph-header">
        <h2 className="graph-title">Revenue</h2>
        <div className="week-labels">
          <span className="label-dot current-week-dot"></span>
          <span className="current-week">Current Week <strong>$58,211</strong></span>
          <span className="label-dot previous-week-dot"></span>
          <span className="previous-week">Previous Week <strong>$68,768</strong></span>
        </div>
      </div>

      <ThemedIcon
        lightSrc={LightChart}
        darkSrc={DarkChart}
        className="graph-chart"
        alt="Revenue Chart"
      />
    </div>
  );
};

export default GraphComponent;
