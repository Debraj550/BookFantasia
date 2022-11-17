import React from "react";
import { Link } from "react-router-dom";
import "../styles/sellbook.css";
import { useState, useEffect } from "react";

const SellBook = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [bookData, setBookData] = useState({
    bookName: "",
    authorName: "",
    category: "",
    language: "english",
    description: "",
    quantity: 1,
    price: null,
  });

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
    console.log(image);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const imageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
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
              <select
                id="category"
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="" selected>
                  Select
                </option>
                <option value="engineering">Engineering</option>
                <option value="stories">Stories and Novels</option>
                <option value="medical">Medical</option>
                <option value="others">Others</option>
              </select>
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
                className="col-sm-2 col-form-label"
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
              className="col-sm-2 col-form-label"
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
        </form>
      </div>
    </div>
  );
};

export default SellBook;
