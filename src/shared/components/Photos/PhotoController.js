'use strict';

var React = require("react");
var Router = require("react-router");

export default class GalleryController extends React.Component {
  render() {
    return(
      <div>
        <div className="photo__container">
        	{this.props.children}
        </div>
      </div>
    );
  }
}
