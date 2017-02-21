'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSticky = require('react-sticky');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = [{
  component: function (_React$Component) {
    _inherits(LeftArrow, _React$Component);

    function LeftArrow() {
      _classCallCheck(this, LeftArrow);

      return _possibleConstructorReturn(this, (LeftArrow.__proto__ || Object.getPrototypeOf(LeftArrow)).apply(this, arguments));
    }

    _createClass(LeftArrow, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactSticky.Sticky,
          { stickyClassName: 'stuck-arrows' },
          _react2.default.createElement(
            'div',
            {
              style: this.styleArrow(this.props.currentSlide === 0),
              className: 'carousel__arrow carousel__arrow--prev',
              onClick: this.props.previousSlide },
            '>',
            _react2.default.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50.9 101.2' },
              _react2.default.createElement(
                'title',
                null,
                'Previous Product'
              ),
              _react2.default.createElement('path', {
                className: 'semicircle',
                d: 'M44.2 25.2c-4.4-7.7-10.9-14-18.6-18.4C17.9 2.2 9-0.2 0 0v101.2c9 0.2 17.9-2.2 25.6-6.8 7.7-4.4 14-10.8 18.5-18.4 4.5-7.7 6.9-16.5 6.8-25.4C51.1 41.7 48.8 32.9 44.2 25.2z'
              }),
              _react2.default.createElement('path', {
                className: 'arrow',
                d: 'M38.1 54.8c0 0.3-0.2 0.5-0.5 0.5H25v6.6c0 0.3-0.2 0.6-0.4 0.8 -0.2 0.2-0.5 0.3-0.8 0.3s-0.7-0.1-0.9-0.4L11.5 51.4c-0.4-0.5-0.4-1.1 0-1.6l11.3-11.3c0.2-0.2 0.5-0.3 0.8-0.3s0.6 0.1 0.9 0.3c0.2 0.2 0.4 0.5 0.4 0.8v7.1h12.7c0.3 0 0.5 0.2 0.5 0.5V54.8z'
              })
            )
          )
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

      return _possibleConstructorReturn(this, (RightArrow.__proto__ || Object.getPrototypeOf(RightArrow)).apply(this, arguments));
    }

    _createClass(RightArrow, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactSticky.Sticky,
          { stickyClassName: 'stuck-arrows' },
          _react2.default.createElement(
            'div',
            {
              style: this.styleArrow(this.props.currentSlide === this.props.slideCount - 1),
              className: 'carousel__arrow carousel__arrow--next',
              onClick: this.props.nextSlide },
            '>',
            _react2.default.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50.9 101.2' },
              _react2.default.createElement(
                'title',
                null,
                'Next Product'
              ),
              _react2.default.createElement('path', {
                className: 'semicircle',
                d: 'M44.2 25.2c-4.4-7.7-10.9-14-18.6-18.4C17.9 2.2 9-0.2 0 0v101.2c9 0.2 17.9-2.2 25.6-6.8 7.7-4.4 14-10.8 18.5-18.4 4.5-7.7 6.9-16.5 6.8-25.4C51.1 41.7 48.8 32.9 44.2 25.2z'
              }),
              _react2.default.createElement('path', {
                className: 'arrow',
                d: 'M38.1 54.8c0 0.3-0.2 0.5-0.5 0.5H25v6.6c0 0.3-0.2 0.6-0.4 0.8 -0.2 0.2-0.5 0.3-0.8 0.3s-0.7-0.1-0.9-0.4L11.5 51.4c-0.4-0.5-0.4-1.1 0-1.6l11.3-11.3c0.2-0.2 0.5-0.3 0.8-0.3s0.6 0.1 0.9 0.3c0.2 0.2 0.4 0.5 0.4 0.8v7.1h12.7c0.3 0 0.5 0.2 0.5 0.5V54.8z'
              })
            )
          )
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