import React from "react";
import SummaryBox from "./SummaryBox";
import "../css/components/DashboardSummary.css";

import UpArrowLight from "../assets/icons/ArrowRise.png";
import UpArrowDark from "../assets/icons/ArrowRise-dark.png";
import DownArrowLight from "../assets/icons/ArrowFall.png";
import DownArrowDark from "../assets/icons/ArrowFall-dark.png";

function DashboardSummary() {
  return (
    <div className="dashboard-summary-wrapper">
      <div className="dashboard-summary-container">
        <SummaryBox
          title="Customers"
          value="3,781"
          percentage={11.01}
          isPositive={true}
          arrowLightSrc={UpArrowLight}
          arrowDarkSrc={UpArrowDark}
          className="customers"
        />

        <SummaryBox
          title="Orders"
          value="1,219"
          percentage={0.03}
          isPositive={false}
          arrowLightSrc={DownArrowLight}
          arrowDarkSrc={DownArrowDark}
          className="orders"
        />

        <SummaryBox
          title="Revenue"
          value="$695"
          percentage={15.03}
          isPositive={true}
          arrowLightSrc={UpArrowLight}
          arrowDarkSrc={UpArrowDark}
          className="revenue"
        />

        <SummaryBox
          title="Growth"
          value="30.1%"
          percentage={6.08}
          isPositive={true}
          arrowLightSrc={UpArrowLight}
          arrowDarkSrc={UpArrowDark}
          className="growth"
        />
      </div>
    </div>
  );
}
export default DashboardSummary;
