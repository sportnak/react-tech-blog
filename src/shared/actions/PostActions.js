import alt from '../../server/alt';
import Ajax from '../AJAX';

class PostAction {
	loadPosts(){
		var instance = this;
		Ajax.Get('/database/posts/2/10', function(data){
			console.log(JSON.parse(data));
			instance.actions.updatePosts({ posts: JSON.parse(data).reverse(), page: 2 });
		});
	}

	updatePosts(posts){
		this.dispatch(posts);
	}

	nextPage(page){
		var instance = this;
		Ajax.Get('/database/posts/' + page + '/5', function(data){
			console.log(JSON.parse(data));
			instance.actions.addPosts({ posts: JSON.parse(data).reverse(), page: page });
		})
	}

	addPosts(posts){
		this.dispatch(posts);
	}
}

module.exports = alt.createActions(PostAction);