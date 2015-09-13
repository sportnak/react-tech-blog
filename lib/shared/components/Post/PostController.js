"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _AJAX = require('../../AJAX');

var _AJAX2 = _interopRequireDefault(_AJAX);

var RouteHandler = _reactRouter2["default"].RouteHandler;

var PostController = (function () {
	function PostController() {
		_classCallCheck(this, PostController);
	}

	_createClass(PostController, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			CKEDITOR.replace('contentEditor');
			this.props.editor = CKEDITOR;
		}
	}, {
		key: "submitButton",
		value: function submitButton() {
			_AJAX2["default"].Post('/database/post', JSON.stringify({
				title: this.refs.postTitle.state.value,
				type: this.refs.postType.state.value,
				content: this.props.editor.instances.contentEditor.getData()
			}), function (data) {
				if (data.status == 200) {
					console.log("success");
				}
			});
		}
	}, {
		key: "titleChange",
		value: function titleChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: "typeChange",
		value: function typeChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"h1",
					{ style: { fontWeight: 400, fontSize: 36 } },
					"Write a post:"
				),
				_react2["default"].createElement(
					"form",
					{ className: "new-post" },
					_react2["default"].createElement(
						"table",
						null,
						_react2["default"].createElement(
							"tr",
							null,
							_react2["default"].createElement(
								"td",
								null,
								_react2["default"].createElement(
									"label",
									{ "for": "Title" },
									"Title: "
								)
							),
							_react2["default"].createElement(
								"td",
								null,
								_react2["default"].createElement("input", { onChange: this.titleChange, ref: "postTitle", name: "Title", placeholder: "Title", type: "text" })
							)
						),
						_react2["default"].createElement(
							"tr",
							null,
							_react2["default"].createElement(
								"td",
								null,
								_react2["default"].createElement(
									"label",
									{ "for": "Type" },
									"Type: "
								)
							),
							_react2["default"].createElement(
								"td",
								null,
								_react2["default"].createElement("input", { onChange: this.typeChange, ref: "postType", name: "Type", placeholder: "Adventure or Tech", type: "text" })
							)
						)
					),
					_react2["default"].createElement("br", null),
					_react2["default"].createElement(
						"label",
						{ "for": "Content" },
						"Content: "
					),
					_react2["default"].createElement("textarea", { id: "contentEditor", name: "Content", type: "text" }),
					_react2["default"].createElement("br", null),
					_react2["default"].createElement(
						"button",
						{ onClick: this.submitButton.bind(this) },
						"Submit"
					)
				)
			);
		}
	}]);

	return PostController;
})();

exports["default"] = PostController;
module.exports = exports["default"];