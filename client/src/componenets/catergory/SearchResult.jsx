import React from "react";
import "../../styles/productCategory.css";
import Badge from "react-bootstrap/Badge";
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../api/axios";
import { useState } from "react";
import { Card, Row, Col, Container, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

const SearchResult = () => {
  const url = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const { search } = useParams();
  //const category = parseInt(param);
  const [productData, setProductData] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProductData();
  }, [search]);

  const getProductData = async () => {
    await axios
      .get(url, { params: { search: search } })
      .then((res) => {
        setProductData(res.data);
        //console.log(res.data[0]);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  return (
    <>
      {productData ? (
        <div className="product-page">
          <Container>
            <h3 className="m-3">
              <Badge bg="primary">{`Search results for "${search}"`}</Badge>
            </h3>
            <Row className="bg-light">
              {console.log(productData)}
              {productData &&
                productData.map((product, k) => (
                  <Col
                    className="card-col py-2"
                    key={product.book_id}
                    xs={12}
                    md={4}
                    lg={2}
                  >
                    <Card className="neon-effect card-container ">
                      <Link to={`/ProductPage/${product.book_id}`}>
                        <Card.Img
                          className="card-image"
                          src={`${imageDefaultPath}/${product.book_img}`}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title className="home-card-title px-2 text-wrap">
                          {product.book_name}
                        </Card.Title>
                        <hr></hr>
                        <Card.Text className="fw-bold">
                          {product.quantity ? "In Stock" : "Not in stock"}
                          <br />₹{product.price}
                        </Card.Text>
                        <Button className="col-md-12 d-flex center">
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      ) : (
        <Alert variant="danger">No search results found.</Alert>
      )}
    </>
  );
};

export default SearchResult;
