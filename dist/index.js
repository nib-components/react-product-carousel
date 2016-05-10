'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductCarousel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _nukaCarousel = require('nuka-carousel');

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _carouselArrows = require('./lib/carouselArrows');

var _carouselArrows2 = _interopRequireDefault(_carouselArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductCarousel(props) {

  return _react2.default.createElement(
    'div',
    { className: 'product-carousel' },
    _react2.default.createElement(
      'div',
      { className: 'product-carousel__prompt' },
      _react2.default.createElement(
        'div',
        { className: 'carousel-prompt' },
        _react2.default.createElement('i', { className: 'carousel-prompt__icon carousel-prompt__icon--left' }),
        _react2.default.createElement('i', { className: 'carousel-prompt__icon carousel-prompt__icon--right' }),
        ' ',
        'Swipe to view our products'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'product-carousel__body' },
      _react2.default.createElement(
        _nukaCarousel2.default,
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          slideWidth: '250px',
          slideIndex: 1,
          cellAlign: 'center',
          edgeEasing: 'easeOutSine',
          decorators: _carouselArrows2.default,
          className: true
        },
        props.children
      )
    )
  );
}
//# sourceMappingURL=index.js.map