'use strict';

var React = require('react');
var GalleryStore = require('../../stores/GalleryStore');
var GalleryActions = require('../../actions/GalleryActions');
var util = require('../../util');

var GalleryController = React.createClass({
  displayName: 'GalleryController',

  getInitialState: function getInitialState() {
    return GalleryStore.getState();
  },
  componentDidMount: function componentDidMount() {
    if (this.props.params.album || this.state.activeAlbum) {
      var album = this.state.activeAlbum ? this.state.activeAlbum : this.props.params.album;
      var page = this.props.params.id ? this.props.params.id : this.state.page;
      GalleryActions.loadPhotos(page, album);
    } else {
      var page = this.state.page;
      GalleryActions.loadAlbums(page);
    }
    GalleryStore.listen(this.onChange);
  },
  componentWillUnmount: function componentWillUnmount() {
    GalleryStore.unlisten(this.onChange);
  },
  onChange: function onChange(state) {
    this.setState(state);
  },
  prevPage: function prevPage() {
    var album = this.state.activeAlbum ? this.state.activeAlbum : this.props.params.album;
    var page = this.state.page - 1;
    window.history.back();
    GalleryActions.loadPhotos(page, album);
  },
  nextPage: function nextPage() {
    var album = this.state.activeAlbum ? this.state.activeAlbum : this.props.params.album;
    var page = this.state.page == 0 ? 1 : parseInt(this.state.page) + 1;
    window.history.pushState(null, 'Title', '/photos/gallery/' + album + '/' + page);
    GalleryActions.loadPhotos(page, album);
  },
  closeLightbox: function closeLightbox() {
    document.body.style.overflow = 'scroll';
    this.setState({
      link: null
    });
  },
  openLightbox: function openLightbox(link, name, album) {
    document.body.style.overflow = 'hidden';

    this.setState({
      album: album,
      link: link,
      name: name,
      top: window.scrollY - 45
    });
  },
  redirectWindow: function redirectWindow(path, name) {
    window.history.pushState(null, 'Title', '/photos/gallery/' + path);
    this.setState({
      activeAlbum: name
    });
    GalleryActions.loadPhotos(0, name);
  },
  hoverAlbum: function hoverAlbum(id) {
    this.setState({
      hoveredAlbum: id
    });
  },
  unhoverAlbum: function unhoverAlbum() {
    this.setState({
      hoveredAlbum: -1
    });
  },
  renderBefore: function renderBefore() {
    if (this.state.page != 0) {
      return React.createElement(
        'div',
        { className: 'photo-gallery__container__photos--before', onClick: this.prevPage.bind(self) },
        React.createElement('div', { className: 'before-icon' })
      );
    }
    return;
  },
  renderAlbums: function renderAlbums() {
    var self = this;

    return React.createElement(
      'div',
      { className: 'album-container' },
      self.state.albums.map(function (album) {
        return React.createElement(
          'div',
          { className: 'album-container__album', onMouseLeave: self.unhoverAlbum, onMouseEnter: self.hoverAlbum.bind(self, album.id), onClick: self.redirectWindow.bind(self, album.name + '/0', album.name), style: { background: 'url(' + album.link + ')', backgroundPositionY: '40%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } },
          self.state.hoveredAlbum >= 0 && self.state.hoveredAlbum == album.id ? self.renderCover(album.name) : null
        );
      })
    );
  },
  renderCover: function renderCover(name) {
    return React.createElement(
      'div',
      { className: 'album-container__album__cover' },
      React.createElement(
        'span',
        { className: 'album-container__album__cover__text' },
        name
      )
    );
  },
  renderAfter: function renderAfter() {
    if (this.state.photos.length == 0 || this.state.photos.length < 12) {
      return;
    }
    return React.createElement(
      'div',
      { className: 'photo-gallery__container__photos--after', onClick: this.nextPage },
      React.createElement('div', { className: 'after-icon' })
    );
  },
  renderLightBox: function renderLightBox() {
    return React.createElement(
      'div',
      { className: 'lightbox', onClick: this.closeLightbox, style: { top: this.state.top } },
      React.createElement(
        'div',
        { className: 'lightbox__photo' },
        React.createElement('div', { className: 'lightbox__photo__image', style: { background: 'url(' + this.state.link + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' } }),
        React.createElement(
          'span',
          null,
          this.state.name + ' - ' + this.state.album
        )
      )
    );
  },
  renderPhotos: function renderPhotos() {
    var self = this;
    return React.createElement(
      'div',
      { className: 'photo-gallery__container__photos' },
      self.state.photos.map(function (photo) {
        return React.createElement('img', { className: 'photo', key: photo.id, onClick: self.openLightbox.bind(self, photo.link, photo.name, photo.album), src: photo.thumbnail });
      })
    );
  },
  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      { className: 'photo-gallery__container' },
      this.renderBefore(),
      this.state.activeAlbum || this.props.params.album ? this.renderPhotos() : this.renderAlbums(),
      self.state.link ? self.renderLightBox() : null,
      this.renderAfter()
    );
  }
});

module.exports = GalleryController;