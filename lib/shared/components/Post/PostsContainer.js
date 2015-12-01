'use strict';

var React = require('react');
var PostStore = require('../../stores/PostStore');
var PostActions = require('../../actions/PostActions');
var PostItem = require('./PostItem');
var styles = require('../../../../views/styles/PostStyle/PostContainerStyles');
var util = require('../../util');

function checkBottom(page) {
  var body = document.body,
      html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  if (window.scrollY + window.innerHeight == height) {
    var category = this.props.route.path.toLowerCase();
    category = category[0].toUpperCase() + category.substring(1);
    PostActions.nextCategoryPage(category, page);
  }
}

var PostContainer = React.createClass({
  displayName: 'PostContainer',

  getInitialState: function getInitialState() {
    return PostStore.getState();
  },
  componentDidMount: function componentDidMount() {
    var category = this.props.route.path.toLowerCase();
    category = category[0].toUpperCase() + category.substring(1);
    PostActions.loadPosts(category);
    PostStore.listen(this.onChange);
  },
  componentWillUnmount: function componentWillUnmount() {
    PostStore.unlisten(this.onChange);
  },
  onChange: function onChange(state) {
    this.setState(state);
    if (this.state.page !== -2) {
      window.onscroll = checkBottom.bind(this, state.page);
    } else {
      window.onscroll = null;
    }
  },
  renderPosts: function renderPosts() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'post-box' },
      React.createElement(
        'ul',
        { style: styles.UlStyle },
        this.state.posts.map(function (post) {
          return React.createElement(
            'li',
            null,
            React.createElement(PostItem, { post: post, category: _this.state.category })
          );
        })
      )
    );
  },
  render: function render() {
    if (this.props.route.path.toLowerCase() === 'adventure' || this.props.route.path.toLowerCase() === 'tech') {
      return this.renderPosts();
    } else {
      return React.createElement(
        'div',
        null,
        'You must be lost! \n Try a different category.'
      );
    }
  }
});

module.exports = PostContainer;