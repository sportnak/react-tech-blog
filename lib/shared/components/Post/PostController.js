'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var React = require('react');
var Router = require('react-router');
var Ajax = require('../../AJAX');

var PostController = (function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      CKEDITOR.replace('contentEditor');
      this.props.editor = CKEDITOR;
    }
  }, {
    key: 'submitButton',
    value: function submitButton() {
      Ajax.Post('/database/post', JSON.stringify({
        title: this.refs.postTitle.state.value,
        type: this.refs.postType.state.value,
        content: this.props.editor.instances.contentEditor.getData()
      }), function (data) {
        if (data.status == 200) {
          window.href.location('/');
        }
      });
    }
  }, {
    key: 'titleChange',
    value: function titleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'typeChange',
    value: function typeChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { style: { margin: '10%', fontWeight: 400, fontSize: 36 } },
          'Write a post:'
        ),
        React.createElement(
          'div',
          { className: 'new-post' },
          React.createElement(
            'label',
            { 'for': 'Title' },
            'Title: '
          ),
          React.createElement('input', { onChange: this.titleChange, ref: 'postTitle', name: 'Title', placeholder: 'Title', type: 'text' }),
          React.createElement(
            'label',
            { 'for': 'Type' },
            'Type: '
          ),
          React.createElement('input', { onChange: this.typeChange, ref: 'postType', name: 'Type', placeholder: 'Adventure or Tech', type: 'text' }),
          React.createElement('br', null),
          React.createElement(
            'label',
            { 'for': 'Content' },
            'Content: '
          ),
          React.createElement('textarea', { id: 'contentEditor', name: 'Content', type: 'text' }),
          React.createElement('br', null),
          React.createElement(
            'button',
            { onClick: this.submitButton.bind(this) },
            'Submit'
          )
        )
      );
    }
  }]);

  return PostController;
})();

exports['default'] = PostController;
module.exports = exports['default'];