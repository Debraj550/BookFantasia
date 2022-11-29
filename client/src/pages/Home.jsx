import React from "react";
import NavigationBar from "../componenets/NavigationBar";
import { Outlet } from "react-router-dom";
import "../styles/home.css";
import { useEffect } from "react";
import Slider from "../componenets/Slider/Slider";
import { Container } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-page">
      <NavigationBar className="main-navbar" />
      <Outlet />
    </div>
  );
};

export default Home;
