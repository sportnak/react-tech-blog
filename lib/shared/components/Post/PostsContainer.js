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
    if (this.props.route.path !== 'post/:id') {
      var category = this.props.route.path.toLowerCase();
      category = category[0].toUpperCase() + category.substring(1);
      PostActions.loadPosts(category);
    } else {
      PostActions.loadPost(this.props.params.id);
    }
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
      React.createElement('div', { className: 'sidebar' }),
      React.createElement(
        'ul',
        { style: styles.UlStyle },
        this.state.posts.map(function (post) {
          return React.createElement(
            'li',
            null,
            React.createElement(PostItem, { post: post, category: _this.props.route.path })
          );
        })
      )
    );
  },
  render: function render() {
    if (this.props.route.path.toLowerCase() === 'adventure' || this.props.route.path.toLowerCase() === 'tech' || this.props.route.path === 'post/:id') {
      return this.renderPosts();
    } else {
      return React.createElement(
        'div',
        { style: { position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, margin: 'auto' } },
        'You must be lost! \n Try a different category.'
      );
    }
  }
});

module.exports = PostContainer;