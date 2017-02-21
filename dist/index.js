'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.GhostProduct = GhostProduct;
exports.default = ProductCarousel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSticky = require('react-sticky');

var _carouselArrows = require('./lib/carouselArrows');

var _carouselArrows2 = _interopRequireDefault(_carouselArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GhostProduct(props) {
  var children = props.children;

  return _react2.default.createElement(
    'div',
    { className: 'ghost-product' },
    children
  );
}

function ProductCarousel(props) {
  var prompt = props.prompt,
      slideIndex = props.slideIndex,
      onAfterSlide = props.onAfterSlide,
      onBeforeSlide = props.onBeforeSlide,
      hideControls = props.hideControls,
      className = props.className,
      children = props.children;


  var carouselClasses = (0, _classnames2.default)(className, 'product-carousel', {
    'product-carousel--hide-controls-desktop': hideControls
  });

  return _react2.default.createElement(
    'div',
    { className: carouselClasses },
    _react2.default.createElement(
      'div',
      { className: 'product-carousel__prompt' },
      _react2.default.createElement(
        'div',
        { className: 'carousel-prompt' },
        _react2.default.createElement('i', { className: 'carousel-prompt__icon carousel-prompt__icon--left' }),
        _react2.default.createElement('i', { className: 'carousel-prompt__icon carousel-prompt__icon--right' }),
        ' ',
        prompt
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'product-carousel__body' },
      _react2.default.createElement(
        _reactSticky.StickyContainer,
        null,
        _react2.default.createElement(
          _nukaCarousel2.default,
          _extends({
            slidesToShow: 1,
            slidesToScroll: 1,
            slideWidth: '250px',
            slideIndex: slideIndex,
            cellAlign: 'center',
            edgeEasing: 'easeOutSine',
            afterSlide: onAfterSlide,
            beforeSlide: onBeforeSlide,
            decorators: _carouselArrows2.default,
            className: className
          }, props),
          children
        )
      )
    )
  );
}

ProductCarousel.propTypes = {
  prompt: _react2.default.PropTypes.string,
  slideIndex: _react2.default.PropTypes.number,
  onAfterSlide: _react2.default.PropTypes.func,
  onBeforeSlide: _react2.default.PropTypes.func,
  hideControls: _react2.default.PropTypes.bool
};

ProductCarousel.defaultProps = {
  prompt: 'Swipe to view our products',
  slideIndex: 1,
  onAfterSlide: function onAfterSlide() {},
  onBeforeSlide: function onBeforeSlide() {},
  hideControls: true
};
//# sourceMappingURL=index.js.map