import React from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";
import logo from "../NavBar/e-commerce.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar" sticky="top">
          <Container fluid className="navbar_container">
            <Navbar.Brand href="#home">
              <img src={logo} alt="shop_logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Enchanting Lips & Co.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 offCanvas">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#products">Our Products</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
