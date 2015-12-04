var alt = require('../../server/alt');
var Actions = require('../actions/PostActions');

class PostStore{
  constructor(){
    this.category = '';
    this.page = -1;
    this.posts = [];
    this.nextPage = [];
    this.techPosts = [];
    this.adventurePosts = [];

    this.bindListeners({
      handleUpdatePosts: Actions.UPDATE_POSTS,
      handleLoadPosts: Actions.LOAD_POSTS,
      handleNextPage: Actions.ADD_POSTS
    });
  }
  handleLoadPosts(){
    this.category = '';
    this.posts = [];
    this.adventurePosts = [];
    this.techPosts = [];
    this.nextPage = [];
    this.page = -1;
  }
  handleUpdatePosts(posts){
    var instance = this;

    if (!posts.posts) {
      this.posts = [];
    }

    if (posts.category) {
      posts.posts.forEach(function(post){
        post.content = instance.decodeMarks(post);
      });

      for(var i = 0; i < 5; i++){
        this.posts.push(posts.posts[i]);
      }

      for (i = 5; i < posts.posts.length; i++){
        this.nextPage.push(posts.posts[i]);
      }

      this.page = posts.posts[posts.posts.length - 1].id;
    } else {
      posts.post.content = instance.decodeMarks(posts.post);
      this.posts.push(posts.post);
    }
  }
  handleNextPage(posts){
    for(var i = 0; i < this.nextPage.length; i++){
      this.posts.push(this.nextPage[i]);
    }
    this.nextPage = posts.posts;
    this.page = posts.posts[0] ? posts.posts[posts.posts.length - 1].id : -2;
  }
  decodeMarks(post){
    var content = post.content;
    while(content.indexOf('&#39;') != -1){
      content = content.replace('&#39;', '\'');
    }

    while(content.indexOf('#39;') != -1){
      content = content.replace('#39;', '\'');
    }

    while(content.indexOf('&nbsp;') != -1) {
      content = content.replace('&nbsp;', ' ');
    }

    while(content.indexOf('nbsp;') != -1) {
      content = content.replace('nbsp;', ' ');
    }

    return content;
  }
}

module.exports = alt.createStore(PostStore, 'PostStore');