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

export default (
	<Route path='/' component={ AppController }> 
    	<IndexRoute component= { HomeController }/>
		<Route path='tech' component={ PostContainer }/>
		<Route path="post/:id" component={ PostContainer }/>
    	<Route path='adventure' component={ PostContainer }/>
		<Route path='login' component={ Login }/>
		<Route path='post' component={ PostController }/>
		<Route path='gallery' component={ GalleryController }/>
		<Route path='server_error' component={ ServerErrorController }/>
	</Route>
);
