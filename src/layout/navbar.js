import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import '../style/navbar.css';

class NavComponent extends React.Component{

    render(){
        return(
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand   className="mr-auto" href="/">豪好用 HaoHaoYung</Navbar.Brand>
              <Nav className="mr-right">
                <Nav.Link className="nav-unit" href="/user_action">Login</Nav.Link>
              </Nav>
            </Navbar>
          </div>
        );
    }
}
export default NavComponent;