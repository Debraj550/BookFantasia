import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const isLoggedin = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("userName");
  const navigate = useNavigate();
  const userSignout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("userId");
    navigate("/Home");
    window.location.reload();
  };
  return (
    <div className="top-navbar">
      <nav className="header">
        <Link className="brand col-lg-2 col-md-2 col-sm-3" to="/">
          <i className="fa fa-book">BookFantasia </i>
        </Link>
        <div className="search-bar">
          <input
            type="text"
            className="col-md-12"
            placeholder="Search books"
          ></input>
          <button className="btn-xm search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ul>
          <li className="active ">
            <Link className="items" to="/Cart">
              <i className="fa fa-fw fas fa-cart-plus"></i> Cart
            </Link>
          </li>
          <li className="active ">
            {isLoggedin ? (
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "#020B3E",
                    border: "none",
                    fontWeight: "bold",
                  }}
                  variant="dark"
                  className="items"
                  id="dropdown-basic"
                >
                  Hi, {userName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={userSignout}>Sign Out</Dropdown.Item>
                  <Dropdown.Item href="/orders">
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/orders"
                    >
                      My Orders
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/posted_books"
                    >
                      Books posted
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link className="items" to={"/signin"}>
                <i className="fa fa-fw fa-user"></i>
                Sign In
              </Link>
            )}
          </li>
          <li className="sellbook-btn-item ">
            <Link to="/SellBook">
              <button className="btn btn-danger">+SELL BOOKS</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
