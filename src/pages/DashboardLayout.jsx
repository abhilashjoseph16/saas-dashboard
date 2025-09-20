import React, { useState } from "react";
import "../css/pages/DashboardLayout.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import RightBar from "../components/RightBar";

function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isRightBarOpen, setRightBarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleRightBar = () => setRightBarOpen(!isRightBarOpen);

  return (
    <div className="dashboard-layout">
      <div
        className={`dashboard-layout-sidebar ${
          isSidebarOpen ? "open" : "closed"
        }`}
      >
        <Sidebar />
      </div>

      <div className="dashboard-layout-content-area">
        <Header toggleSidebar={toggleSidebar} toggleRightBar={toggleRightBar} />
        <main className="dashboard-layout-content">
          <Outlet />
        </main>
      </div>

      <div
        className={`dashboard-layout-rightbar ${
          isRightBarOpen ? "open" : "closed"
        }`}
      >
        <RightBar />
      </div>
    </div>
  );
}

export default DashboardLayout;
