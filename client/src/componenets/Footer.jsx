import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="container site-footer fixed-bottom">
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "#202020" }}
      >
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#E74C3C" }}
          >
            <i className="fa fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#E74C3C" }}
          >
            <i className="fa fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#E74C3C" }}
          >
            <i className="fa fab fa-instagram"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#E74C3C" }}
          >
            <i className="fa fab fa-twitter"></i>
          </button>
        </div>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 - 24 Copyright
          <Link className="text-white" to="">
            <br></br>
            BookFantasia SEM Project
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
