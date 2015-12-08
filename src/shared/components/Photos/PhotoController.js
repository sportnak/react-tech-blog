'use strict';

var React = require("react");
var Router = require("react-router");

export default class PhotoController extends React.Component {
  renderGalleryOptions() {
    return (
      <div className="gallery-options__container">
      </div>
    );
  }
  render() {
    return(
      <div>
        <div className="photo__container">
          {this.props.children ? this.props.children : this.renderGalleryOptions()}
        </div>
      </div>
    );
  }
}
