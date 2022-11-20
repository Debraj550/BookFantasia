import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = () => {
  const isLoggedin = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("userName");

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
              <DropdownButton
                id="dropdown-basic-button"
                className="name-dropdown"
                title={`Hi, ${userName}`}
              >
                <Link className="" to="/signout">
                  Signout
                </Link>
              </DropdownButton>
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
