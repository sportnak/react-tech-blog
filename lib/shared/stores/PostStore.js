'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../../server/alt');
var Actions = require('../actions/PostActions');

var PostStore = (function () {
	function PostStore() {
		_classCallCheck(this, PostStore);

		this.page = 1;
		this.posts = [];
		this.nextPage = [];

		this.bindListeners({
			handleUpdatePosts: Actions.UPDATE_POSTS,
			handleLoadPosts: Actions.LOAD_POSTS,
			handleNextPage: Actions.ADD_POSTS
		});
	}

	_createClass(PostStore, [{
		key: 'handleLoadPosts',
		value: function handleLoadPosts() {
			this.posts = [];
			this.nextPage = [];
			this.page = 1;
		}
	}, {
		key: 'handleUpdatePosts',
		value: function handleUpdatePosts(posts) {

			posts.posts.forEach(function (post) {
				while (post.content.indexOf('&#39;') != -1) {
					post.content = post.content.replace('&#39;', '\'');
				}
				while (post.content.indexOf('#39;') != -1) {
					post.content = post.content.replace('#39;', '\'');
				}
			});

			for (var i = 0; i < 5; i++) {
				this.posts.push(posts.posts[i]);
			}
			for (i = 5; i < posts.length; i++) {
				this.nextPage.push(posts.posts[i]);
			}
			this.page = posts.page + 1;
		}
	}, {
		key: 'handleNextPage',
		value: function handleNextPage(posts) {
			for (var i = 0; i < this.nextPage.length; i++) {
				this.posts.push(this.nextPage[i]);
			}
			this.nextPage = posts.posts;
			this.page = posts.page + 1;
		}
	}]);

	return PostStore;
})();

module.exports = alt.createStore(PostStore, 'PostStore');