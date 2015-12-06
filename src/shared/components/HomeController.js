var React = require('react');
var util = require('../util');

export default class HomeController extends React.Component {
  componentDidMount() { 
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
        <img className='cover__image'/>
        <div className="tagline__wrapper">
          <div className="tagline__wrapper__text">
            <span>{'The world is a book,\n \t and those who don\'t travel only read the first page.'}</span>
            <span className="tagline__wrapper__author">{'\n- St. Augustine'}</span>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        { this.props.path === '/' ? this.renderCover() : this.renderCover() }
      </div>
    );
  }
}