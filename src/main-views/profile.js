import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <p>Email {this.props.email}</p>
          <p>Name { this.props.name || 'No name set' }</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    name: state.user.name
  }
}

export default connect(mapStateToProps)(Profile)
