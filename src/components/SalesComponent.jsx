import React from "react";
import ThemedIcon from "./ThemedIcon";

import SalesChart from "../assets/image/SalesChart.png";
import SalesChartDark from "../assets/image/SalesChart-dark.png";

import "../css/components/SalesComponent.css";

const SalesComponent = () => {
  return (
    <div className="sales-component">
      <h2 className="sales-title">Total Sales</h2>
      <ThemedIcon
        lightSrc={SalesChart}
        darkSrc={SalesChartDark}
        className="sales-main-icon"
        alt="Total Sales"
      />
      <div className="sales-data-list">
        <div className="sales-data-item">
          <span className="sales-dot direct-dot"></span>
          <span className="sales-data-label">Direct</span>
          <span className="sales-data-value">$300.56</span>
        </div>
        <div className="sales-data-item">
          <span className="sales-dot affiliate-dot"></span>
          <span className="sales-data-label">Affiliate</span>
          <span className="sales-data-value">$135.18</span>
        </div>
        <div className="sales-data-item">
          <span className="sales-dot sponsored-dot"></span>
          <span className="sales-data-label">Sponsored</span>
          <span className="sales-data-value">$154.02</span>
        </div>
        <div className="sales-data-item">
          <span className="sales-dot email-dot"></span>
          <span className="sales-data-label">E-mail</span>
          <span className="sales-data-value">$48.96</span>
        </div>
      </div>
    </div>
  );
};

export default SalesComponent;
