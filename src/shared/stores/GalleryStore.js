var alt = require('../../server/alt');
var Actions = require('../actions/GalleryActions');

class GalleryStore {
  constructor(){
    this.albums = [];
    this.nextAlbums = [];
    this.nextPage = [];
    this.page = 0;
    this.photos = [];
    this.thumbnails = [];

    this.bindListeners({
      handleUpdatePhotos: Actions.UPDATE_PHOTOS,
      handleUpdateAlbums: Actions.UPDATE_ALBUMS,
    });
  }

  handleUpdatePhotos(response) {
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

  handleUpdateAlbums(response) {
    if (response.page < this.page) {
      this.nextAlbums = response.albums.slice(12);
      this.albums = response.albums.slice(0, 12);
    } else {
      if (this.nextAlbums.length == 0) {
        this.albums = response.albums.slice(0, response.albums.length > 12 ? 12 : response.albums.length);
        this.nextAlbums = response.albums.slice(12);
      } else {
        this.albums = this.nextAlbums;
        this.nextAlbums = response.albums.slice(0, response.photos.length > 12 ? 12 : response.albums.length);
      }
    }
    this.page = response.page;
  }
}

module.exports = alt.createStore(GalleryStore, 'GalleryStore');