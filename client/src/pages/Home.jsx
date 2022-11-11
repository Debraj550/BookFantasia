import React from "react";
import NavigationBar from "../componenets/NavigationBar";
import { BrowserRouter as Router, Outlet } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Home;
