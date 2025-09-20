import React from "react";
import "../css/components/Dashboard.css";
import DashboardSummary from "./DashboardSummary";
import BarGraphComponent from "./BarGraphComponent";
import GraphComponent from "./GraphComponent";
import LocationComponent from "./LocationComponent";
import ListComponent from "./ListComponent";
import SalesComponent from "./SalesComponent";

function Dashboard() {
  return (
    <div className="dashboard-flex-container-wrapper">
      <h1 className="dashboard-page-title">eCommerce</h1>

      <div className="dashboard-flex-container">
        <div className="dashboard-summary-wrapper">
          <DashboardSummary />
        </div>
        <div className="bar-graph-wrapper">
          <BarGraphComponent />
        </div>

        <div className="box-row-two box-two-left">
          <GraphComponent />
        </div>
        <div className="box-row-two box-two-right">
          <LocationComponent />
        </div>

        <div className="box-row-three box-three-left">
          <ListComponent />
        </div>
        <div className="box-row-three box-three-right">
          <SalesComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
