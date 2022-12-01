import React from "react";
import { useParams } from "react-router-dom";
import { Alert, Badge, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const RatingAndReview = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewData, setReviewData] = useState({
    user_id: userId,
    book_id: bookId,
    book_rating: 5,
    review_description: "",
  });
  const handleChange = (event) => {
    const temp = { ...reviewData };
    temp[event.target.id] = event.target.value;
    setReviewData(temp);
    console.log(temp);
  };
  const submitReview = () => {
    let temp = new FormData();
    temp.append("user_id", userId);
    temp.append("book_id", bookId);
    temp.append("book_rating", reviewData.book_rating);
    temp.append("review_description", reviewData.review_description);
    axios
      .post("/api/upload_review/", temp)
      .then((res) => {
        setIsSubmitted(true);
        console.log("Review successfully submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="vh-100">
      <section className="py-5">
        <div className="container text-center text-white fw-bolder px-4 bg-primary">
          <h4>Rating and Review</h4>
        </div>
        <div className="cart-container container px-4 px-lg-5 mb-5">
          {isSubmitted ? (
            <Alert variant="success">
              Thanks for your review. You can{" "}
              <Link className="fw-bold text-decoration-none" to="/orders">
                click here
              </Link>{" "}
              to go back.
            </Alert>
          ) : (
            <form onSubmit={submitReview}>
              <div className="form-group row mb-2">
                <label
                  htmlFor="book_rating"
                  className="col-sm-2 col-form-label fs-5 fw-bold"
                >
                  Rating:
                </label>
                <input
                  type="range"
                  class="ms-2 col-sm-2"
                  min="1"
                  max="5"
                  step="1"
                  id="book_rating"
                  onChange={handleChange}
                ></input>
                <label className="col-form-label col-sm-1 fw-bold text-dark">
                  {reviewData.book_rating}
                </label>
              </div>
              <div className="form-group row mb-2">
                <label
                  htmlFor="book_name"
                  className="col-sm-2 col-form-label fs-5 fw-bold"
                >
                  Review:
                </label>
                <div className="col-sm-10">
                  <textarea
                    onChange={handleChange}
                    id="review_description"
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Enter review"
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </div>
              <div className=" d-flex justify-content-end py-2 gap-2">
                <Button
                  className="btn btn-secondary"
                  onClick={() => {
                    navigate("/orders");
                  }}
                >
                  Go Back
                </Button>
                <Button onClick={submitReview} className="btn btn-primary">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default RatingAndReview;
