import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./src/pages/DashboardLayout";
import Dashboard from "./src/components/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
