import React from "react";
import { MDBBtn } from 'mdbreact';

import '../style/user_action.css';

class SignUp extends React.Component {
    render() {
        return(
            <form className ="signUp">
                <p className="p" md="a">Sign up</p>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" />
                </div><br/>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter user name" />
                </div><br/>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br/>

                <div className="form-group">
                    <label>Password confirmed</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div><br/>
                

                <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
                </div>
            </form>            
        );
    }
}

export default SignUp;