import React from 'react';
import {Sticky} from 'react-sticky';

export default [{
  component: class LeftArrow extends React.Component {

    render() {
      return (
        <Sticky stickyClassName="stuck-arrows">

          <div
            style={this.styleArrow(this.props.currentSlide === 0)}
            className="carousel__arrow carousel__arrow--prev"
            onClick={this.props.previousSlide}>
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.9 101.2">
              <title>Previous Product</title>
              <path
                className="semicircle"
                d="M44.2 25.2c-4.4-7.7-10.9-14-18.6-18.4C17.9 2.2 9-0.2 0 0v101.2c9 0.2 17.9-2.2 25.6-6.8 7.7-4.4 14-10.8 18.5-18.4 4.5-7.7 6.9-16.5 6.8-25.4C51.1 41.7 48.8 32.9 44.2 25.2z"
              />
              <path
                className="arrow"
                d="M38.1 54.8c0 0.3-0.2 0.5-0.5 0.5H25v6.6c0 0.3-0.2 0.6-0.4 0.8 -0.2 0.2-0.5 0.3-0.8 0.3s-0.7-0.1-0.9-0.4L11.5 51.4c-0.4-0.5-0.4-1.1 0-1.6l11.3-11.3c0.2-0.2 0.5-0.3 0.8-0.3s0.6 0.1 0.9 0.3c0.2 0.2 0.4 0.5 0.4 0.8v7.1h12.7c0.3 0 0.5 0.2 0.5 0.5V54.8z"
              />
            </svg>
          </div>

        </Sticky>
      );
    }
    shouldComponentUpdate() { return this.props.currentSlide === 0; }
    styleArrow(disabled) { return { display: disabled ? 'none' : 'block' }; }
  }
}, {
  component: class RightArrow extends React.Component {
    render() {
      return (
        <Sticky stickyClassName="stuck-arrows">
          <div
            style={this.styleArrow(this.props.currentSlide === this.props.slideCount - 1)}
            className="carousel__arrow carousel__arrow--next"
            onClick={this.props.nextSlide}>
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.9 101.2">
              <title>Next Product</title>
              <path
                className="semicircle"
                d="M44.2 25.2c-4.4-7.7-10.9-14-18.6-18.4C17.9 2.2 9-0.2 0 0v101.2c9 0.2 17.9-2.2 25.6-6.8 7.7-4.4 14-10.8 18.5-18.4 4.5-7.7 6.9-16.5 6.8-25.4C51.1 41.7 48.8 32.9 44.2 25.2z"
              />
              <path
                className="arrow"
                d="M38.1 54.8c0 0.3-0.2 0.5-0.5 0.5H25v6.6c0 0.3-0.2 0.6-0.4 0.8 -0.2 0.2-0.5 0.3-0.8 0.3s-0.7-0.1-0.9-0.4L11.5 51.4c-0.4-0.5-0.4-1.1 0-1.6l11.3-11.3c0.2-0.2 0.5-0.3 0.8-0.3s0.6 0.1 0.9 0.3c0.2 0.2 0.4 0.5 0.4 0.8v7.1h12.7c0.3 0 0.5 0.2 0.5 0.5V54.8z"
              />
            </svg>
          </div>

        </Sticky>
      );
    }
    shouldComponentUpdate() { return this.props.currentSlide === this.props.slideCount - 1; }
    styleArrow(disabled) { return { display: disabled ? 'none' : 'block' }; }
  }
}];