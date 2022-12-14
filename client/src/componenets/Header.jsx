import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "../api/axios";
import ProductCategory from "./catergory/ProductCategory";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect } from "react";

const Header = () => {
  const url = "/api/get_books/";
  const isLoggedin = window.localStorage.getItem("token");
  const userName = window.localStorage.getItem("userName");
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchedData] = useState();
  const [cartData, setCartData] = useState([]);
  const userId = window.localStorage.getItem("userId");
  const [errors, setErrors] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const response = await axios
      .get(url, { params: { user_id: userId } })
      .then((res) => {
        setCartData(res.data);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  const handleSearch = () => {
    setSearchVal("");
    navigate(`/Home/search/${searchVal}`);
  };

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
        <div class="input-group input-group-sm w-50">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search books"
            onKeyDown={handleKeyDown}
            className="form-control"
            aria-label="Search books"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              className="fa fa-search btn btn-danger"
              onClick={handleSearch}
              type="button"
            ></button>
          </div>
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
                  <Dropdown.Item
                    className="text-danger fw-bold text-center"
                    onClick={userSignout}
                  >
                    Sign Out
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold text-center">
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/orders"
                    >
                      My Orders
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold text-center">
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
