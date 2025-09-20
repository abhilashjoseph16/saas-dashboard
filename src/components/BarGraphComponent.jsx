import React from "react";
import ThemedIcon from "./ThemedIcon";

import LightChartImage from "../assets/image/Chart.png";
import DarkChartImage from "../assets/image/Chart-dark.png";

import "../css/components/BarGraphComponent.css";

const BarGraphComponent = () => {
  return (
    <div className="bar-graph-component">
      <h2 className="bar-graph-title">Projections vs Actuals</h2>

      <ThemedIcon
        lightSrc={LightChartImage}
        darkSrc={DarkChartImage}
        className="bar-graph-chart"
        alt="Bar Graph Chart"
      />
    </div>
  );
};

export default BarGraphComponent;
