import React from "react";
import { MDBBtn } from 'mdbreact';

import {format_check, ifDataExist} from '../controller/frontend_check/sign_up';

import '../style/user_action.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            status:{
                userName: "",
                fullName: "",
                email: "",
                password: "",
                cfPassword: ""
            },
            error:{
                userNameAlert: "",
                fullNameAlert: "",
                emailAlert: "",
                passwordAlert: "",
                cfPasswordAlert: ""
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const fieldName = e.target.name;
        const fieldValue = e.target.value;  
        const nowStatus = {
            ...this.state.status,
            [fieldName]: fieldValue
        }/*
        const nowError = {
            ...this.state.error,
            [fieldName+"Alert"]: ifDataExist(fieldName, fieldValue)
        }
        this.setState({error: nowError});   
*/
        this.setState({status: nowStatus});
        //async response should be fixed
    }
    
    handleBlur(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 
        const nowError = {
            ...this.state.error,
            [fieldName+"Alert"]: format_check(this.state, fieldName, fieldValue)
        }
        this.setState({error: nowError});
    }   
//onchange update alertText for api and set state all value
    render() {
        const nowState = this.state.status;
        const nowError = this.state.error;
        return(
            <div>       
                <br/>
                <div className="form-group">
                    <label>User Name</label>                    
                    <label className="alert">{nowError["userNameAlert"]}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["userName"]||""} name="userName"
                           className="form-control" placeholder="Enter user name" 
                           style={{borderColor:nowError["userNameAlert"]?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Full Name</label>
                    <label className="alert">{nowError["fullNameAlert"]}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["fullName"]||""} name="fullName"
                           className="form-control" placeholder="Enter full name" 
                           style={{borderColor:nowError["fullNameAlert"]?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Email address</label>
                    <label className="alert">{nowError["emailAlert"]}</label>
                    <input type="email"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["email"]||""} name="email"
                           className="form-control" placeholder="Enter email"  
                           style={{borderColor:nowError["emailAlert"]?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <label className="alert">{nowError["passwordAlert"]}</label>
                    <input type="password" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["password"]||""} name="password"
                           className="form-control" placeholder="Enter password" 
                           style={{borderColor:nowError["passwordAlert"]?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password confirmed</label>
                    <label className="alert">{nowError["cfPasswordAlert"]}</label>
                    <input type="password"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["cfPassword"]||""} name="cfPassword"
                           className="form-control" placeholder="Enter password again" 
                           style={{borderColor:nowError["cfPasswordAlert"]?"red":""}}/>
                </div><br/>
                

                <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
                </div>
            </div>           
        );
    }
}

export default SignUp;