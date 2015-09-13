var React = require("react");
var Router = require("react-router");

var RouteHandler = Router.RouteHandler;

export default class AppController extends React.Component {  
	render() {
		return(
			<div>
				<nav className="navbar navbar-default">
					<h1 style={{fontWeight: 400, fontSize: 36}} >{"Welcome to Michael's blog!"}</h1>
				</nav>
				<RouteHandler/>
			</div>
    	);
	}
}