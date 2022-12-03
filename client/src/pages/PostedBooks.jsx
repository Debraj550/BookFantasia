import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "../api/axios";
import "../styles/PostedBooks.css";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
const PostedBooks = () => {
  const getBooksUrL = "/api/get_books/";
  const userId = window.localStorage.getItem("userId");
  const userName = window.localStorage.getItem("userName");
  const [postedBooks, setPostedBooks] = useState([]);
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder";
  const deleteUrl = "api/delete_books/";
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getPostedBooks();
  }, [deleted]);

  const getPostedBooks = async () => {
    const response = await axios
      .get(getBooksUrL, { params: { user_id: userId } })
      .then((res) => {
        console.log(res.data);
        setPostedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = async (book_id) => {
    axios
      .delete(deleteUrl, { params: { book_id: book_id } })
      .then((res) => {
        console.log("Deletion successfull.");
        setDeleted(!deleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" vh-100">
      <section className="py-5">
        <div className="container text-center text-white fw-bolder px-4 bg-danger">
          <h4>Posted Books Dashboard</h4>
        </div>
        <div className="cart-container container px-4 px-lg-5 mb-5">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                {postedBooks && postedBooks.length === 0 && (
                  <div className="container bg-light ">
                    <Alert variant="danger">
                      No books were posted by you. Kindly{" "}
                      <Link
                        className="fw-bold"
                        style={{ textDecoration: "none" }}
                        to="/Sellbook"
                      >
                        click here
                      </Link>{" "}
                      to sell your book.
                    </Alert>
                  </div>
                )}
                {postedBooks && postedBooks.length > 0 && (
                  <div className="container">
                    <Row className="text-center border border-radius-10">
                      <Col scope="col" className="border-0 bg-light fw-bold ">
                        <div className="py-2 text-uppercase">Product</div>
                      </Col>
                      <Col
                        scope="col"
                        className="border-0 bg-light fw-bold w-100"
                      ></Col>
                      <Col scope="col" className="border-0 bg-light fw-bold">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </Col>
                      <Col scope="col" className="border-0 bg-light fw-bold">
                        <div className="py-2 text-uppercase">Price</div>
                      </Col>
                      <Col scope="col" className="border-0 bg-light fw-bold">
                        <div className="py-2 text-uppercase">Remove</div>
                      </Col>
                    </Row>
                    {postedBooks &&
                      postedBooks.map((book, k) => (
                        <Row
                          key={book.book_id}
                          className="align-items-center mt-2 mb-2 text-center border p-2"
                        >
                          <Col>
                            <img
                              src={`${imageDefaultPath}/${book.book_img}`}
                              width="100"
                              height="130"
                            ></img>
                          </Col>
                          <Col>
                            <Row className="fw-bold text-uppercase text-start">
                              {book.book_name}
                            </Row>
                            <Row className="text-muted text-start">
                              {book.desc.slice(0, 100)}
                            </Row>
                          </Col>
                          <Col className="fw-bold">{book.quantity}</Col>
                          <Col className="fw-bold">₹{book.price}</Col>
                          <Col>
                            <button
                              onClick={() => {
                                deleteItem(book.book_id);
                              }}
                              className="rounded-pill btn-dark  shadow-sm remove-posted-btn"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </Col>
                        </Row>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostedBooks;
