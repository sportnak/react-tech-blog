var React = require("react");
var styles = require("../../../../views/styles/PostStyle/PostStyles");

export default class extends React.Component{
	render(){
		return(
			<div className="post-container">
				<h2 style={styles.PostTitle} className="post-title">{this.props.post.title}</h2>
				<div className="post-content" dangerouslySetInnerHTML={{__html: this.props.post.content }}/>
				<div className="post-details">
					<span>{this.props.post.author}</span>
					<br/>
					<span>{this.props.post.date_created}</span>
				</div>
				<br/>
				<hr/>
			</div>
		);
	}
}