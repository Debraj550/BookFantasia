import React, { useEffect } from "react";
import { useState } from "react";
import { Badge, Row } from "react-bootstrap";
import axios from "../api/axios";

const Reviews = (props) => {
  const bookId = props.bookId;
  const url = "/api/get_review/";
  const [review, setReview] = useState([]);
  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = async () => {
    const response = await axios
      .get(url, { params: { book_id: bookId } })
      .then((res) => {
        setReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-2 px-4 bg-light">
      {review.map((data, idx) => (
        <div className="d-flex gap-5 border-top border-bottom border-2">
          <div className="py-2 px-2 border-end col-lg-3 d-flex flex-column align-items-start justify-content-center">
            <Badge className="bg-success fw-bold mb-1">
              {data.book_rating}
              <i className="fa fa-star ms-1"></i>
            </Badge>
            <h6 className="fw-bold">{data.user_name}</h6>
          </div>
          <div className="py-2 px-2 col-lg-9 d-flex flex-column align-items-start justify-content-center">
            <h6 className="">{data.review_description}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
