import React from "react";
import "../styles/sellbook.css";

const SellBook = () => {
  return (
    <div className="sellbook-container">
      <div className="form-container">
        <div className="container">
          <form>
            <div className="form-group row">
              <h4>Enter Book Details</h4>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="book_name" className="col-sm-2 col-form-label">
                Book Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="book_name"
                  placeholder="Enter the book name"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label htmlFor="book_name" className="col-sm-2 col-form-label">
                Author ame
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="book_name"
                  placeholder="Enter the author name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellBook;
