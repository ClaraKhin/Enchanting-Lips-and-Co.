import React from "react";
import "./Products_showcase.css";
import { Container, Row, Col, Button, Card, Stack } from "react-bootstrap";
import image1 from "../../assets/Offer Card.jpg";
import image2 from "../../assets/Tint.jpg";
import image3 from "../../assets/Matte.jpg";
import image4 from "../../assets/Glow.jpg";

const ProductsShowcase = () => {
  return (
    <section id="products_showcase">
      <Container className="showcase-container">
        <Row className="showcase-row">
          <Col className="showcase-col">
            <Card className="offer-card">
              <Card.Img
                src={image1}
                alt="offer-card"
                className="offercard-image"
              />
              <Card.ImgOverlay>
                <Card.Text className="offercard-text">
                  <Button className="btn">
                    <a href="/products">View</a>
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row className="card-row">
          <Col className="card1-col">
            <Card className="card1">
              <Card.Img src={image2} alt="tint" className="card1-image" />
              <Card.ImgOverlay className="card1-imgOverlay">
                <Card.Text className="card1-text">
                  Make yourself shine, Effortless beautiful!
                  <span>
                    <a href="/">
                      <i
                        class="fa-regular fa-circle-right"
                        style={{ color: "#a0c2fd" }}
                      ></i>
                    </a>
                  </span>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Stack gap={2} className="stack">
          <Card className="card2">
            <Card.Img src={image3} alt="Matte" className="card2-image" />
            <Card.ImgOverlay className="card2-imgOverlay">
              <Card.Text className="card2-text">
                Matte Lipsticks are Long lasting more than your boyfriend!
                <span>
                  <a href="/">
                    <i
                      class="fa-regular fa-circle-right"
                      style={{ color: "#a0c2fd" }}
                    ></i>
                  </a>
                </span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="card3">
            <Card.Img src={image4} alt="Glow" className="card3-image" />
            <Card.ImgOverlay className="card3-imgOverlay">
              <Card.Text className="card3-text">
                Let your Lips appear radiant!
                <span>
                  <a href="/">
                    <i
                      class="fa-regular fa-circle-right"
                      style={{ color: "#a0c2fd" }}
                    ></i>
                  </a>
                </span>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Stack>
      </Container>
    </section>
  );
};
export default ProductsShowcase;
