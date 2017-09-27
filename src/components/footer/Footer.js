import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
      return (

<nav className="navbar navbar-inverse navbar-fixed-bottom">
  <div className="container-fluid">

    <div className="navbar-header">
      <a className="navbar-brand" href="#">Travel is fun</a>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </div>
</nav>

);
}
}
export default Footer;