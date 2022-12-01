import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="d-flex gap-2">
      <button
        className="bg-dark text-white  border-0"
        onClick={() => setDecrease()}
      >
        <FaMinus />
      </button>
      <div className="bg-light" style={{ backgroundColor: "#eee" }}>
        {amount}
      </div>
      <button
        className="bg-dark text-white border-0"
        onClick={() => setIncrease()}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
