var React = require("react");
var Router = require("react-router");
var util = require('../util');
var PostContainer = require('./Post/PostsContainer');

var RouteHandler = Router.RouteHandler;
var size = 48;
var titleSize = 36;

export default class AppController extends React.Component {
	componentDidMount() {
		if(window.location.hash.length > 0) {
			window.location.hash = '';
		}
		document.querySelector('.tagline1').style.display = 'initial';
		document.querySelector('.tagline2').style.display = 'initial';

		util.ConvertToArray(document.querySelector('.cover').children).forEach(function(child){
			if(child.classList.contains('nav-button')) {
				child.style.display = 'inline-block';
			} else {
				child.style.display = 'initial';
			}
		});
	}
	renderLine(text, location) {
		var leftOffset = 33 + location * 3;
		var offset = leftOffset + '%';
		return(
			<div>
				<div className={'tagline' + location} style={{position: 'absolute', color: 'white'}}>
					{text}
				</div>
			</div>
		);
	}
	renderGrid() {
		return (
			<div>
				<div className='testing-vertical'></div>
				<div className='testing-horizontal'></div>
			</div>
		);
	}
	renderCover() {
		return (
			<img className='cover-image'/>
		);
	}
	showPosts() {
		document.querySelector('.cover').classList.add('cover-leave');
		document.querySelector('#posts').style.display = 'initial';
		document.querySelector('#app-container').style.overflowX = 'visible';
		document.querySelector('body').style.overflow = 'visible';
		document.querySelector('.cover-image').style.width = 0;
	}
	render() {
		return(
			<div>
				<div id='app-container'>
					<link href='/home.css' rel='stylesheet' type='text/css'/>
					<div className='cover'>
						{this.renderCover()}
						{this.renderLine('Everything that is', 1)}
						{this.renderLine('was coded to be as such.', 2)}
						<li id='showPosts' onClick={this.showPosts} className='nav-button'><a href='#Tech'>Tech Blog</a></li>
						<li id='showResume' className='nav-button'><a href='#'>Resume</a></li>
						<li id='showGallery' className='nav-button'><a href='#'>Photos</a></li>
						<li id='showAdventure' onClick={this.showPosts} className='nav-button'><a href='#Adventure'>Adventures</a></li>
					</div>
					<div id='posts' style={{display: 'none'}}>
						<PostContainer/>
					</div>
					<RouteHandler/>
				</div>
			</div>
    	);
	}
}