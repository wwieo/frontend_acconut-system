import React from "react";
import { MDBBtn } from 'mdbreact';

import '../style/user_action.css';

class Login extends React.Component {
    render() {
        return (
            <form className ="signUp">
                <p className="p" md="a">Log In</p>

                <div className="form-group">
                    <label>Username or email</label>
                    <input type="text" className="form-control" placeholder="Enter user name or email" />
                </div><br/>

                <div className="form-group">
                    <label>PassWord</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br/>

                <div className="text-center">
                <MDBBtn color="primary">Login</MDBBtn>
                </div>
            </form>               
        );
    }
}

export default Login;