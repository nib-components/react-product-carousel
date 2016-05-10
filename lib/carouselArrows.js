import React from 'react';
import classNames from 'classnames';

export default [{
  component: class LeftArrow extends React.Component {

    render() {
      return (
        <div
          style={this.styleArrow(this.props.currentSlide === 0)}
          className="carousel__arrow carousel__arrow--prev"
          onClick={this.props.previousSlide}>
          Previous
        </div>
      );
    }
    shouldComponentUpdate() { return this.props.currentSlide === 0; }
    styleArrow(disabled) { return { display: disabled ? 'none' : 'block' }; }
  }
}, {
  component: class RightArrow extends React.Component {
    render() {
      return (
        <div
          style={this.styleArrow(this.props.currentSlide === this.props.slideCount - 1)}
          className="carousel__arrow carousel__arrow--next"
          onClick={this.props.nextSlide}>
          Next
        </div>
      );
    }
    shouldComponentUpdate() { return this.props.currentSlide === this.props.slideCount - 1; }
    styleArrow(disabled) { return { display: disabled ? 'none' : 'block' }; }
  }
}];