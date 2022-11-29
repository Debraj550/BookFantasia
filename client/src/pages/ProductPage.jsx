import React, { useState, useEffect } from "react";
import "../styles/productpage.css";
import { useParams } from "react-router-dom";
import { TbTruck } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import CartAmountToggle from "../componenets/CartAmountToggle";
import { NavLink } from "react-router-dom";
import "../styles/cartTogle.css";
import Star from "../componenets/Star";
import axios from "../api/axios";
import { Col, Row } from "react-bootstrap";
import FormData from "form-data";

const ProductPage = () => {
  const addToCartUrl = "/api/upload_cart/";
  const getBookUrl = "/api/get_books/";
  const { book_id } = useParams();
  const [product, setProduct] = useState();
  const userId = window.localStorage.getItem("userId");
  const [amount, setAmount] = useState(1);
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSingleProduct = async () => {
    await axios
      .get(getBookUrl, { params: { book_id: book_id } })
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
    console.log(amount);
  };

  const setIncrease = () => {
    amount < product.quantity
      ? setAmount(amount + 1)
      : setAmount(product.quantity);
    console.log(amount);
  };

  const addToCart = async () => {
    const cartData = new FormData();
    cartData.append("book_id", book_id);
    cartData.append("user_id", userId);
    cartData.append("quantity", amount);
    console.log(cartData);
    const response = await axios
      .post(addToCartUrl, cartData)
      .then((res) => {
        {
          console.log(res);
        }
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div>
      {product && (
        <Row className="product">
          <Col lg={6} md={6} xs={12} className="book-img">
            <img
              className="book-img-item"
              src={`${imageDefaultPath}/${product.book_img}`}
            />
          </Col>
          <Col lg={6} md={6} xs={12} className="book-description">
            <div className="product-data">
              <div className="bookname">
                <h2> {product.book_name} </h2>
              </div>
              <Star rating={product.book_rating} />
              <p>{product.desc}</p>
              <br />
              <label id="authorname">
                <h5>By: {product.author_name}</h5>
              </label>
              <br />
              <br />
              <div>
                <h3>
                  <span className="product-price">₹{product.price}</span>
                </h3>
                <br />
              </div>
              <br />
              <div className="product-delivery">
                <div className="productfreedelivery">
                  <TbTruck className="deliveryicon" />
                  <br />
                  <label>
                    <h6>Free Delivery</h6>
                  </label>
                </div>

                <div className="productfreedelivery">
                  <TbReplace className="deliveryicon" />
                  <br />
                  <label>
                    <h6>10 days Replacement</h6>
                  </label>
                </div>
                <div className="productfreedelivery">
                  <GiMoneyStack className="deliveryicon" />
                  <br />
                  <label>
                    <h6>Cash on Delivery</h6>
                  </label>
                </div>
              </div>
              <div className="product-data-info">
                <p style={{ fontWeight: "bold" }}>
                  <span>
                    {" "}
                    {product.quantity > 0
                      ? `In Stock: ${product.quantity}`
                      : "Out of stock"}
                  </span>
                </p>
              </div>
              <br />
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
              <br />
              <div className="add-cart-buttons">
                <button onClick={addToCart} className="btn btn-primary fw-bold">
                  Add to Cart
                </button>

                <button onClick={addToCart} className="btn btn-primary">
                  <NavLink
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                    to={`/Cart`}
                  >
                    Buy Now
                  </NavLink>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default ProductPage;
