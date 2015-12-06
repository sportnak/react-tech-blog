'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../../server/alt');
var Ajax = require('../AJAX');

var GalleryActions = (function () {
  function GalleryActions() {
    _classCallCheck(this, GalleryActions);
  }

  _createClass(GalleryActions, [{
    key: 'loadPhotos',
    value: function loadPhotos(page) {
      var instance = this;
      Ajax.Get('/page/photos/' + page, function (data) {
        instance.actions.updatePhotos({ photos: JSON.parse(data), page: page });
      });
    }
  }, {
    key: 'updatePhotos',
    value: function updatePhotos(posts) {
      this.dispatch(posts);
    }
  }]);

  return GalleryActions;
})();

module.exports = alt.createActions(GalleryActions);