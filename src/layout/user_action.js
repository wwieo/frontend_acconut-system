import React from "react";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Tab, Tabs} from 'react-bootstrap';

import SignUp from './sign_up';
import Login from './login';

import '../style/user_action.css';

class UserAction extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow className="justify-content-md-center">
                    <MDBCol xs lg="3"/>
                    <MDBCol>
                    <Tabs>
                        <Tab eventKey="login" title="Login">
                            <Login/>
                        </Tab>
                        <Tab eventKey="signUp" title="Sign up">
                            <SignUp/>
                        </Tab>
                    </Tabs>
                   </MDBCol>
                    <MDBCol xs lg="3"/>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default UserAction;