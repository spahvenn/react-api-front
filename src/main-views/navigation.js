import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import googleBtn from '../static/google-login-btn/btn_google_dark_normal_ios.svg';
import { connect } from 'react-redux'

class Navigation extends Component {

  render(){

    let loginButton = null;
    if (this.props.isLoggedIn) {
      loginButton = <Link to="/logout">logout</Link>
    } else {
      loginButton = <Link to="/login">login</Link>
    }

    let signUpButton = null;
    if (this.props.isLoggedIn) {
      signUpButton = null
    } else {
      signUpButton = <Link to="/signup">sign up</Link>
    }

    let googleLoginButton = null
    if (this.props.isLoggedIn) {
      googleLoginButton = null
    } else {
      googleLoginButton = (
        <a href="http://localhost:3001/auth/google">
          <img id="google-login" src={googleBtn} alt="Google "/>
        </a>
      )
    }

    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">React API front</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: '1px'}}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/reddit">Reddit API Demo</Link>
              </li>
              <li>
                <Link to="/weather">Open Weather Map API Demo</Link>
              </li>
              <li>
                {googleLoginButton}
              </li>
              <li>
                {loginButton}
              </li>
              <li>
                {signUpButton}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isAuthenticated
  }
}

export default connect(mapStateToProps)(Navigation)