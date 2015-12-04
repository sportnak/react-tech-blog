var React = require("react");
var Router = require("react-router");

var size = 48;
var titleSize = 36;

//require('!less-loader!../../../../public/css/gallery.less');

export default class GalleryController extends React.Component {
  render() {
    return(
      <div>
        <link href='/css/gallery.css' rel='stylesheet' type='text/css'/>
        <div className="gallery-container">

        </div>
      </div>
    );
  }
}

