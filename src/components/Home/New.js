import React from "react";
import "./New.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import NewItem from "./NewItem_data";

const NewRealease = () => {
  return (
    <Container className="newItem-container">
      <h2 className="text-center m-3">New Release</h2>
      <Row className="newItem-row">
        {NewItem.map((value, id) => {
          return (
            <Col key={id} sm={6} md={3} className="newItem-col">
              <div className="image-container">
                <img src={value.image} alt={value.desc} className="img-fluid" />
                <div className="image-overlay">
                  <p className="image-text">{value.desc}</p>
                  <p className="image-price">{value.price}MMK</p>
                </div>
              </div>
            </Col>
          );
        })}
        <Button className="btn">
          <a href="/">View More</a>
        </Button>
      </Row>
    </Container>
  );
};

export default NewRealease;
