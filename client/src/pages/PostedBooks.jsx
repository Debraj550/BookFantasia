import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "../api/axios";
import "../styles/PostedBooks.css";

const PostedBooks = () => {
  const getBooksUrL = "/api/get_books/";
  const userId = window.localStorage.getItem("userId");
  const userName = window.localStorage.getItem("userName");
  const [postedBooks, setPostedBooks] = useState();
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder";
  const deleteUrl = "api/delete_books/";
  const [deleted, setDeleted] = useState(false);

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
    <div className="posted-books-container vh-100">
      <div className="container bg-light lign-items-center m-auto">
        <h3>Hi, {userName}</h3>
        <h5 className="text-muted">List of books posted : </h5>
      </div>
      <div className="container bg-light">
        <Row className="text-center border border-radius-10 ">
          <Col scope="col" className="border-0 bg-light fw-bold">
            <div className="py-2 text-uppercase">Product</div>
          </Col>
          <Col></Col>
          <Col scope="col" className="border-0 bg-light fw-bold">
            <div className="py-2 text-uppercase">Price</div>
          </Col>
          <Col scope="col" className="border-0 bg-light fw-bold">
            <div className="py-2 text-uppercase">Quantity</div>
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
                ></img>
              </Col>
              <Col>
                <Row className="fw-bold">{book.book_name}</Row>
                <Row className="text-muted">{book.desc}</Row>
              </Col>
              <Col className="fw-bold">{book.quantity}</Col>
              <Col className="fw-bold">₹{book.price}</Col>
              <Col>
                <button
                  onClick={() => {
                    deleteItem(book.book_id);
                  }}
                  className="rounded-pill btn-dark  shadow-sm"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </Col>
            </Row>
          ))}
      </div>
    </div>
  );
};

export default PostedBooks;
