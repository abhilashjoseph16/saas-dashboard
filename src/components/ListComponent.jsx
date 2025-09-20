import React from "react";
import "../css/components/ListComponent.css";

const data = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    id: 3,
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { id: 4, name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const ListComponent = () => {
  return (
    <div className="list-component">
      <h2 className="list-title">Top Selling Products</h2>
      <table className="list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, price, quantity, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;
