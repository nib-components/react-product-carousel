'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = [{
  component: function (_React$Component) {
    _inherits(LeftArrow, _React$Component);

    function LeftArrow() {
      _classCallCheck(this, LeftArrow);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftArrow).apply(this, arguments));
    }

    _createClass(LeftArrow, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            style: this.styleArrow(this.props.currentSlide === 0),
            className: 'carousel__arrow carousel__arrow--prev',
            onClick: this.props.previousSlide },
          'Previous'
        );
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return this.props.currentSlide === 0;
      }
    }, {
      key: 'styleArrow',
      value: function styleArrow(disabled) {
        return { display: disabled ? 'none' : 'block' };
      }
    }]);

    return LeftArrow;
  }(_react2.default.Component)
}, {
  component: function (_React$Component2) {
    _inherits(RightArrow, _React$Component2);

    function RightArrow() {
      _classCallCheck(this, RightArrow);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(RightArrow).apply(this, arguments));
    }

    _createClass(RightArrow, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            style: this.styleArrow(this.props.currentSlide === this.props.slideCount - 1),
            className: 'carousel__arrow carousel__arrow--next',
            onClick: this.props.nextSlide },
          'Next'
        );
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return this.props.currentSlide === this.props.slideCount - 1;
      }
    }, {
      key: 'styleArrow',
      value: function styleArrow(disabled) {
        return { display: disabled ? 'none' : 'block' };
      }
    }]);

    return RightArrow;
  }(_react2.default.Component)
}];
//# sourceMappingURL=carouselArrows.js.map