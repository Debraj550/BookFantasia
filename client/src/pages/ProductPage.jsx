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

const url = "/api/get_books/";
const ProductPage = () => {
  const { book_id } = useParams();
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 64 ? setAmount(amount + 1) : setAmount(64);
  };

  const getSingleProduct = async () => {
    await axios
      .get(url, { params: { book_id: book_id } })
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

  return (
    <div>
      {product && (
        <Row className="product">
          <Col lg={6} md={6} xs={12} className="book-img">
            <img src={`${imageDefaultPath}/${product.book_img}`} />
          </Col>
          <Col lg={6} md={6} xs={12} className="book-description">
            <div className="product-data">
              <div className="bookname">
                <h2> {product.book_name} </h2>
              </div>
              <Star rating={product.seller_rating} />
              <p>{product.desc}</p>
              <br />
              <label id="authorname">
                <h5>By: {product.author_name}</h5>
              </label>
              <br />
              <br />
              <div className="product-price">
                <h3>
                  Price:
                  <del>₹{product.price}</del>
                </h3>{" "}
                <br />
              </div>
              <br />
              <br />
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
                    {product.quantity > 0 ? "In Stock" : "Not Available"}
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
              <NavLink to={`/Cart`}>
                <button className="btn btn-primary">Add to Cart</button>
              </NavLink>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default ProductPage;
