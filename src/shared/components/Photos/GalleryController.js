var React = require('react');
var GalleryStore = require('../../stores/GalleryStore');
var GalleryActions = require('../../actions/GalleryActions');
var util = require('../../util');


var GalleryController = React.createClass({
  getInitialState(){
    return GalleryStore.getState();
  },
  componentDidMount(){
    var page = this.props.params.id ? this.props.params.id : this.state.page;
    GalleryActions.loadPhotos(page);
    GalleryStore.listen(this.onChange);
  },
  componentWillUnmount(){
    GalleryStore.unlisten(this.onChange);
  },
  onChange(state){
    this.setState(state);
  },
  prevPage() {
    var page = this.state.page - 1;
    window.location.pathname = '/photos/gallery/' + page;
    //GalleryActions.loadPhotos(page);
  },
  nextPage() {
    var page = this.state.page == 0 ? 2 : parseInt(this.state.page) + 1;
    window.location.pathname = '/photos/gallery/' + page;
    //GalleryActions.loadPhotos(page);
  },
  closeLightbox() {
    document.body.style.overflow = 'scroll';
    this.setState({
      link: null
    });
  },
  openLightbox(link, name) {
    document.body.style.overflow = 'hidden';

    this.setState({
      link: link,
      name: name,
      top: window.scrollY - 45
    });
  },
  renderLightBox() {
    return (
      <div className="lightbox" onClick={this.closeLightbox} style={{top: this.state.top}}>
        <div className="lightbox__photo">
          <div className="lightbox__photo__image" style={{background: 'url(' + this.state.link + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}/>
          <span>{this.state.name}</span>
        </div>
      </div>
    );
  },
  render() {
    var self = this;
    return (
      <div className="photo-gallery__container">
        {this.state.page == 0 ? null : <div className="photo-gallery__container__photos--before" onClick={this.prevPage}/> }
        <div className="photo-gallery__container__photos">
          {this.state.photos.map(function (photo) {
            return (
              <img className="photo" onClick={self.openLightbox.bind(self, photo.link, photo.name)}  src={photo.thumbnail} />
            );
          })}
        </div>
        {(this.state.photos.length == 0 || this.state.photos.length < 12) ? null : <div className="photo-gallery__container__photos--after" onClick={this.nextPage}/>}
        {self.state.link ? self.renderLightBox() : null}
      </div>
    );
  }
});

module.exports = GalleryController;