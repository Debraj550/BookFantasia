import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { Alert, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Signup = () => {
  const url = "/api/upload_user/";
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
  };

  const submitUser = async (event) => {
    event.preventDefault();
    console.log(errors);
    const signupData = new FormData();
    if (data.password === data.confirmPassword) {
      setErrors(false);
      signupData.append("first_name", data.firstName);
      signupData.append("last_name", data.lastName);
      signupData.append("email_id", data.email);
      signupData.append("password", data.password);
      await axios
        .post(url, signupData)
        .then((res) => {
          setSignedUp(true);
          setShow(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrors(true);
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
  return (
    <section
      className="h-100 d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundColor: bgColors.Yellow,
      }}
    >
      <div className="container h-100">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <h5 className="fw-bold text-success">Registration successful.</h5>
          </Modal.Header>
          <Modal.Body>
            Kindly{" "}
            <Link className="text-decoration-none fw-bold" to="/signin">
              click here
            </Link>{" "}
            to sign in.
          </Modal.Body>
        </Modal>
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
                      Register
                    </p>

                    <form onSubmit={submitUser} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-fw fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 mr col">
                          <input
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            type="text"
                            id="firstName"
                            className="form-control invalid"
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                        <i className="fa fa-fw fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 col">
                          <input
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            type="text"
                            id="lastName"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-fw fas fa-envelope fa-lg me-3 fa-fw"></i>
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
                        <i className="fa fa-fw fas fa-lock fa-lg me-3 fa-fw"></i>
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

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa fa-fw fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={handleChange}
                            required
                            value={data.confirmPassword}
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-flex-start mb-3 w-100">
                        <Alert variant="danger" show={errors}>
                          Invaid email or password.
                        </Alert>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Already have an account ?{" "}
                          <Link to="/signin">Sign In</Link>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
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
};
export default Signup;
