'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../../server/alt');
var Ajax = require('../AJAX');

var PostAction = (function () {
	function PostAction() {
		_classCallCheck(this, PostAction);
	}

	_createClass(PostAction, [{
		key: 'loadPosts',
		value: function loadPosts() {
			var instance = this;
			Ajax.Get('/database/posts/2/10', function (data) {
				console.log(JSON.parse(data));
				instance.actions.updatePosts({ posts: JSON.parse(data).reverse(), page: 2 });
			});
		}
	}, {
		key: 'updatePosts',
		value: function updatePosts(posts) {
			this.dispatch(posts);
		}
	}, {
		key: 'nextPage',
		value: function nextPage(page) {
			var instance = this;
			Ajax.Get('/database/posts/' + page + '/5', function (data) {
				console.log(JSON.parse(data));
				instance.actions.addPosts({ posts: JSON.parse(data).reverse(), page: page });
			});
		}
	}, {
		key: 'addPosts',
		value: function addPosts(posts) {
			this.dispatch(posts);
		}
	}]);

	return PostAction;
})();

module.exports = alt.createActions(PostAction);