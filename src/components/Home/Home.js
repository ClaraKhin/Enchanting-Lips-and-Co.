import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Deal_data from "./Deal_data";
import NewRealease from "./New";
import ProductsShowcase from "../Products_Showcase/Products_showcase";
import Header from "../Header/Header";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <h2 className="text-center m-3">Best Deals</h2>
      <Container className="home_container">
        <Row className="row">
          {Deal_data.map((value, id) => {
            return (
              <Col key={id} sm={4} md={2} className="col">
                <img
                  src={value.image}
                  alt={value.title}
                  className="img-fluid"
                />
                <p>${value.price}</p>
              </Col>
            );
          })}
          <Button className="btn">
            <a href="/products">View More</a>
          </Button>
        </Row>
      </Container>
      <ProductsShowcase />
      <NewRealease />
    </section>
  );
};
export default Home;
