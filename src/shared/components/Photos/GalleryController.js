var React = require('react');
var GalleryStore = require('../../stores/GalleryStore');
var GalleryActions = require('../../actions/GalleryActions');
var util = require('../../util');


var GalleryController = React.createClass({
  getInitialState(){
    return GalleryStore.getState();
  },
  componentDidMount(){
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
  componentWillUnmount(){
    GalleryStore.unlisten(this.onChange);
  },
  onChange(state){
    this.setState(state);
  },
  prevPage() {
    var album = this.state.activeAlbum ? this.state.activeAlbum : this.props.params.album;
    var page = this.state.page - 1;
    window.history.back();
    GalleryActions.loadPhotos(page, album);
  },
  nextPage() {
    var album = this.state.activeAlbum ? this.state.activeAlbum : this.props.params.album;
    var page = this.state.page == 0 ? 1 : parseInt(this.state.page) + 1;
    window.history.pushState(null, 'Title', '/photos/gallery/' + album + '/' + page);
    GalleryActions.loadPhotos(page, album);
  },
  closeLightbox() {
    document.body.style.overflow = 'scroll';
    this.setState({
      link: null
    });
  },
  openLightbox(link, name, album) {
    document.body.style.overflow = 'hidden';

    this.setState({
      album: album,
      link: link,
      name: name,
      top: window.scrollY - 45
    });
  },
  redirectWindow(path, name) {
    window.history.pushState(null, 'Title', '/photos/gallery/' + path);
    this.setState({
      activeAlbum: name
    });
    GalleryActions.loadPhotos(0, name);
  },
  hoverAlbum(id) {
    this.setState({
      hoveredAlbum: id
    });
  },
  unhoverAlbum() {
    this.setState({
      hoveredAlbum: -1
    });
  },
  renderBefore() {
    if (this.state.page != 0) {
      return (
        <div className="photo-gallery__container__photos--before" onClick={this.prevPage}>
          <div className="before-icon"/>
        </div>
      );
    }
    return;
  },
  renderAlbums() {
    var self = this;

    return (
      <div className="album-container">
        {self.state.albums.map(function (album) {
          return (
            <div className="album-container__album" onMouseLeave={self.unhoverAlbum} onMouseEnter={self.hoverAlbum.bind(self, album.id)} onClick={self.redirectWindow.bind(self, album.name + '/0', album.name)} style={{background: 'url(' + album.link + ')', backgroundPositionX: '100%', backgroundPositionY: '40%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              {self.state.hoveredAlbum >= 0 && self.state.hoveredAlbum == album.id? self.renderCover(album.name) : null}
            </div>
          );
        })}
      </div>
    );
  },
  renderCover(name) {
    return (
      <div className="album-container__album__cover">
        <span className="album-container__album__cover__text">{name}</span>
      </div>
    );
  },
  renderAfter() {
    if (this.state.photos.length == 0 || this.state.photos.length < 12) {
      return;
    }
    return (
      <div className="photo-gallery__container__photos--after" onClick={this.nextPage}>
        <div className="after-icon"/>
      </div>
    );
  },
  renderLightBox() {
    return (
      <div className="lightbox" onClick={this.closeLightbox} style={{top: this.state.top}}>
        <div className="lightbox__photo">
          <div className="lightbox__photo__image" style={{background: 'url(' + this.state.link + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}/>
          <span>{this.state.name + ' - ' + this.state.album }</span>
        </div>
      </div>
    );
  },
  renderPhotos() {
    var self = this;
    return (
      <div className="photo-gallery__container__photos">
        {self.state.photos.map(function (photo) {
          return (
            <img className="photo" key={photo.id} onClick={self.openLightbox.bind(self, photo.link, photo.name, photo.album)}  src={photo.thumbnail} />
          );
        })}
      </div>
    );
  },
  render() {
    var self = this;
    return (
      <div className="photo-gallery__container">
        {this.renderBefore()}
        {this.state.activeAlbum || this.props.params.album ? this.renderPhotos() : this.renderAlbums()}
        {self.state.link ? self.renderLightBox() : null}
        {this.renderAfter()}
      </div>
    );
  }
});

module.exports = GalleryController;
