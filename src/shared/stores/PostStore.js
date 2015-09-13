var alt = require('../../server/alt');
var Actions = require('../actions/PostActions');

class PostStore{
	constructor(){
		this.page = 1;
		this.posts = [];
		this.nextPage = [];

		this.bindListeners({
			handleUpdatePosts: Actions.UPDATE_POSTS,
			handleLoadPosts: Actions.LOAD_POSTS,
			handleNextPage: Actions.ADD_POSTS
		});
	}

	handleLoadPosts(){
		this.posts = [];
		this.nextPage = [];
		this.page = 1;
	}

	handleUpdatePosts(posts){

		posts.posts.forEach(function(post){
			while(post.content.indexOf('&#39;') != -1){
				post.content = post.content.replace('&#39;', '\'');
			}
			while(post.content.indexOf('#39;') != -1){
				post.content = post.content.replace('#39;', '\'');
			}
		})

		for(var i = 0; i < 5; i++){
			this.posts.push(posts.posts[i]);
		}
		for (i = 5; i < posts.length; i++){
			this.nextPage.push(posts.posts[i]);
		}
		this.page = posts.page + 1;
	}

	handleNextPage(posts){
		for(var i = 0; i < this.nextPage.length; i++){
			this.posts.push(this.nextPage[i]);
		}
		this.nextPage = posts.posts;
		this.page = posts.page + 1;
	}
}

module.exports = alt.createStore(PostStore, 'PostStore');