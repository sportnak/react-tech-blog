var alt = require('../../server/alt');
var Ajax = require('../AJAX');

class GalleryActions {
  loadPhotos (page) {
    var instance = this;
    Ajax.Get('/page/photos/' + page, function (data){
      instance.actions.updatePhotos({ photos: JSON.parse(data), page: page });
    });
  }
  updatePhotos (posts) {
    this.dispatch(posts);
  }

  loadAlbums (page) {
  	var instance = this;
  	Ajax.Get('/albums/' + page, function (data) {
  		instance.actions.updateAlbums({ albums: JSON.parse(data), page: page });
  	})
  }
  updateAlbums (albums) {
  	this.dispatch(albums);
  }
}

module.exports = alt.createActions(GalleryActions);