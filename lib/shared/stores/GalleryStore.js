'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var alt = require('../../server/alt');
var Actions = require('../actions/GalleryActions');

var GalleryStore = (function () {
  function GalleryStore() {
    _classCallCheck(this, GalleryStore);

    this.nextPage = [];
    this.page = 0;
    this.photos = [];
    this.thumbnails = [];

    this.bindListeners({
      handleUpdatePhotos: Actions.UPDATE_PHOTOS
    });
  }

  _createClass(GalleryStore, [{
    key: 'handleUpdatePhotos',
    value: function handleUpdatePhotos(response) {
      if (response.page < this.page) {
        this.nextPage = response.photos.slice(12);
        this.photos = response.photos.slice(0, 12);
      } else {
        if (this.nextPage.length == 0) {
          this.photos = response.photos.slice(0, response.photos.length > 12 ? 12 : response.photos.length);
          this.nextPage = response.photos.slice(12);
        } else {
          this.photos = this.nextPage;
          this.nextPage = response.photos.slice(0, response.photos.length > 12 ? 12 : response.photos.length);
        }
      }
      this.page = response.page;
    }
  }]);

  return GalleryStore;
})();

module.exports = alt.createStore(GalleryStore, 'GalleryStore');