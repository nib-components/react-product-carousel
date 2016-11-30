'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ProductCarousel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _carouselArrows = require('./lib/carouselArrows');

var _carouselArrows2 = _interopRequireDefault(_carouselArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductCarousel(props) {
  var prompt = props.prompt,
      onAfterSlide = props.onAfterSlide,
      onBeforeSlide = props.onBeforeSlide,
      hideControls = props.hideControls,
      ghostProducts = props.ghostProducts,
      className = props.className;


  var carouselClasses = (0, _classnames2.default)(className, 'product-carousel', {
    'product-carousel--hide-controls-desktop': hideControls,
    'product-carousel--ghost-products': ghostProducts
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
      _react2.default.createElement(_nukaCarousel2.default, _extends({
        slidesToShow: 1,
        slidesToScroll: 1,
        slideWidth: '250px',
        slideIndex: 1,
        cellAlign: 'center',
        edgeEasing: 'easeOutSine',
        afterSlide: onAfterSlide,
        beforeSlide: onBeforeSlide,
        decorators: _carouselArrows2.default,
        className: className
      }, props))
    )
  );
}

ProductCarousel.propTypes = {
  prompt: _react2.default.PropTypes.string,
  onAfterSlide: _react2.default.PropTypes.func,
  onBeforeSlide: _react2.default.PropTypes.func,
  hideControls: _react2.default.PropTypes.bool,
  ghostProducts: _react2.default.PropTypes.bool
};

ProductCarousel.defaultProps = {
  prompt: 'Swipe to view our products',
  onAfterSlide: function onAfterSlide() {},
  onBeforeSlide: function onBeforeSlide() {},
  hideControls: true,
  ghostProducts: false
};
//# sourceMappingURL=index.js.map