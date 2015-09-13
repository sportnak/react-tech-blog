var React = require("react");  
var Router = require("react-router");  
var routes = require("../shared/routes");

Router.run(routes, Router.HistoryLocation, (Handler, state) => {  
  React.render(<Handler/>, document.getElementById('react-app'));
});