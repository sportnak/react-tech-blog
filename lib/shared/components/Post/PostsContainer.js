'use strict';

var React = require('react');
var PostStore = require('../../stores/PostStore');
var PostActions = require('../../actions/PostActions');
var PostItem = require('./PostItem');
var styles = require('../../../../views/styles/PostStyle/PostContainerStyles');
var util = require('../../util');

//yikes
var pageGlobal = 1;
var hashGlobal = '';

function checkBottom() {
	var body = document.body,
	    html = document.documentElement;
	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	if (window.scrollY + window.innerHeight == height) {
		var hashtag = window.location.href.substring(window.location.origin.length + 2);
		if (hashtag) {
			if (hashtag === hashGlobal) {
				var last = util.ConvertToArray(document.querySelector('.post-box').children[0].children).slice(-1)[0];
				PostActions.nextCategoryPage(hashtag, last.children[0].id);
			} else {
				PostActions.nextCategoryPage(hashtag);
			}
		} else {
			PostActions.nextPage(pageGlobal);
		}
	}
}

var PostContainer = React.createClass({
	displayName: 'PostContainer',

	getInitialState: function getInitialState() {
		return PostStore.getState();
	},

	componentDidMount: function componentDidMount() {
		PostActions.loadPosts();
		PostStore.listen(this.onChange);
		window.addEventListener("hashchange", function () {
			hashGlobal = window.location.href.substring(window.location.origin.length + 2);
			PostActions.nextCategoryPage(window.location.href.substring(window.location.origin.length + 2));
		});
	},

	componentWillUnmount: function componentWillUnmount() {
		PostStore.unlisten(this.onChange);
	},

	onChange: function onChange(state) {
		this.setState(state);
		pageGlobal = this.state.page;
		window.onscroll = checkBottom;
	},

	renderPost: function renderPost() {
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
						React.createElement(PostItem, { post: post })
					);
				})
			)
		);
	},

	renderAdventure: function renderAdventure() {
		var _this = this;

		return React.createElement(
			'div',
			{ className: 'post-box' },
			React.createElement(
				'ul',
				{ style: styles.UlStyle },
				this.state.adventurePosts.map(function (post) {
					return React.createElement(
						'li',
						null,
						React.createElement(PostItem, { post: post, category: _this.state.category })
					);
				})
			)
		);
	},

	renderTech: function renderTech() {
		var _this2 = this;

		return React.createElement(
			'div',
			{ className: 'post-box' },
			React.createElement(
				'ul',
				{ style: styles.UlStyle },
				this.state.techPosts.map(function (post) {
					return React.createElement(
						'li',
						null,
						React.createElement(PostItem, { post: post, category: _this2.state.category })
					);
				})
			)
		);
	},

	render: function render() {
		if (this.state.posts && this.state.category === '') {
			return this.renderPost();
		} else if (this.state.adventurePosts && this.state.category === 'Adventure') {
			return this.renderAdventure();
		} else if (this.state.techPosts && this.state.category === 'Tech') {
			return this.renderTech();
		} else {
			return React.createElement(
				'div',
				null,
				'No Posts Today'
			);
		}
	}
});

module.exports = PostContainer;