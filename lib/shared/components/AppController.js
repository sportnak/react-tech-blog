"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var Router = require("react-router");
var util = require('../util');
var PostContainer = require('./Post/PostsContainer');

var size = 48;
var titleSize = 36;

var AppController = (function (_React$Component) {
  _inherits(AppController, _React$Component);

  function AppController() {
    _classCallCheck(this, AppController);

    _get(Object.getPrototypeOf(AppController.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(AppController, [{
    key: "renderGrid",
    value: function renderGrid() {
      return React.createElement(
        "div",
        null,
        React.createElement("div", { className: "testing-vertical" }),
        React.createElement("div", { className: "testing-horizontal" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "app-container" },
          React.createElement("link", { href: "/home.css", rel: "stylesheet", type: "text/css" }),
          React.createElement(
            "div",
            { className: "nav-button-container" },
            React.createElement(
              "div",
              { className: "nav-button-container-bar" },
              React.createElement(
                "li",
                { id: "showPosts", className: "nav-button", onclick: "window.location.href = '/Tech'" },
                React.createElement("a", { href: "/Tech" })
              ),
              React.createElement(
                "li",
                { id: "showResume", className: "nav-button" },
                React.createElement("a", { href: "#" })
              ),
              React.createElement(
                "li",
                { id: "showGallery", className: "nav-button" },
                React.createElement("a", { href: "#" })
              ),
              React.createElement(
                "li",
                { id: "showAdventure", className: "nav-button", onclick: "window.location.href = '/Adventure'" },
                React.createElement("a", { href: "/Adventure" })
              )
            )
          ),
          this.props.children
        )
      );
    }
  }]);

  return AppController;
})(React.Component);

exports["default"] = AppController;
module.exports = exports["default"];