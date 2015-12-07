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
    var page = this.props.params.id ? this.props.params.id : this.state.page;
    GalleryActions.loadPhotos(page);
    GalleryStore.listen(this.onChange);
  },
  componentWillUnmount: function componentWillUnmount() {
    GalleryStore.unlisten(this.onChange);
  },
  onChange: function onChange(state) {
    this.setState(state);
  },
  prevPage: function prevPage() {
    var page = this.state.page - 1;
    window.location.pathname = '/photos/gallery/' + page;
    //GalleryActions.loadPhotos(page);
  },
  nextPage: function nextPage() {
    var page = this.state.page == 0 ? 2 : parseInt(this.state.page) + 1;
    window.location.pathname = '/photos/gallery/' + page;
    //GalleryActions.loadPhotos(page);
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
  renderBefore: function renderBefore() {
    if (this.state.page != 0) {
      return React.createElement(
        'div',
        { className: 'photo-gallery__container__photos--before', onClick: this.prevPage },
        React.createElement('div', { className: 'before-icon' })
      );
    }
    return;
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
  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      { className: 'photo-gallery__container' },
      this.renderBefore(),
      React.createElement(
        'div',
        { className: 'photo-gallery__container__photos' },
        this.state.photos.map(function (photo) {
          return React.createElement('img', { className: 'photo', onClick: self.openLightbox.bind(self, photo.link, photo.name, photo.album), src: photo.thumbnail });
        })
      ),
      this.renderAfter(),
      self.state.link ? self.renderLightBox() : null
    );
  }
});

module.exports = GalleryController;