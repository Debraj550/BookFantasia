import React, { useState, useEffect } from "react";
import "../styles/productpage.css";
import { useNavigate, useParams } from "react-router-dom";
import { TbTruck } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import CartAmountToggle from "../componenets/CartAmountToggle";
import { NavLink } from "react-router-dom";
import "../styles/cartTogle.css";
import Star from "../componenets/Star";
import axios from "../api/axios";
import Modal from "react-bootstrap/Modal";
import {
  Alert,
  Button,
  Col,
  Container,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import FormData from "form-data";
import Reviews from "../componenets/Reviews";

const ProductPage = () => {
  const addToCartUrl = "/api/upload_cart/";
  const getBookUrl = "/api/get_books/";
  const { book_id } = useParams();
  const [product, setProduct] = useState();
  const userId = window.localStorage.getItem("userId");
  const [amount, setAmount] = useState(0);
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const navigate = useNavigate();
  const [preorderBook, setPreorderBook] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    await axios
      .get(getBookUrl, { params: { book_id: book_id } })
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const preOrder = async () => {
    const preOrderData = new FormData();
    preOrderData.append("user_id", userId);
    preOrderData.append("book_id", book_id);
    await axios
      .post("/api/upload_register/", preOrderData)
      .then((res) => {
        setPreorderBook(true);
        console.log("Pre order successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setDecrease = () => {
    amount > 0 ? setAmount(amount - 1) : setAmount(0);
    console.log(amount);
  };

  const setIncrease = () => {
    amount < product.quantity
      ? setAmount(amount + 1)
      : setAmount(product.quantity);
    console.log(amount);
  };
  const handleBuy = async () => {
    const cartData = new FormData();
    cartData.append("book_id", book_id);
    cartData.append("user_id", userId);
    cartData.append("quantity", amount);
    if (amount === 0) return;
    console.log(cartData);
    const response = await axios
      .post(addToCartUrl, cartData)
      .then((res) => {
        {
          navigate("/cart");
        }
      })
      .catch((errors) => console.log(errors));
  };
  const addToCart = async () => {
    const cartData = new FormData();
    cartData.append("book_id", book_id);
    cartData.append("user_id", userId);
    cartData.append("quantity", amount);
    console.log(cartData);
    if (amount === 0) return;
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
        <Container>
          <Row className="product">
            <Col lg={6} md={6} xs={12} className="book-img ">
              <img
                className="book-img-item shadow-lg "
                src={`${imageDefaultPath}/${product.book_img}`}
              />
            </Col>
            <Col
              lg={6}
              md={6}
              xs={12}
              className="book-description square border-start border-4 px-4"
            >
              <div className="product-data">
                <div className="bookname">
                  <h2> {product.book_name} </h2>
                </div>
                <Star rating={product.book_rating} />

                <br />
                <label id="authorname">
                  <h5 className="text-muted">Author: {product.author_name}</h5>
                  <h6 className="fw-bold">
                    Seller Name: {product.seller_name}
                  </h6>
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
                  className="bg-dark"
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
                <br />
                <>
                  {product.quantity > 0 ? (
                    <div className="add-cart-buttons">
                      <button
                        onClick={addToCart}
                        className="btn btn-primary fw-bold"
                      >
                        Add to Cart
                      </button>

                      <button
                        className="text-white fw-bold btn btn-primary"
                        onClick={handleBuy}
                        style={{ textDecoration: "none" }}
                        to={`/Cart`}
                      >
                        Buy Now
                      </button>
                    </div>
                  ) : (
                    <div className="">
                      <button
                        onClick={handleShow}
                        className="btn btn-primary fw-bold"
                        disabled={preorderBook}
                      >
                        {preorderBook
                          ? "Already in wishlist"
                          : "Pre order book"}
                      </button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="fw-bold bg-secondary text-white w-100 text-center rounded-pill">
                            Pre Order
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {preorderBook ? (
                            <Alert
                              className="fw-bold py-2"
                              variant="success"
                              show={preorderBook}
                            >
                              <span>Thank you for your order.</span>
                            </Alert>
                          ) : (
                            <p>
                              <span className="py-4">
                                The book will be available in your cart when new
                                stock is available.
                              </span>
                              <br></br>
                              <span>
                                Press{" "}
                                <span className="fw-bold text-success">
                                  "Confirm"{" "}
                                </span>
                                to pre-order.
                              </span>
                              <br></br>
                              Press{" "}
                              <span className="fw-bold text-danger">
                                "Cancel"{" "}
                              </span>
                              to go back.
                            </p>
                          )}
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-center gap-4">
                          <Button onClick={handleClose}>Cancel</Button>
                          {preorderBook ? (
                            <></>
                          ) : (
                            <Button onClick={preOrder}>Confirm</Button>
                          )}
                        </Modal.Footer>
                      </Modal>
                    </div>
                  )}
                </>
              </div>
            </Col>
          </Row>

          <div className="">
            <div>
              <h4
                className="fw-bold text-white px-2 py-2"
                style={{ backgroundColor: "#36368B" }}
              >
                Product Description{" "}
              </h4>
            </div>
            <div className="px-10 py-2 m-0">
              <h5 className="text-start text-wrap px-2">{product.desc}</h5>
            </div>
          </div>

          <div>
            <h4
              className="fw-bold text-white px-2 py-2"
              style={{ backgroundColor: "#36368B" }}
            >
              Reviews{" "}
            </h4>
          </div>

          <Reviews bookId={book_id} />
        </Container>
      )}
    </div>
  );
};
export default ProductPage;
