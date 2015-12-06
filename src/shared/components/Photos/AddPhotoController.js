'use strict';

var React = require("react");
var Router = require("react-router");

export default class AddPhotoController extends React.Component {
  render() {
    return(
	  	<form className='add-photo-form' action='/add/photo' method='post'>
        <label for='name'>{ 'Name: ' }</label>
        <input placeholder='Name' name='name'/>
        <label for='link'>{ 'Link: ' }</label>
        <input placeholder='Link' name='link' type='url'/>
	      <button className='add-photo-form__submit-button' type='submit'>Submit</button>
	    </form>
    );
  }
}
