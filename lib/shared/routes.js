"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _require = require("react-router");

var Router = _require.Router;
var Route = _require.Route;

var React = require("react");

var AppController = require("./components/AppController");
var PostContainer = require("./components/Post/PostsContainer");
var PostController = require("./components/Post/PostController");
var Login = require("./components/Login/LoginController");
//modify this one to be the errors file.
var ServerErrorController = require("./components/ServerErrorController");

exports["default"] = React.createElement(
	Route,
	{ handler: AppController, path: "/" },
	React.createElement(Route, { name: "/", handler: PostContainer }),
	React.createElement(Route, { name: "/login", handler: Login }),
	React.createElement(Route, { name: "/post", handler: PostController }),
	React.createElement(Route, { name: "server_error", handler: ServerErrorController })
);
module.exports = exports["default"];