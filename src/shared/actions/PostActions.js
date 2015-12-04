var alt = require('../../server/alt');
var Ajax = require('../AJAX');

class PostAction {
  loadPost (id) {
    var instance = this;
    Ajax.Get('/database/post/' + id, function (data) {
      console.log(JSON.parse(data));
      instance.actions.updatePosts({ post: JSON.parse(data) })
    });
  }
  loadPosts (category){
    var instance = this;
    Ajax.Get('/database/posts-after/' + category + '/-1', function (data){
      instance.actions.updatePosts({ posts: JSON.parse(data), category: category, page: 1 });
    });
  }
  updatePosts (posts){
    this.dispatch(posts);
  }
  nextCategoryPage (category, start_id){
    var instance = this;
    var start = start_id != null ? start_id : -1;
    Ajax.Get('/database/posts-after/' + category + '/' + start, function (data) {
      instance.actions.addPosts({ posts: JSON.parse(data), category: category, clear: start } );
    });
  }
  addPosts(posts) {
    this.dispatch(posts);
  }
}

module.exports = alt.createActions(PostAction);