var alt = require('../../server/alt');
var Ajax = require('../AJAX');

class GalleryActions {
  loadPhotos (page){
    var instance = this;
    Ajax.Get('/page/photos/' + page, function (data){
      instance.actions.updatePhotos({ photos: JSON.parse(data), page: page });
    });
  }
  updatePhotos (posts){
    this.dispatch(posts);
  }
}

module.exports = alt.createActions(GalleryActions);