import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const NavigationBar = () => {
  return (
    <div className="subnavbar">
      <section>
        <nav>
          <ul className="product-nav-bar">
            <li className="product-items">
              <Link to="/Home/engineering">Engineering</Link>
            </li>
            <li className="product-items">
              <Link to="/Home/stories">Stories and Novels</Link>
            </li>
            <li className="product-items">
              <Link to="/Home/bestseller">Best Sellers</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
export default NavigationBar;
