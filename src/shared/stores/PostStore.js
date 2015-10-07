var alt = require('../../server/alt');
var Actions = require('../actions/PostActions');

class PostStore{
	constructor(){
		this.category = '';
		this.page = 1;
		this.posts = [];
		this.nextPage = [];
		this.techPosts = [];
		this.adventurePosts = [];

		this.bindListeners({
			handleUpdatePosts: Actions.UPDATE_POSTS,
			handleLoadPosts: Actions.LOAD_POSTS,
			handleNextPage: Actions.ADD_POSTS,
			handleFilterPosts: Actions.FILTER_POSTS,
			handleCategoryPage: Actions.ADD_TO_CATEGORY,
		});
	}

	handleCategoryPage(posts){
		console.log(posts.clear);
		if(posts.clear === -1){
			this.adventurePosts = [];
			this.techPosts = [];
			this.posts = [];
		}
		this.addToCategory(posts.posts, posts.posts.length);
		this.category = posts.category;
	}

	handleFilterPosts(category) {
		this.category = category;
	}

	handleLoadPosts(){
		this.category = '';
		this.posts = [];
		this.adventurePosts = [];
		this.techPosts = [];
		this.nextPage = [];
		this.page = 1;
	}

	addToCategory(posts, length){
		for(var i = 0; i < length; i++){
			posts[i].content = this.decodeMarks(posts[i]);
			if(posts[i].category === 'Tech'){
				this.techPosts.push(posts[i]);
			} else if (posts[i].category === 'Adventure') {
				this.adventurePosts.push(posts[i]);
			}
		}
	}

	handleUpdatePosts(posts){
		var instance = this;
		posts.posts.forEach(function(post){
			post.content = instance.decodeMarks(post);
		});

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

	decodeMarks(post){
		var content = post.content;
		while(content.indexOf('&#39;') != -1){
			content = content.replace('&#39;', '\'');
		}
		while(content.indexOf('#39;') != -1){
			content = content.replace('#39;', '\'');
		}
		return content;
	}
}

module.exports = alt.createStore(PostStore, 'PostStore');