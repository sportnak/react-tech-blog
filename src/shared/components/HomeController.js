var React = require('react');
var util = require('../util');

export default class HomeController extends React.Component {
  componentDidMount() { 
    console.log(this.props.children)
    util.ConvertToArray(document.querySelector('.cover').children).forEach(function(child){
      if(child.classList.contains('nav-button')) {
        child.style.display = 'inline-block';
      } else {
        child.style.display = 'initial';
      }
    });
  }
  renderCover() {
    return (
      <div className='cover'>
        <img className='cover-image'/>
        <div className="tagline-wrapper">
          <div className="tagline">{'The world is a book,\n \t and those who don\'t travel only read the first page.'}</div>
        </div>
        <div className="nav-button-container">
          <li id='showPosts' className='nav-button'><a href='/Tech'></a></li>
          <li id='showResume' className='nav-button'><a href='#'></a></li>
          <li id='showGallery' className='nav-button'><a href='#'></a></li>
          <li id='showAdventure' className='nav-button'><a href='/Adventure'></a></li>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <link href='/home.css' rel='stylesheet' type='text/css'/>
        { this.props.path === '/' ? this.renderCover() : this.renderCover() }
      </div>
    );
  }
}