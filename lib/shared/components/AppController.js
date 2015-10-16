"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var Router = require("react-router");
var util = require('../util');
var PostContainer = require('./Post/PostsContainer');

var RouteHandler = Router.RouteHandler;
var size = 48;
var titleSize = 36;

var AppController = (function (_React$Component) {
	_inherits(AppController, _React$Component);

	function AppController() {
		_classCallCheck(this, AppController);

		_get(Object.getPrototypeOf(AppController.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(AppController, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (window.location.hash.length > 0) {
				window.location.hash = '';
			}
			document.querySelector('.tagline1').style.display = 'initial';
			document.querySelector('.tagline2').style.display = 'initial';

			util.ConvertToArray(document.querySelector('.cover').children).forEach(function (child) {
				if (child.classList.contains('nav-button')) {
					child.style.display = 'inline-block';
				} else {
					child.style.display = 'initial';
				}
			});
		}
	}, {
		key: "renderLine",
		value: function renderLine(text, location) {
			var leftOffset = 33 + location * 3;
			var offset = leftOffset + '%';
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: 'tagline' + location, style: { position: 'absolute', color: 'white' } },
					text
				)
			);
		}
	}, {
		key: "renderGrid",
		value: function renderGrid() {
			return React.createElement(
				"div",
				null,
				React.createElement("div", { className: "testing-vertical" }),
				React.createElement("div", { className: "testing-horizontal" })
			);
		}
	}, {
		key: "renderCover",
		value: function renderCover() {
			return React.createElement("img", { className: "cover-image" });
		}
	}, {
		key: "showPosts",
		value: function showPosts() {
			document.querySelector('.cover').classList.add('cover-leave');
			document.querySelector('#posts').style.display = 'initial';
			document.querySelector('#app-container').style.overflowX = 'visible';
			document.querySelector('body').style.overflow = 'visible';
			document.querySelector('.cover-image').style.width = 0;
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ id: "app-container" },
					React.createElement("link", { href: "/home.css", rel: "stylesheet", type: "text/css" }),
					React.createElement(
						"div",
						{ className: "cover" },
						this.renderCover(),
						this.renderLine('Everything that is', 1),
						this.renderLine('was coded to be as such.', 2),
						React.createElement(
							"li",
							{ id: "showPosts", onClick: this.showPosts, className: "nav-button" },
							React.createElement(
								"a",
								{ href: "#Tech" },
								"Tech Blog"
							)
						),
						React.createElement(
							"li",
							{ id: "showResume", className: "nav-button" },
							React.createElement(
								"a",
								{ href: "#" },
								"Resume"
							)
						),
						React.createElement(
							"li",
							{ id: "showGallery", className: "nav-button" },
							React.createElement(
								"a",
								{ href: "#" },
								"Photos"
							)
						),
						React.createElement(
							"li",
							{ id: "showAdventure", onClick: this.showPosts, className: "nav-button" },
							React.createElement(
								"a",
								{ href: "#Adventure" },
								"Adventures"
							)
						)
					),
					React.createElement(
						"div",
						{ id: "posts", style: { display: 'none' } },
						React.createElement(PostContainer, null)
					),
					React.createElement(RouteHandler, null)
				)
			);
		}
	}]);

	return AppController;
})(React.Component);

exports["default"] = AppController;
module.exports = exports["default"];