'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _serverAlt = require('../../server/alt');

var _serverAlt2 = _interopRequireDefault(_serverAlt);

var _actionsPostActions = require('../actions/PostActions');

var _actionsPostActions2 = _interopRequireDefault(_actionsPostActions);

var PostStore = (function () {
	function PostStore() {
		_classCallCheck(this, PostStore);

		this.page = 1;
		this.posts = [];
		this.nextPage = [];

		this.bindListeners({
			handleUpdatePosts: _actionsPostActions2['default'].UPDATE_POSTS,
			handleLoadPosts: _actionsPostActions2['default'].LOAD_POSTS,
			handleNextPage: _actionsPostActions2['default'].ADD_POSTS
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
			console.log(this.nextPage);
			for (var i = 0; i < this.nextPage.length; i++) {
				this.posts.push(this.nextPage[i]);
			}
			this.nextPage = posts.posts;
			this.page = posts.page + 1;
		}
	}]);

	return PostStore;
})();

module.exports = _serverAlt2['default'].createStore(PostStore, 'PostStore');