'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var styles = require('../../../../views/styles/PostStyle/PostStyles');

var _default = (function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'openPost',
    value: function openPost(id) {
      window.location.href = '/post/' + id;
    }
  }, {
    key: 'renderPreviews',
    value: function renderPreviews() {
      var imgSearch = this.props.post.content;
      var content = this.props.post.content;
      content = content.substring(content.indexOf('<p>'), content.indexOf('</p>'));
      var img = '';

      if (content.length > 200) {
        content = content.substring(0, 197) + '...</p>';
      }

      if (imgSearch.indexOf('img') != -1) {
        var start = imgSearch.indexOf('<img');
        img = imgSearch.substring(start, imgSearch.indexOf('>', start) + 1);
      }

      content = img + content;

      return React.createElement(
        'div',
        { onClick: this.openPost.bind(this, this.props.post.id), className: 'post-preview__container', id: this.props.post.id },
        React.createElement(
          'h2',
          { className: 'post-preview__container__title', style: styles.PostTitle },
          React.createElement(
            'u',
            null,
            this.props.post.title
          )
        ),
        React.createElement('div', { className: 'post-preview__container__content', dangerouslySetInnerHTML: { __html: content } }),
        React.createElement('br', null)
      );
    }
  }, {
    key: 'renderPost',
    value: function renderPost() {
      return React.createElement(
        'div',
        { className: 'post__container', id: this.props.post.id },
        React.createElement(
          'h2',
          { style: styles.PostTitle, className: 'post__container__title' },
          React.createElement(
            'u',
            null,
            this.props.post.title
          )
        ),
        React.createElement('div', { className: 'post__container__content', dangerouslySetInnerHTML: { __html: this.props.post.content } }),
        React.createElement(
          'div',
          { className: 'post__container__details' },
          React.createElement(
            'span',
            null,
            this.props.post.author
          ),
          React.createElement('br', null),
          React.createElement(
            'span',
            null,
            this.props.post.date_created
          )
        ),
        React.createElement('br', null),
        React.createElement('hr', null)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.category === 'post/:id' ? this.renderPost() : this.renderPreviews()
      );
    }
  }]);

  return _default;
})(React.Component);

exports['default'] = _default;
module.exports = exports['default'];