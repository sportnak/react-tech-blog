'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var React = require('react');
var IndexRoute = ReactRouter.IndexRoute;

var AppController = require('./shared/components/AppController');
var HomeController = require('./shared/components/HomeController');
var PostController = require('./shared/components/Post/PostController');
var GalleryController = require('./shared/components/Gallery/GalleryController');
var PostContainer = require('./shared/components/Post/PostsContainer');
var Login = require('./shared/components/Login/LoginController');
//modify this one to be the errors file.
var ServerErrorController = require('./shared/components/ServerErrorController');

exports['default'] = React.createElement(
	Route,
	{ path: '/', component: AppController },
	React.createElement(IndexRoute, { component: HomeController }),
	React.createElement(Route, { path: 'tech', component: PostContainer }),
	React.createElement(Route, { path: 'post/:id', component: PostContainer }),
	React.createElement(Route, { path: 'adventure', component: PostContainer }),
	React.createElement(Route, { path: 'login', component: Login }),
	React.createElement(Route, { path: 'post', component: PostController }),
	React.createElement(Route, { path: 'gallery', component: GalleryController }),
	React.createElement(Route, { path: 'server_error', component: ServerErrorController })
);
module.exports = exports['default'];