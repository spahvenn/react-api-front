import React, {Component} from 'react';
import { connect } from 'react-redux'
import { signUp } from '../actions/sign-up-actions'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(signUp(this.state.email, this.state.password));
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
    return (
      <div className="row">
        <div className="col-md-12">
          <form id="register-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" name="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-default">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.signUp.isFetching
  }
}

export default connect(mapStateToProps)(SignUp)