import React from 'react';
import Carousel from 'nuka-carousel';
import carouselArrows from './lib/carouselArrows';

export default function ProductCarousel(props) {

  const {prompt, onAfterSlide, onBeforeSlide} = props;
  return (

    <div className="product-carousel">

      <div className="product-carousel__prompt">
        <div className="carousel-prompt">
          <i className="carousel-prompt__icon carousel-prompt__icon--left"/>
          <i className="carousel-prompt__icon carousel-prompt__icon--right"/>
          {' '}
          {prompt}
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
          afterSlide={onAfterSlide}
          beforeSlide={onBeforeSlide}
          decorators={carouselArrows}
          className
          {...props}
        />

      </div>
    </div>
  );
}

ProductCarousel.propTypes = {
  prompt: React.PropTypes.string,
  onAfterSlide: React.PropTypes.func,
  onBeforeSlide: React.PropTypes.func
};

ProductCarousel.defaultProps = {
  prompt: 'Swipe to view our products',
  onAfterSlide: () => {} ,
  onBeforeSlide: () => {}
};
