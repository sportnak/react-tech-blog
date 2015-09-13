"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsAppController = require("/components/AppController");

var _componentsAppController2 = _interopRequireDefault(_componentsAppController);

var _componentsPostPostsContainer = require("/components/Post/PostsContainer");

var _componentsPostPostsContainer2 = _interopRequireDefault(_componentsPostPostsContainer);

var _componentsPostPostController = require("/components/Post/PostController");

var _componentsPostPostController2 = _interopRequireDefault(_componentsPostPostController);

var _componentsLoginLoginController = require("/components/Login/LoginController");

var _componentsLoginLoginController2 = _interopRequireDefault(_componentsLoginLoginController);

//modify this one to be the errors file.

var _componentsServerErrorController = require("/components/ServerErrorController");

var _componentsServerErrorController2 = _interopRequireDefault(_componentsServerErrorController);

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ handler: _componentsAppController2["default"], path: "/" },
	_react2["default"].createElement(_reactRouter.Route, { name: "/", handler: _componentsPostPostsContainer2["default"] }),
	"//",
	_react2["default"].createElement(_reactRouter.Route, { name: "/login", handler: _componentsLoginLoginController2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { name: "/post", handler: _componentsPostPostController2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { name: "server_error", handler: _componentsServerErrorController2["default"] })
);
module.exports = exports["default"];