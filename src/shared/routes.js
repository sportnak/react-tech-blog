import { Router, Route } from "react-router";
import React from "react";

import AppController from "./components/AppController";
import PostContainer from "./components/Post/PostsContainer";
import PostController from "./components/Post/PostController";
import Login from "./components/Login/LoginController";
//modify this one to be the errors file.
import ServerErrorController from "./components/ServerErrorController";

export default (
	<Route handler={ AppController } path="/"> 
		<Route name="/" handler={ PostContainer }/>
		//<Route name="/login" handler={ Login }/>
		<Route name="/post" handler={ PostController }/>
		<Route name="server_error" handler={ ServerErrorController }/>
	</Route>
);