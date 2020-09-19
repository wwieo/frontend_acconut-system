import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import '../style/navbar.css';

class NavbarPage extends React.Component{

    render(){
        return(
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="nav-unit" href="#">Home</Nav.Link>
            <Nav.Link className="nav-unit" href="#">Features</Nav.Link>
            <Nav.Link className="nav-unit" href="#">Pricing</Nav.Link>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link className="nav-unit" href="#">Login</Nav.Link>
          </Nav>
          </Navbar>
        );
    }
}
export default NavbarPage;