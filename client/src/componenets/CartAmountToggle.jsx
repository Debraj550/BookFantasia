import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../styles/cartTogle.css";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cartToggle">
      <div className="toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
