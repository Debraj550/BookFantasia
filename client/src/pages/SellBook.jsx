import React from "react";
import { Link } from "react-router-dom";
import "../styles/sellbook.css";
import { useState } from "react";

const SellBook = () => {
  const [bookData, setBookData] = useState({
    bookName: "",
    authorName: "",
    category: "",
    language: "",
    description: "",
    image: [],
    quantity: 1,
    price: 0,
  });

  const handleChange = (event) => {
    const newBookData = { ...bookData };
    newBookData[event.target.id] = event.target.value;
    setBookData(newBookData);
    console.log(newBookData);
  };

  return (
    <div className="sellbook-container">
      <div className="form-container">
        <form>
          <div className="form-group row">
            <h4 className="register-book-heading">Register Book</h4>
            <br></br>
          </div>
          <div className="form-group row mb-2">
            <label htmlFor="book_name" className="col-sm-2 col-form-label">
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
            <label htmlFor="book_name" className="col-sm-2 col-form-label">
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
            <label htmlFor="book_name" className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-2 btn-group">
              <button
                onChange={handleChange}
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#DDD" }}
              >
                Select
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Engineering
                </Link>
                <Link className="dropdown-item" to="#">
                  Stories and Novels
                </Link>
                <Link className="dropdown-item" to="#">
                  Medical
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Other
                </Link>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label htmlFor="book_name" className="col-sm-2 col-form-label">
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
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Hindi
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label htmlFor="book_name" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                onChange={handleChange}
                id="description"
                className="form-control"
                aria-label="With textarea"
                placeholder="Enter book description"
              ></textarea>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="exampleFormControlFile1"
            >
              Upload image
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                type="file"
                className="form-control-file"
                id="image"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="exampleFormControlFile1"
            >
              Quantity
            </label>
            <div className="col-sm-3 d-flex space-betweeen">
              <input type="button" value="-" onClick={"yo"} />
              <input
                onChange={handleChange}
                id="quantity"
                value={bookData.quantity}
                type="text"
                className="form-control"
                aria-label="Amount"
                placeholder="Enter quantity"
              />
              <input type="button" value="+" onClick="add()" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellBook;
