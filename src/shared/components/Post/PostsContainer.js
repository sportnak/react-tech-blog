var React = require("react");
var PostStore = require("../../stores/PostStore");
var PostActions = require("../../actions/PostActions");
var PostItem = require("./PostItem");
var styles = require("../../../../views/styles/PostStyle/PostContainerStyles");

//yikes
var pageGlobal = 1;

function checkBottom(){
	var body = document.body,
		html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, 
		html.clientHeight, html.scrollHeight, html.offsetHeight );

	if(window.scrollY + window.innerHeight == height) {
		PostActions.nextPage(pageGlobal);
	}
}

var PostContainer = React.createClass({
	getInitialState(){
		return PostStore.getState();
	},

	componentDidMount(){
		PostActions.loadPosts();
		PostStore.listen(this.onChange);
	},

	componentWillUnmount(){
		PostStore.unlisten(this.onChange);
	},

	onChange(state){
		this.setState(state);
		pageGlobal = this.state.page;
		window.onscroll = checkBottom;
	},
	
	render() {
		if(this.state.posts){
			return (
				<div className="post-box">
					<ul style={styles.UlStyle}>
						{this.state.posts.map((post) => {
							return (
								<li><PostItem post={post}/></li>
							);
						})}
					</ul>
				</div>
			);
		} else {
			return (
				<div>No Posts Today</div>
			);
		}
		
	}
});

module.exports = PostContainer;
