import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sellbook.css";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import FormData from "form-data";
import Alert from "react-bootstrap/Alert";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SellBook = () => {
  const url = "/api/upload_books/";
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [show, setShow] = useState(false);

  const [bookData, setBookData] = useState({
    userId: userId,
    bookName: "",
    authorName: "",
    category: "",
    language: "english",
    description: "",
    quantity: 1,
    price: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    setShow(false);
    navigate("/Home");
  };
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    const newBookData = { ...bookData };
    newBookData[event.target.id] = event.target.value;
    setBookData(newBookData);
    console.log(newBookData);
  };
  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    //console.log(image);
    console.log(userId);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const imageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
  };

  const submitBook = (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("user_id", userId);
    data.append("book_name", bookData.bookName);
    data.append("author_name", bookData.authorName);
    data.append("language", bookData.language);
    data.append("desc", bookData.description);
    data.append("price", bookData.price);
    data.append("category", bookData.category);
    data.append("quantity", bookData.quantity);
    data.append("book_img", image);

    axios
      .post(url, data)
      .then((res) => {
        {
          setIsSubmitted(true);
          setShow(true);
        }
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div className="sellbook-container">
      <div className="form-container">
        {show && (
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title
                className="fw-bold text-white w-100 text-center"
                style={{ backgroundColor: "#36368B" }}
              >
                Status
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="fw-bold text-center text-success">
              Your book has been posted
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button
                variant="secondary"
                onClick={() => navigate("/posted_books")}
              >
                Dashboard
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <form onSubmit={submitBook} className="px-4 py-4">
          <div className="form-group row">
            <h5 className="register-book-heading px-2 py-2 text-uppercase fw-bold text-white bg-danger">
              Register Book
            </h5>
            <br></br>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="book_name"
              className="col-sm-2 col-form-label fw-bold"
            >
              Book Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="bookName"
                placeholder="Enter the book name"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="book_name"
              className="col-sm-2 col-form-label fw-bold"
            >
              Author Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="authorName"
                placeholder="Enter the author name"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="book_name"
              className="col-sm-2 col-form-label fw-bold"
            >
              Category
            </label>
            <div className="col-sm-2 btn-group">
              <select
                id="category"
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="medical">Medical</option>
                <option value="stories">Stories</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="book_name"
              className="col-sm-2 col-form-label fw-bold"
            >
              Language
            </label>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  onChange={handleChange}
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="language"
                  value="english"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  English
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={handleChange}
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="language"
                  value="hindi"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Hindi
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="book_name"
              className="col-sm-2 col-form-label fw-bold"
            >
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                onChange={handleChange}
                id="description"
                className="form-control"
                aria-label="With textarea"
                placeholder="Enter book description"
                style={{ height: "150px" }}
              ></textarea>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              className="col-sm-2 col-form-label fw-bold"
              htmlFor="exampleFormControlFile1"
            >
              Upload image
            </label>
            <div className="col-sm-10">
              <input
                onChange={imageChange}
                type="file"
                className="form-control-file"
                id="image"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
          {image && (
            <div className="form-group row mb-2">
              <label
                className="col-sm-2 col-form-label fw-bold"
                htmlFor="exampleFormControlFile1"
              >
                [ Preview ]
              </label>
              <div className="col-sm-10">
                <img src={preview} alt="image" width={200} height={250}></img>
              </div>
            </div>
          )}

          <div className="form-group row mb-2">
            <label
              className="col-sm-2 col-form-label fw-bold"
              htmlFor="exampleFormControlFile1"
            >
              Quantity
            </label>
            <div className="col-sm-3 d-flex space-betweeen">
              <input
                onChange={handleChange}
                id="quantity"
                value={bookData.quantity}
                type="number"
                min="1"
                className="form-control"
                aria-label="Amount"
                placeholder="Enter quantity"
              />
            </div>
          </div>
          <div className="form-group row mb-4">
            <label
              className="col-sm-2 col-form-label fw-bold"
              htmlFor="exampleFormControlFile1"
            >
              Price
            </label>
            <div className="col-sm-4 d-flex space-betweeen">
              <span className="input-group-text">
                <i className="fa fa-rupee"></i>
              </span>
              <input
                onChange={handleChange}
                id="price"
                value={bookData.price}
                type="number"
                min="0"
                step="1"
                className="form-control"
                aria-label="Amount"
                placeholder="Enter price"
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="form-group row mb-4">
            <label
              className="col-sm-2 col-form-label fw-bold"
              htmlFor="exampleFormControlFile1"
            >
              Enter UPI ID:
            </label>
            <div className="col-sm-6 d-flex ">
              <input
                id="upi"
                type="text"
                placeholder="Enter UPI"
                className="border-0 px-2"
              />
            </div>
          </div>
          <div className="form-group row submit-section">
            <hr></hr>
            <button
              type="button"
              className="btn col-sm-2 rounded-pill btn-dark"
              onClick={() => navigate("/Home")}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn  col-sm-2 rounded-pill btn-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellBook;
