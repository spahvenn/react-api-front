import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import googleBtn from '../static/google-login-btn/btn_google_dark_normal_ios.svg';

class Navigation extends Component {

  render(){
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
                <Link to="/reddit">Reddit Demo</Link>
              </li>
              <li>
                <a href="http://localhost:3001/auth/google">
                  <img id="google-login" src={googleBtn} alt="Google "/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;