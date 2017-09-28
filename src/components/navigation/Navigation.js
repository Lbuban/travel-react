import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
    render() {
      return (
   
   <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">My Travel Site</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav navbar-right>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">Stuff</NavItem>
        <NavItem eventKey={2} href="#">Contact</NavItem>
      </Nav>
  </Navbar>
    );
    }
  }
  
  export default Navigation;