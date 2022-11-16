import React from "react";
import NavigationBar from "../componenets/NavigationBar";
import { Outlet } from "react-router-dom";

import "../styles/home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="home-page">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Home;
