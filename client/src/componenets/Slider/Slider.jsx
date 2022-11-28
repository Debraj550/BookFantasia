import React from "react";
import { Carousel, Row } from "react-bootstrap";
import img1 from "./books.png";
import img2 from "./book3.jpg";
import img3 from "./book2.jpg";
import img8 from "./book4.jpg";
import img4 from "./businessimg.png";
import img5 from "./novelimg.jpg";
import img6 from "./medicalimg.jpg";
import img7 from "./competitionbooks.jpg";
import { Card, Button, Col } from "react-bootstrap";
import axios from "./../../api/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  const url = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const [BookData, setBookData] = useState();
  const [errors, setErrors] = useState();

  const [NewBookData, setNewBookData] = useState();
  const [error, setError] = useState();

  const [TrendBookData, setTrendBookData] = useState();
  const [allerror, allsetError] = useState();

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    const response = await axios
      .get(url)
      .then((res) => {
        const result = res.data.filter((currEle) => {
          return currEle.no_of_hit >= 0;
        });
        setBookData(result);
        const result2 = res.data.filter((currEle) => {
          return currEle.date_time >= "2022-11-17T12:52:51.214";
        });
        setNewBookData(result2);
        const result3 = res.data.filter((currEle) => {
          return currEle.book_rating >= 1;
        });
        setTrendBookData(result3);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Carousel className="mt-3 mb-3 px-2">
          <Carousel.Item className="slide-item">
            <img className="d-flex w-100" src={img8} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-item">
            <img className="d-flex w-100" src={img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-item">
            <img className="d-flex w-100" src={img3} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="slide-item">
            <img className="d-flex w-100" src={img1} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="newbooks px-3">
        <div className="rounded-pill text-white fw-bolder px-4 mt-3 mb-3 category-heading">
          <h3>Best Sellers</h3>
        </div>
        <Row className="newbooks-page">
          {BookData &&
            BookData.map((book) => {
              return (
                <Col
                  className="home-card-col py-2 h-50"
                  key={book.book_id}
                  xs={12}
                  md={4}
                  lg={12}
                >
                  <Card className="neon-effect card-container">
                    <Link to={`/ProductPage/${book.book_id}`}>
                      <Card.Img
                        className="home-card-image"
                        src={`${imageDefaultPath}/${book.book_img}`}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="home-card-title">
                        {book.book_name}
                      </Card.Title>
                      <Card.Text>₹{book.price}</Card.Text>
                      <Button className="col-md-12 d-flex center">
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      <div className="newbooks px-3">
        <div className="category-heading rounded-pill  text-light fw-bolder px-4 mt-3 mb-3">
          <h3>New Arrivals</h3>
        </div>
        <Row className="newbooks-page">
          {NewBookData &&
            NewBookData.map((book) => {
              return (
                <Col
                  className="home-card-col py-2"
                  key={book.book_id}
                  xs={12}
                  md={4}
                  lg={2}
                >
                  <Card className="neon-effect card-container">
                    <Link to={`/ProductPage/${book.book_id}`}>
                      <Card.Img
                        className="home-card-image"
                        src={`${imageDefaultPath}/${book.book_img}`}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="home-card-title">
                        {book.book_name}
                      </Card.Title>
                      <Card.Text>₹{book.price}</Card.Text>
                      <Button className="col-md-12 d-flex center">
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      <div>
        <div className="category-heading rounded-pill  text-light fw-bolder px-4 mt-3 mb-3">
          <h3>Top Business & Stories </h3>
        </div>

        <div className="images d-flex">
          <div className="px-2">
            <Link to={`/Home/business`}>
              <img
                className="neon-effect card-container border border-3"
                src={img4}
                style={{ width: "100%", height: "90%" }}
              />
            </Link>
          </div>
          <div className="px-2">
            <Link to={`/Home/stories`}>
              <img
                className="neon-effect card-container border  border-3"
                src={img5}
                style={{ width: "100%", height: "90%" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="newbooks px-3">
        <div className="rounded-pill text-white fw-bolder px-4 mt-3 mb-3 category-heading">
          <h3>Trending Books</h3>
        </div>
        <Row className="newbooks-page">
          {TrendBookData &&
            TrendBookData.map((book) => {
              return (
                <Col
                  className="home-card-col py-2"
                  key={book.book_id}
                  xs={12}
                  md={4}
                  lg={12}
                >
                  <Card className="neon-effect card-container">
                    <Link to={`/ProductPage/${book.book_id}`}>
                      <Card.Img
                        className="home-card-image"
                        src={`${imageDefaultPath}/${book.book_img}`}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="home-card-title">
                        {book.book_name}
                      </Card.Title>
                      <Card.Text>₹{book.price}</Card.Text>
                      <Button className="col-md-12 d-flex center">
                        Add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      <div className="rounded-pill text-white fw-bolder px-4 mt-3 mb-3 category-heading">
        <h3>Top Entrace Exam Books</h3>
      </div>
      <div className="d-flex gap-3">
        <div>
          <Link to={`/Home/medical`}>
            <img
              className="neon-effect card-container border border-3"
              src={img6}
              style={{ width: "100%", height: "90%" }}
            />
          </Link>
        </div>
        <div>
          <Link to={`/Home/exams`}>
            <img
              className="neon-effect card-container border border-3"
              src={img7}
              style={{ width: "100%", height: "90%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
