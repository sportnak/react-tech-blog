"use strict";

var React = require("react");
var PostStore = require("../../stores/PostStore");
var PostActions = require("../../actions/PostActions");
var PostItem = require("./PostItem");
var styles = require("../../../../views/styles/PostStyle/PostContainerStyles");

//yikes
var pageGlobal = 1;

function checkBottom() {
	var body = document.body,
	    html = document.documentElement;
	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	if (window.scrollY + window.innerHeight == height) {
		PostActions.nextPage(pageGlobal);
	}
}

var PostContainer = React.createClass({
	displayName: "PostContainer",

	getInitialState: function getInitialState() {
		return PostStore.getState();
	},

	componentDidMount: function componentDidMount() {
		PostActions.loadPosts();
		PostStore.listen(this.onChange);
	},

	componentWillUnmount: function componentWillUnmount() {
		PostStore.unlisten(this.onChange);
	},

	onChange: function onChange(state) {
		this.setState(state);
		pageGlobal = this.state.page;
		window.onscroll = checkBottom;
	},

	render: function render() {
		if (this.state.posts) {
			return React.createElement(
				"div",
				{ className: "post-box" },
				React.createElement(
					"ul",
					{ style: styles.UlStyle },
					this.state.posts.map(function (post) {
						return React.createElement(
							"li",
							null,
							React.createElement(PostItem, { post: post })
						);
					})
				)
			);
		} else {
			return React.createElement(
				"div",
				null,
				"No Posts Today"
			);
		}
	}
});

module.exports = PostContainer;