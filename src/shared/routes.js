var { Router, Route } = require("react-router");
var React = require("react");

var AppController = require("./components/AppController");
var PostContainer = require("./components/Post/PostsContainer");
var PostController = require("./components/Post/PostController");
var Login = require("./components/Login/LoginController");
//modify this one to be the errors file.
var ServerErrorController = require("./components/ServerErrorController");

export default (
	<Route handler={ AppController } path="/"> 
		<Route name="/" handler={ PostContainer }/>
		//<Route name="/login" handler={ Login }/>
		<Route name="/post" handler={ PostController }/>
		<Route name="server_error" handler={ ServerErrorController }/>
	</Route>
);