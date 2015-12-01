'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var util = require('../util');

var HomeController = (function (_React$Component) {
  _inherits(HomeController, _React$Component);

  function HomeController() {
    _classCallCheck(this, HomeController);

    _get(Object.getPrototypeOf(HomeController.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HomeController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props.children);
      util.ConvertToArray(document.querySelector('.cover').children).forEach(function (child) {
        if (child.classList.contains('nav-button')) {
          child.style.display = 'inline-block';
        } else {
          child.style.display = 'initial';
        }
      });
    }
  }, {
    key: 'renderCover',
    value: function renderCover() {
      return React.createElement(
        'div',
        { className: 'cover' },
        React.createElement('img', { className: 'cover-image' }),
        React.createElement(
          'div',
          { className: 'tagline-wrapper' },
          React.createElement(
            'div',
            { className: 'tagline' },
            'The world is a book,\n \t and those who don\'t travel only read the first page.'
          )
        ),
        React.createElement(
          'div',
          { className: 'nav-button-container' },
          React.createElement(
            'li',
            { id: 'showPosts', className: 'nav-button' },
            React.createElement('a', { href: '/Tech' })
          ),
          React.createElement(
            'li',
            { id: 'showResume', className: 'nav-button' },
            React.createElement('a', { href: '#' })
          ),
          React.createElement(
            'li',
            { id: 'showGallery', className: 'nav-button' },
            React.createElement('a', { href: '#' })
          ),
          React.createElement(
            'li',
            { id: 'showAdventure', className: 'nav-button' },
            React.createElement('a', { href: '/Adventure' })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('link', { href: '/home.css', rel: 'stylesheet', type: 'text/css' }),
        this.props.path === '/' ? this.renderCover() : this.renderCover()
      );
    }
  }]);

  return HomeController;
})(React.Component);

exports['default'] = HomeController;
module.exports = exports['default'];