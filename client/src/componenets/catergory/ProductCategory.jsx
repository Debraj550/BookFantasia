import React from "react";
import "../../styles/productCategory.css";
import Badge from "react-bootstrap/Badge";
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../api/axios";
import { useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

const ProductCategory = () => {
  const url = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const { category } = useParams();
  //const category = parseInt(param);
  const [productData, setProductData] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    getProductData();
  }, [category]);

  const getProductData = async () => {
    await axios
      .get(url, { params: { category: category } })
      .then((res) => {
        setProductData(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  return (
    <div className="product-page">
      <Container>
        <h3 className="m-3">
          <Badge bg="primary">{category && category.toUpperCase()}</Badge>
        </h3>
        <Row className="bg-light">
          {productData &&
            productData.map((product, k) => (
              <Col
                className="card-col py-2"
                key={product.book_id}
                xs={12}
                md={4}
                lg={2}
              >
                <Card className="neon-effect card-container">
                  <Link to={`/ProductPage/${product.book_id}`}>
                    <Card.Img
                      className="card-image"
                      src={`${imageDefaultPath}/${product.book_img}`}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title className="card-title">
                      {product.book_name}
                    </Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
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
  );
};

export default ProductCategory;
