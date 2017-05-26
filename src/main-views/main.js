import React, {Component} from 'react';
import Navigation from './navigation';
import Footer from './footer';

class Main extends Component {

  render(){
    return(
      <div>
        <Navigation/>
        <div className="container">
          {this.props.children}
          <hr/>
          <Footer/>
        </div>
      </div>
    );
  }

}

export default Main
