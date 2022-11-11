import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const NavigationBar = () => {
  return (
    <div>
      <section>
        <nav>
          <ul className="product-nav-bar">
            <li className="product-items">
              <Link to="/Home/Engineering" category="engineering">
                Engineering
              </Link>
            </li>
            <li className="product-items">
              <Link to="/Home/Stories">Stories and Novels</Link>
            </li>
            <li className="product-items">
              <Link to="/Home/BestSeller">Best Sellers</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
export default NavigationBar;
