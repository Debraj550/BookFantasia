import React from "react";
import '../styles/header.css';
import {Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div>
            <nav className="header">
                <h3>BookFantasia</h3>
                <input type="text" className="searchbar" placeholder="Search.."></input>
                <ul className="nav_links">
                    <li className = "active"><Link to="/sellbooks">Sell books to us!</Link></li>
                    <li className = "active"><Link to="/cart">Cart</Link></li>
                    <li className = "active"><Link to="/signup">Sign In | Sign Up</Link></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Header;