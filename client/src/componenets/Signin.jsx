import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import axios from "../api/axios";
import Signout from "./Signout";

const Signin = (props) => {
  const url = "/api/getUser/";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    console.log("isLoggedin : " + isLoggedin);
  }, [isLoggedin]);

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
  };

  const submitUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .get(url, { params: { email_id: data.email, password: data.password } })
        .then((userData) => {
          console.log(userData);
          const isPresent = userData.data.isPresent;
          if (isPresent) {
            window.localStorage.setItem("token", true);
            window.localStorage.setItem("userName", userData.data.first_name);
            window.localStorage.setItem("userId", userData.data.user_id);
            setIsLoggedin(true);
            navigate("/Home");
            window.location.reload();
          } else {
            alert("Invalid email or password. Please try again.");
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  var bgColors = {
    Default: "#81b71a",
    Blue: "#00B1E1",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    Yellow: "#eee",
  };

  if (isLoggedin) {
    return (
      <section
        style={{
          backgroundColor: bgColors.Yellow,
          minHeight: "100vh",
          height: 100,
        }}
      >
        <Signout />
      </section>
    );
  } else {
    return (
      <section
        style={{
          backgroundColor: bgColors.Yellow,
          minHeight: "100vh",
          height: 100,
        }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderradius: 25, borderRadius: 30 }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={submitUser}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleChange}
                              value={data.email}
                              required
                              type="email"
                              id="email"
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={handleChange}
                              value={data.password}
                              required
                              type="password"
                              id="password"
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-flex-start mb-5"></div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Don't have an account yet ?{" "}
                            <Link to="/signup">Sign Up</Link>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default Signin;
