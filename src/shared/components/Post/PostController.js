var React = require('react');
var Router = require('react-router');
var Ajax = require('../../AJAX');

export default class PostController {
  componentDidMount(){
    CKEDITOR.replace('contentEditor');
    this.props.editor = CKEDITOR;
  }

  submitButton(){
    Ajax.Post('/database/post', JSON.stringify( {
      title : this.refs.postTitle.state.value,
      type : this.refs.postType.state.value,
      content: this.props.editor.instances.contentEditor.getData()
    }), function(data){
      if(data.status == 200){
        window.href.location('/');
      }
    });
  }

  titleChange(event){
    this.setState({value: event.target.value});
  }

  typeChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div>
        <h1 style={{margin: '10%', fontWeight: 400, fontSize: 36}} >{'Write a post:'}</h1>
        <div className='new-post' >
          <label for='Title'>Title: </label>
          <input onChange={ this.titleChange } ref='postTitle' name='Title' placeholder='Title' type='text'/>
          <label for='Type'>Type: </label>
          <input onChange={ this.typeChange } ref='postType' name='Type' placeholder='Adventure or Tech' type='text'/>
          <br/>
          <label for='Content'>Content: </label>
          <textarea id='contentEditor' name='Content' type='text'></textarea>
          <br/>
          <button onClick= { this.submitButton.bind(this) } >Submit</button>
        </div>
      </div>
      );
  }
}