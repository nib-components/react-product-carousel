import React from 'react';
import Carousel from 'nuka-carousel';
import classNames from 'classnames';
import carouselArrows from './lib/carouselArrows';

export default function ProductCarousel(props) {

  const {prompt, slideIndex, onAfterSlide, onBeforeSlide, hideControls, ghostProducts, className} = props;

  const carouselClasses = classNames(className, 'product-carousel', {
    'product-carousel--hide-controls-desktop': hideControls,
    'product-carousel--ghost-products': ghostProducts
  });

  return (

    <div className={carouselClasses}>

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
          slideIndex={slideIndex}
          cellAlign="center"
          edgeEasing="easeOutSine"
          afterSlide={onAfterSlide}
          beforeSlide={onBeforeSlide}
          decorators={carouselArrows}
          className={className}
          {...props}
        />

      </div>
    </div>
  );
}

ProductCarousel.propTypes = {
  prompt: React.PropTypes.string,
  slideIndex: React.PropTypes.number,
  onAfterSlide: React.PropTypes.func,
  onBeforeSlide: React.PropTypes.func,
  hideControls: React.PropTypes.bool,
  ghostProducts: React.PropTypes.bool
};

ProductCarousel.defaultProps = {
  prompt: 'Swipe to view our products',
  slideIndex: 1,
  onAfterSlide: () => {} ,
  onBeforeSlide: () => {},
  hideControls: true,
  ghostProducts: false
};
