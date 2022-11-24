import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/cart.css";
import axios from "../api/axios";

const Cart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "/api/get_cart/";
  const getBookUrl = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const userId = window.localStorage.getItem("userId");
  const [cartData, setCartData] = useState();
  const [errors, setErrors] = useState();
  const [bookImg, setBookImg] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    getCartData();
  }, []);

  const getBookData = async (bookId) => {
    await axios
      .get(getBookUrl, { params: { book_id: bookId } })
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartData = async () => {
    const response = await axios
      .get(url, { params: { user_id: userId } })
      .then((res) => {
        setCartData(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };
  return (
    <div className="cart">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData &&
                      cartData.map((data, k) => (
                        <tr key={data.book_id}>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src={`${imageDefaultPath}/default.jpg`}
                                alt=""
                                width="70"
                                className="img-fluid rounded shadow-sm"
                              />
                              <div className="ms-3 d-inline-block align-middle">
                                <h5 className="mb-0">
                                  <a
                                    href="#"
                                    className="text-dark d-inline-block align-middle"
                                  >
                                    {data.book_id}
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle">
                            <strong>$79.00</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <strong>{data.quantity}</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <a href="#" className="text-dark">
                              <i className="bi bi-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
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
                      className="btn btn-dark px-4 rounded-pill"
                    >
                      <i className="fa fa-gift mr-2"></i>Apply coupon
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
                Order summary{" "}
              </div>
              <div className="p-4">
                <p className="mb-4">
                  <em>
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </em>
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>$390.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">
                      Shipping and handling
                    </strong>
                    <strong>$10.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <h5 className="fw-bold">$400.00</h5>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-dark rounded-pill py-2 d-md-block"
                >
                  Procceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
