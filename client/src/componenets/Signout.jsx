import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signout.css";

const Signout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userName");
    navigate("/Home");
    window.location.reload();
  };

  return (
    <div className="signout-container">
      <button onClick={handleClick}>Sign out</button>
    </div>
  );
};

export default Signout;
