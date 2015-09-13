"use strict";

var React = require("react");
var Router = require("react-router");
var routes = require("../shared/routes");

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(React.createElement(Handler, null), document.getElementById('react-app'));
});