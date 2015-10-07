var { Router, Route } = require('react-router');
var React = require('react');

var AppController = require('./shared/components/AppController');
var PostController = require('./shared/components/Post/PostController');
var Login = require('./shared/components/Login/LoginController');
//modify this one to be the errors file.
var ServerErrorController = require('./shared/components/ServerErrorController');

export default (
	<Route handler={ AppController } path='/'> 
		<Route name='/login' handler={ Login }/>
		<Route name='/post' handler={ PostController }/>
		<Route name='server_error' handler={ ServerErrorController }/>
	</Route>
);