import React, { useEffect } from "react";
import "../styles/Orders.css";

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="orders-container container">Orders</div>;
};

export default Orders;
