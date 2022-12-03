import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import FormData from "form-data";
import React, { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios, { ApiService } from "../api/axios.jsx";
import "../styles/CheckoutForm.css";

const CheckoutForm = (props) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [...data] = props.data.cartData;
  const purchaseUrl = "/api/upload_purchase/";
  const userId = window.localStorage.getItem("userId");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    console.log(data);
    data &&
      data.forEach(async (item) => {
        let temp = new FormData();
        temp.append("user_id", userId);
        temp.append("book_id", item.book_id);
        temp.append("quantity", item.quantity);
        await axios
          .post(purchaseUrl, temp)
          .then((res) => {
            {
              console.log(res);
              setIsSuccess(true);
            }
          })
          .catch((errors) => console.log(errors));
      });

    if (!error) {
      axios
        .delete("/api/empty_cart/", { params: { user_id: userId } })
        .then((res) => {
          console.log("Cart emptied succesfully.");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {isSuccess ? (
        <Alert variant="success" className="text-center">
          <h5>Payment has been successful.</h5>
          <h6>Kindly check your email for confirmation.</h6>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="stripe-form">
          <h5 className="text-muted">
            Total: <i className="fa fa-rupee"></i>
            {props.price.total}
          </h5>
          <div className="form-row">
            <label htmlFor="email" className="fw-bold">
              Email Address -
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-row">
            <label htmlFor="address" className="fw-bold">
              Shipping Address -
            </label>
            <input
              className="form-input"
              id="address"
              name="address"
              type="text"
              placeholder="Enter your delivery address"
              required
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="form-row">
            <label htmlFor="card-element" className="fw-bold">
              Credit or debit card
            </label>

            <CardElement id="card-element" onChange={handleChange} />
            <div className="card-errors" role="alert">
              {error}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit Payment
          </button>
        </form>
      )}
    </>
  );
};
export default CheckoutForm;
