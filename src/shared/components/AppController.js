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
          <link href='/home.css' rel='stylesheet' type='text/css'/>
          <div className="nav-button-container">
            <div className="nav-button-container-bar">
              <li id='showPosts' className='nav-button' onclick="window.location.href = '/Tech'"><a href='/Tech'></a></li>
              <li id='showResume' className='nav-button'><a href='#'></a></li>
              <li id='showGallery' className='nav-button'><a href='#'></a></li>
              <li id='showAdventure' className='nav-button' onclick="window.location.href = '/Adventure'"><a href='/Adventure'></a></li>
            </div>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
