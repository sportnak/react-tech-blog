var React = require('react');
var styles = require('../../../../views/styles/PostStyle/PostStyles');

export default class extends React.Component{
  openPost (id) {
    window.location.href = '/post/' + id;
  }
  renderPreviews () {
    var content = this.props.post.content;
    content = content.substring(content.indexOf('<p>'), content.indexOf('</p>'));

    return (
      <div onClick={this.openPost.bind(this, this.props.post.id)} className={'post-preview__container'} id={this.props.post.id}>
        <h2 className='post-preview__container__title' style={styles.PostTitle}>{this.props.post.title}</h2>
        <div className='post-preview__container__content' dangerouslySetInnerHTML={{__html: content }}/>
        <br/>
      </div>
    );
  }
  renderPost () {
    return (
      <div className={'post__container'} id={this.props.post.id}>
        <h2 style={styles.PostTitle} className='post__container__title'>{this.props.post.title}</h2>
        <div className='post__container__content' dangerouslySetInnerHTML={{__html: this.props.post.content }}/>
        <div className='post__container__details'>
          <span>{this.props.post.author}</span>
          <br/>
          <span>{this.props.post.date_created}</span>
        </div>
        <br/>
        <hr/>
      </div>
    );
  }
  render(){
    return (
      <div>
        {this.props.category === 'post/:id' ? this.renderPost() : this.renderPreviews()}
      </div>
    );
  }
}