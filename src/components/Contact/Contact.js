import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import PaymentLogo from "../../assets/Payment.png";
import QRCodeLogo from "../../assets/QRcode.png";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="contact-container">
        <Row className="m-5 contact-row">
          <Col xs={6} md={4} className="cs-col">
            <h4>Customer Service</h4>

            <p>
              <span>
                <i class="fa-solid fa-building-shield"></i>
              </span>
              <a
                href="https://termly.io/legal-dictionary/return-policy/#:~:text=A%20return%20policy%20is%20a,and%20customer%20support%20contact%20information."
                rel="noreferrer"
                target="_blank"
              >
                Terms & Privacy Policy
              </a>
            </p>
            <p>
              <span>
                <i class="fa-solid fa-rotate-left"></i>
              </span>
              <a
                href="https://termly.io/legal-dictionary/return-policy/#:~:text=A%20return%20policy%20is%20a,and%20customer%20support%20contact%20information."
                rel="noreferrer"
                target="_blank"
              >
                Return Policy
              </a>
            </p>

            <h6>Payment</h6>
            <img
              src={PaymentLogo}
              alt="payment-logo"
              className="payment-logo"
            />
          </Col>
          <Col xs={6} md={4} className="ct-col">
            <h4 className=" mb-3">Contact Us</h4>
            <p className="address">
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              6 Gregory Lane Los Angeles, CA 90026
            </p>
            <p>
              <span>
                <i class="fa-solid fa-phone-volume"></i>
              </span>
              202-555-0122
            </p>

            <h6>Follow Us On</h6>

            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
              className="social-media"
            >
              <i
                class="fa-brands fa-facebook fa-lg"
                style={{ color: "#4267B2" }}
              ></i>
            </a>

            <a
              href="http://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
              className="social-media"
            >
              <i
                class="fa-brands fa-instagram fa-lg"
                style={{ color: "#C13584" }}
              ></i>
            </a>

            <a
              href="https://www.twitter.com/"
              rel="noreferrer"
              target="_blank"
              className="social-media"
            >
              <i
                class="fa-brands fa-twitter fa-lg"
                style={{ color: "#1DA1F2" }}
              ></i>
            </a>
          </Col>
          <Col xs={6} md={4} className="QRcode-col">
            <h4>Download Our App</h4>
            <img src={QRCodeLogo} alt="QRcode-logo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
