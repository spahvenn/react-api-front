import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;