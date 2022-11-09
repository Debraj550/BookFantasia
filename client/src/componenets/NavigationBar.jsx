import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const NavigationBar = () => {
    return (
      <div>
        <section>
            <nav>
                 <ul>
                    <li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </li>
                    <li><a href="Engineering">Engineering</a></li>
                    <li><a href="Science">Science</a></li>
                    <li><a href="Politics">Politics</a></li>
                    

 
                 </ul>
            </nav>
        </section>
    </div>
    )
}
export default NavigationBar;
