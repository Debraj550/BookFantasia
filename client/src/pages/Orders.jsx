import React, { useEffect } from "react";
import "../styles/Orders.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "../api/axios";

const Orders = () => {
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const [orderData, setOrderDate] = useState([]);
  const url = "/api/get_purchase/";
  const userId = window.localStorage.getItem("userId");
  const [errors, setErrors] = useState();
  useEffect(() => {
    getOrderData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getOrderData = async () => {
    const response = await axios
      .get(url, { params: { user_id: userId } })
      .then((res) => {
        setOrderDate(res.data);
        console.log(res);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };
  return (
    <div className="">
      <section className="py-5">
        <div className="container text-center text-white fw-bolder px-4 bg-danger">
          <h4>Orders</h4>
        </div>
        <div className="cart-container container px-4 px-lg-5 mb-5">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                {orderData.length === 0 && (
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
                {orderData.length > 0 && (
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
                          <div className="py-2 text-uppercase">Status</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">
                            Purchase Date
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData &&
                        orderData.map((data, k) => (
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
                                    width="100"
                                    height="130"
                                  />
                                  <div className="">
                                    <h6>
                                      <a
                                        href="#"
                                        className="text-dark text-wrap w-70 text-muted text-decoration-none"
                                      >
                                        {data.book_name}
                                      </a>
                                    </h6>
                                  </div>
                                </Link>
                              </div>
                            </th>
                            <td className="border-0 align-middle text-muted">
                              <strong id="price">₹{data.price}</strong>
                            </td>
                            <td className="border-0 align-middle text-muted">
                              <strong>{data.quantity}</strong>
                            </td>
                            <td className="border-0 align-middle text-muted">
                              <strong>₹{data.price * data.quantity}</strong>
                            </td>
                            <td className="border-0 align-middle text-muted">
                              <strong>Estimated delivery in 2 days. </strong>
                            </td>
                            <td className="border-0 align-middle text-muted">
                              <strong>{data.date}</strong>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
