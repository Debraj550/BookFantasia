import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link className="brand" to="/">
          BookFantasia <i class="fa fas fa-home"></i>
        </Link>
        <div className="search-bar">
          <input
            type="text"
            className="col-md-12 box"
            placeholder="Search.."
          ></input>
          <button className="search_button">Search</button>
        </div>
        <ul>
          <li className="active ">
            <Link className="items" to="/Cart">
              <i className="fa fa-fw fas fa-cart-plus"></i> Cart
            </Link>
          </li>
          <li className="active ">
            <Link className="items" to="/signin">
              <i className="fa fa-fw fa-user"></i>Sign In
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
