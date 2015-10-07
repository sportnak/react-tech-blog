var alt = require('../../server/alt');
var Ajax = require('../AJAX');

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

	nextPage(page, category){
		var instance = this;
		Ajax.Get('/database/posts/' + page + '/5', function(data){
			console.log(JSON.parse(data));
			instance.actions.addPosts({ posts: JSON.parse(data).reverse(), page: page });
		});
	}

	nextCategoryPage(category, start_id){
		var instance = this;
		var start = start_id != null ? start_id : -1;
		Ajax.Get('/database/posts-after/' + category + '/' + start, function(data) {
			instance.actions.addToCategory({ posts: JSON.parse(data), category: category, clear: start } );
		});
	}

	addToCategory(posts) {
		this.dispatch(posts);
	}

	addPosts(posts){
		this.dispatch(posts);
	}

	filterPosts(category){
		this.dispatch(category);
	}
}

module.exports = alt.createActions(PostAction);