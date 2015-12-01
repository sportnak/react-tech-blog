var React = require("react");
var Router = require("react-router");
var util = require('../util');
var PostContainer = require('./Post/PostsContainer');

var size = 48;
var titleSize = 36;

export default class AppController extends React.Component {
  renderGrid() {
    return (
      <div>
        <div className='testing-vertical'></div>
        <div className='testing-horizontal'></div>
      </div>
    );
  }
  render() {
    return(
      <div>
        <div id='app-container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}
