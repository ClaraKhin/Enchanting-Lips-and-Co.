import React from "react";
import Image_data from "./Image_data";
import { Carousel, Button } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <Carousel className="carousel">
        {Image_data.map((value, id) => {
          return (
            <Carousel.Item key={id} interval={1000}>
              <img src={value.image} alt={value.title} />
              <Carousel.Caption>
                <Button className="btn">Learn More</Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Header;
