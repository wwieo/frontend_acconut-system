import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import '../style/navbar.css';

class NavComponent extends React.Component{
    logout(){
      localStorage.clear();
    }
    render(){
        return(
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand   className="mr-auto" href="/">豪好用 HaoHaoYung</Navbar.Brand>
              <Nav className="mr-right">
                {localStorage.getItem("isLogin")?
                  <div className="navRight">
                    <Nav.Link className="nav-unit" href="/personal_data">{localStorage.getItem("name")}</Nav.Link>
                    <Nav.Link className="nav-unit" href="/" onClick={this.logout}>Logout</Nav.Link>
                  </div>
                  : <Nav.Link className="nav-unit" href="/user_action">Login / Register</Nav.Link>}
              </Nav>
            </Navbar>
          </div>
        );
    }
}
export default NavComponent;