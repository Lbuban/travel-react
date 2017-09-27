import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
      return (


        //     <Navbar>
        //       <Navbar.Header>
        //         <Navbar.Brand>
        //           <a href="#">My Travel Site</a>
        //         </Navbar.Brand>
        //       </Navbar.Header>
        //       <Nav>
        //         <NavItem eventKey={1} href="#">Link</NavItem>
        //         <NavItem eventKey={2} href="#">Link</NavItem>
        //         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //           <MenuItem eventKey={3.1}>Home</MenuItem>
        //           <MenuItem eventKey={3.2}>About</MenuItem>
        //           <MenuItem eventKey={3.3}>Stuff</MenuItem>
        //           <MenuItem divider />
        //           <MenuItem eventKey={3.4}>Contact</MenuItem>
        //         </NavDropdown>
        //       </Nav>
        //     </Navbar>
        //   );
          
        //   ReactDOM.render(navbarInstance, mountNode);

  <nav className="navbar inverse fixedTop">
    <div className="container-fluid">
     
      <div className="navbar-header">
        <a className="navbar-brand" href="#">My Travel Site</a>
      </div>

   
      {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
        <ul className="nav navbar-nav navbar-right">
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