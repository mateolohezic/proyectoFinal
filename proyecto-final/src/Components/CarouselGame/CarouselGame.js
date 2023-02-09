import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselGame( imagenes ) {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100 imgCarouselGame" src={imagenes.image1} alt="imagen-1"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame" src={imagenes.image2} alt="imagen-2"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame" src={imagenes.image3} alt="imagen-3"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarouselGame" src={imagenes.image4} alt="imagen-4"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGame;