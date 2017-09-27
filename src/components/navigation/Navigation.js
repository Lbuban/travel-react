import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
      return (


  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
     
      <div class="navbar-header">
        <a class="navbar-brand" href="#">My Travel Site</a>
      </div>

   
      {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Stuff</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
   
  
  
      );
    }
  }
  
  export default Navigation;