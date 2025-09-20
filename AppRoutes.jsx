import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./src/pages/DashboardLayout";
import Dashboard from "./src/components/Dashboard";
import OrderList from "./src/pages/OrderList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/orders-list" element={<OrderList />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
