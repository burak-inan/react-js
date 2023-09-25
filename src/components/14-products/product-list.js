import React from "react";
import Product from "./product";
import { Col, Container, Row } from "react-bootstrap";
import products from "./products.json";

const ProductList = () => {
  return (
    <div>
      <Container>
        <Row className="g-5 mt-5">
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4} xl={3}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
