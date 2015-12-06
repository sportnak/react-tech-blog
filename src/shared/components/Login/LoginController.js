var React = require('react');
var Router = require('react-router');

export default class LoginConroller extends React.Component {  
  render() {
    return(
      <div>
        <form className='login-form' action='/login' method='post'>
          <div className='form-group'>
            <label for='email'>{ 'Email: ' }</label>
            <input placeholder='Email' name='username'/><br/>
          </div>
          <div className='form-group'>
            <label for='password'>{ 'Password: ' }</label>
            <input placeholder='Password' name='password' type='password'/><br/>
          </div>
          <button id='login-submit' type='submit'>Submit</button>
        </form>
      </div>
      );
  }
}