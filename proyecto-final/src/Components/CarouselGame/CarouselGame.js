import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselGame.css';

function CarouselGame() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame"
          src="https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg"
          alt="imagen-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame"
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Gallet_clamshell_600x600_7.jpg"
          alt="imagen-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame"
          src="https://linagro.tn/images/entries/700x300/sunrise-700x300.png"
          alt="imagen-3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGame;