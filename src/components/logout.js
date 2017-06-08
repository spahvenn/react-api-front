import React, {Component} from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/login-actions'
import { Redirect } from 'react-router-dom'

// lähetetään logout action, tarkastellaan sen statusta, kun tulee valmiiksi, laitetaan isAuthenticated: false
// tällöin rendataan redirect komponentti juureen /
class Logout extends Component {

  componentDidMount() {
    this.props.dispatch(logout())
  }

  render() {
    if (this.props.isLoggedIn) {
      return (<div></div>)
    } else {
      return (<Redirect to="/"/>)
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isAuthenticated
  }
}

export default connect(mapStateToProps)(Logout)