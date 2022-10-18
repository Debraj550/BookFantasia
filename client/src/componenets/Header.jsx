import React from "react";
import '../styles/header.css';
import {Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div>
            <nav className="header">
                <h3>BookFantasia</h3>
                <input type="text" className="form-control form-inline mr-sm-2" placeholder="Search.."></input>
                <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                <ul className="nav_links">
                    <li className = "active"><Link to="/SellBook">Sell books to us!</Link></li>
                    <li className = "active"><Link to="/Cart">Cart</Link></li>
                    <li className = "active"><Link to="/signup">Sign In | Sign Up</Link></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Header;