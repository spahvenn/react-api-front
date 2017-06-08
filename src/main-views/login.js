import React, {Component} from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/login-actions'
import { Redirect } from 'react-router-dom'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){

    if (this.props.isLoggedIn) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <form id="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" name="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.login.isFetching,
    isLoggedIn: state.login.isAuthenticated
  }
}

export default connect(mapStateToProps)(Login)