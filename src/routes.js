var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var React = require('react');
var IndexRoute = ReactRouter.IndexRoute;

var AppController = require('./shared/components/AppController');
var HomeController = require('./shared/components/HomeController');
var Login = require('./shared/components/Login/LoginController');
var PostController = require('./shared/components/Post/PostController');
var PostContainer = require('./shared/components/Post/PostsContainer');
var ServerErrorController = require('./shared/components/ServerErrorController');

var PhotoController = require('./shared/components/Photos/PhotoController');
var AddPhotoController = require('./shared/components/Photos/AddPhotoController');
var GalleryController = require('./shared/components/Photos/GalleryController');

export default (
	<Route path='/' component={ AppController }> 
    	<IndexRoute component= { HomeController }/>
		<Route path='tech' component={ PostContainer }/>
		<Route path="post/:id" component={ PostContainer }/>
    	<Route path='adventure' component={ PostContainer }/>
		<Route path='login' component={ Login }/>
		<Route path='post' component={ PostController }/>
		<Route path='photos' component={ PhotoController }>
			<Route path='add' component={ AddPhotoController }/>
			<Route path='gallery' component={ GalleryController }>
				<Route path=':id'/>
			</Route>
		</Route>
		<Route path='server_error' component={ ServerErrorController }/>
	</Route>
);
