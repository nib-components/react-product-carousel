import React from 'react';
import Carousel from 'nuka-carousel';
import carouselArrows from './lib/carouselArrows'

export default function ProductCarousel(props) {

  return (

    <div className="product-carousel">

      <div className="product-carousel__prompt">
        <div className="carousel-prompt">
          <i className="carousel-prompt__icon carousel-prompt__icon--left"/>
          <i className="carousel-prompt__icon carousel-prompt__icon--right"/>
          {' '}
          Swipe to view our products
        </div>
      </div>

      <div className="product-carousel__body">

        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          slideWidth="250px"
          slideIndex={1}
          cellAlign="center"
          edgeEasing="easeOutSine"
          decorators={carouselArrows}
          className
          {...props}
        />

      </div>
    </div>
  );
}