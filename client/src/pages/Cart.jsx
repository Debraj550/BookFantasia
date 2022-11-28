import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/cart.css";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from "../componenets/CheckoutForm";

const Cart = () => {
  const stripePromise = loadStripe(
    "pk_live_51M81BjSB2nZihmDBToEMRBlOcVXrvi56TDCyDHAj8f3XhFaJTvrzqGezUg4xemYgYSh1N56jDSXR8L6hCZpsBMG4005l0XlWvw"
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "/api/get_cart/";
  const getBookUrl = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const deleteUrl = "/api/delete_cart/";
  const userId = window.localStorage.getItem("userId");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [cartData, setCartData] = useState([
    {
      book_id: "",
      book_name: "",
      book_img: "",
      price: "",
      quantity: "",
    },
  ]);

  const [deleted, setDeleted] = useState(1);
  const [errors, setErrors] = useState();

  useEffect(() => {
    getCartData();
  }, [deleted]);

  useEffect(() => {
    getTotal();
  }, [cartData]);

  const getTotal = () => {
    let sum = 0;
    cartData.map((data) => {
      sum += data.price * data.quantity;
    });
    setTotal(sum);
  };
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
  //cartData && console.log("cartdata", cartData);

  const deleteItem = (book_id) => {
    axios
      .delete(deleteUrl, { params: { user_id: userId, book_id: book_id } })
      .then((res) => {
        console.log("Deletion successfull.");
        setDeleted(!deleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckout = () => {
    console.log("working");
  };
  return (
    <div className="">
      <section className="py-5">
        <div className="container text-center text-white fw-bolder px-4 bg-danger">
          <h4>Cart</h4>
        </div>
        <div className="cart-container container px-4 px-lg-5 mb-5">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                {cartData.length === 0 && (
                  <Alert variant="danger">
                    No items are present in the cart. Kindly{" "}
                    <Link
                      className="fw-bold"
                      style={{ textDecoration: "none" }}
                      to="/Home"
                    >
                      click here
                    </Link>{" "}
                    to go back to home page and start shopping.
                  </Alert>
                )}
                {cartData.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Subtotal</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData &&
                        cartData.map((data, k) => (
                          <tr key={k}>
                            <th scope="row" className="border-0">
                              <div className="text-wrap p-2">
                                <Link
                                  className="d-flex gap-4 align-items-center"
                                  to={`/ProductPage/${data.book_id}`}
                                >
                                  <img
                                    src={`${imageDefaultPath}/${data.book_img}`}
                                    alt=""
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="">
                                    <h6>
                                      <a
                                        href="#"
                                        className="text-dark text-wrap w-70"
                                      >
                                        {data.book_name}
                                      </a>
                                    </h6>
                                  </div>
                                </Link>
                              </div>
                            </th>
                            <td className="border-0 align-middle">
                              <strong id="price">₹{data.price}</strong>
                            </td>
                            <td className="border-0 align-middle">
                              <strong>{data.quantity}</strong>
                            </td>
                            <td className="border-0 align-middle">
                              <strong>₹{data.price * data.quantity}</strong>
                            </td>
                            <td className="border-0 align-middle">
                              <button
                                onClick={() => {
                                  console.log(data.book_id);
                                  deleteItem(data.book_id);
                                }}
                                className="rounded-pill btn-dark  shadow-sm"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                Coupon code
              </div>
              <div className="p-4">
                <p className="mb-4">
                  <em>
                    If you have a coupon code, please enter it in the box below
                  </em>
                </p>
                <div className="input-group mb-4 border rounded-pill p-2">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                  />
                  <div className="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      className={`btn btn-dark px-4 rounded-pill ${
                        cartData.length > 0 ? "enabled" : "disabled"
                      }`}
                    >
                      <i className={`fa fa-gift mr-2`}></i>
                      Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                Instructions for seller
              </div>
              <div className="p-4">
                <p className="mb-4">
                  <em>
                    If you have some information for the seller you can leave
                    them in the box below
                  </em>
                </p>
                <textarea
                  name=""
                  cols="30"
                  rows="2"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                Order summary
              </div>
              <div className="p-4">
                <p className="mb-4">
                  <em>
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </em>
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Total </strong>
                  </li>
                  <li className="justify-content-between py-3 border-bottom">
                    <strong className="text-black">₹{total}</strong>
                  </li>
                </ul>

                <button
                  onClick={handleShow}
                  className={`btn  btn-dark rounded-pill py-2 d-md-block ${
                    cartData.length > 0 ? "enabled" : "disabled"
                  }`}
                >
                  Procceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Elements stripe={stripePromise}>
            <CheckoutForm price={{ total }} />
          </Elements>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Go Back
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
