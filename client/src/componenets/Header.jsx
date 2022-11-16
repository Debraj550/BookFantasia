import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedin = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("userName");
  return (
    <div>
      <nav className="header">
        <Link className="brand col-lg-2 col-md-2 col-sm-3" to="/">
          <i className="fa fa fa-book">BookFantasia </i>
        </Link>
        <div className="search-bar">
          <input
            type="text"
            className="col-md-12"
            placeholder="Search books"
          ></input>
          <button className="btn-xm btn-info">
            <i className="fa fas fa-search"></i>
          </button>
        </div>
        <ul>
          <li className="active ">
            <Link className="items" to="/Cart">
              <i className="fa fa-fw fas fa-cart-plus"></i> Cart
            </Link>
          </li>
          <li className="active ">
            <Link className="items" to={isLoggedin ? "/signout" : "/signin"}>
              <i className="fa fa-fw fa-user"></i>
              {isLoggedin ? `Hi,${userName}` : "Sign In"}
            </Link>
          </li>
          <li className="active ">
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
