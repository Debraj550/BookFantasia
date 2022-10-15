import React from "react";
import '../styles/header.css';

const Header = () => {
    return (
            <nav className="header">
                <h3>BookFantasia</h3>
                <ul className="nav_links">
                    <li className = "active"><a href ="abc">Sell books to us!</a></li>
                    <li className = "active"><a href ="abc">Cart</a></li>
                    <li className = "active"><a href ="abc">Sign In | Sign Up</a></li>
                </ul>
            </nav>
    );
}

export default Header;