"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storesPostStore = require("../../stores/PostStore");

var _storesPostStore2 = _interopRequireDefault(_storesPostStore);

var _actionsPostActions = require("../../actions/PostActions");

var _actionsPostActions2 = _interopRequireDefault(_actionsPostActions);

var _PostItem = require("./PostItem");

var _PostItem2 = _interopRequireDefault(_PostItem);

var _viewsStylesPostStylePostContainerStyles = require("../../../../views/styles/PostStyle/PostContainerStyles");

var _viewsStylesPostStylePostContainerStyles2 = _interopRequireDefault(_viewsStylesPostStylePostContainerStyles);

//yikes
var pageGlobal = 1;

function checkBottom() {
	var body = document.body,
	    html = document.documentElement;
	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	if (window.scrollY + window.innerHeight == height) {
		_actionsPostActions2["default"].nextPage(pageGlobal);
	}
}

var PostContainer = _react2["default"].createClass({
	displayName: "PostContainer",

	getInitialState: function getInitialState() {
		return _storesPostStore2["default"].getState();
	},

	componentDidMount: function componentDidMount() {
		_actionsPostActions2["default"].loadPosts();
		_storesPostStore2["default"].listen(this.onChange);
	},

	componentWillUnmount: function componentWillUnmount() {
		_storesPostStore2["default"].unlisten(this.onChange);
	},

	onChange: function onChange(state) {
		this.setState(state);
		pageGlobal = this.state.page;
		window.onscroll = checkBottom;
	},

	render: function render() {
		if (this.state.posts) {
			return _react2["default"].createElement(
				"div",
				{ className: "post-box" },
				_react2["default"].createElement(
					"ul",
					{ style: _viewsStylesPostStylePostContainerStyles2["default"].UlStyle },
					this.state.posts.map(function (post) {
						return _react2["default"].createElement(
							"li",
							null,
							_react2["default"].createElement(_PostItem2["default"], { post: post })
						);
					})
				)
			);
		} else {
			return _react2["default"].createElement(
				"div",
				null,
				"No Posts Today"
			);
		}
	}
});

module.exports = PostContainer;