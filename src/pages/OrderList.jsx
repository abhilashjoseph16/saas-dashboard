import React, { useEffect, useState } from "react";
import "../css/pages/OrderList.css";
import ordersData from "../data/orders.json";
import ThemedIcon from "../components/ThemedIcon";
import AddIcon from "../assets/icons/Add.png";
import AddIconDark from "../assets/icons/Add-dark.png";
import FunnelIcon from "../assets/icons/FunnelSimple.png";
import FunnelIconDark from "../assets/icons/FunnelSimple-dark.png";
import ArrowDownUpIcon from "../assets/icons/ArrowsDownUp.png";
import ArrowDownUpIconDark from "../assets/icons/ArrowsDownUp-dark.png";
import SearchIcon from "../assets/icons/Search.png";
import SearchIconDark from "../assets/icons/Search-dark.png";
import CalendarIcon from "../assets/icons/CalendarBlank.png";
import CalendarIconDark from "../assets/icons/CalendarBlank-dark.png";
import ArrowLeftLight from "../assets/icons/ArrowLeft.png";
import ArrowLeftDark from "../assets/icons/ArrowLeft-dark.png";
import ArrowRightLight from "../assets/icons/ArrowRight.png";
import ArrowRightDark from "../assets/icons/ArrowRight-dark.png";

function OrderList() {
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  const isAllSelected =
    orders.length > 0 && selectedOrders.length === orders.length;

  const statusColors = {
    pending: "var(--status-pending-color)",
    completed: "var(--status-completed-color)",
    inprogress: "var(--status-inprogress-color)",
    approved: "var(--status-approved-color)",
    rejected: "var(--status-rejected-color)",
  };

  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <div className="order-list-topbar">
        <div className="order-list-icons">
          <ThemedIcon
            className="order-list-icon"
            lightSrc={AddIcon}
            darkSrc={AddIconDark}
          />
          <ThemedIcon
            className="order-list-icon"
            lightSrc={FunnelIcon}
            darkSrc={FunnelIconDark}
          />
          <ThemedIcon
            className="order-list-icon"
            lightSrc={ArrowDownUpIcon}
            darkSrc={ArrowDownUpIconDark}
          />
        </div>
        <div className="order-list-search">
          <ThemedIcon
            lightSrc={SearchIcon}
            darkSrc={SearchIconDark}
            className="order-list-search-icon"
          />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <table className="order-list-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
                aria-label="Select all orders"
              />
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const statusKey = order.status.toLowerCase().replace(/\s+/g, "");
            return (
              <tr
                key={order.id}
                className={
                  selectedOrders.includes(order.id) ? "selected-row" : ""
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => toggleOrderSelection(order.id)}
                    aria-label={`Select order ${order.id}`}
                  />
                </td>
                <td>{order.id}</td>
                <td>
                  <ThemedIcon
                    lightSrc={order.iconLight}
                    darkSrc={order.iconDark}
                    className="order-list-user-icon"
                  />
                  {order.user}
                </td>
                <td>{order.project}</td>
                <td>{order.address}</td>
                <td>
                  <ThemedIcon
                    className="order-list-date-icon"
                    lightSrc={CalendarIcon}
                    darkSrc={CalendarIconDark}
                  />
                  {order.date}
                </td>
                <td>
                  <span
                    className="status-with-dot"
                    style={{
                      color: statusColors[statusKey] || "var(--text-color)",
                    }}
                  >
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor:
                          statusColors[statusKey] || "var(--text-color)",
                      }}
                    />
                    {order.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="order-list-pagination">
        <button className="pagination-arrow">
          <ThemedIcon lightSrc={ArrowLeftLight} darkSrc={ArrowLeftDark} />
        </button>
        {[1, 2, 3, 4, 5].map((pageNum) => (
          <button key={pageNum} className="pagination-number">
            {pageNum}
          </button>
        ))}
        <button className="pagination-arrow">
          <ThemedIcon lightSrc={ArrowRightLight} darkSrc={ArrowRightDark} />
        </button>
      </div>
    </div>
  );
}

export default OrderList;
