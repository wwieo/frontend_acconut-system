import React from "react";
import { MDBBtn } from 'mdbreact';

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
                userNameAlert: false,
                fullNameAlert: false,
                emailAlert: false,
                passwordAlert: false,
                cfPasswordAlert: false
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        let status = this.state;
        const fieldName = e.target.name;
        const fieldValue = e.target.value;  

        status[fieldName] = fieldValue;
        this.setState({status:status});
    }
    handleBlur(e) {
        let status = this.state;
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 
        switch(fieldName){
            case 'userName':
                if (fieldValue.length > 24 || fieldValue.length < 4)
                    status["userNameAlert"] = true;
                else
                    status["userNameAlert"] = false;
                this.setState({status:status});
                break;
            case 'fullName':
                if (fieldValue.length > 24 || fieldValue.length < 1)
                    status["fullNameAlert"] = true; 
                else
                    status["fullNameAlert"] = false;
                this.setState({status:status});
                break;
            case 'email':
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValue))
                    status["emailAlert"] = false;
                else
                    status["emailAlert"] = true; 
                this.setState({status:status});
                break;
            case 'password':
                if (fieldValue.length < 6)
                    status["passwordAlert"] = true;
                else
                    status["passwordAlert"] = false;
                this.setState({status:status});
                break;
            case 'cfPassword':
                if (fieldValue !== status["passwordValue"])
                    status["cfPasswordAlert"] = true;
                else
                    status["cfPasswordAlert"] = false;
                this.setState({status:status});  
                break;
            default :
                break;

        }
    }   


    render() {
        return(
            <div>
                <br/>
                <div className="form-group">
                    <label>User Name</label>                    
                    <label className="alert">{this.state.userNameAlert? 
                                              "* Length should be upper than 3 and lower than 25":""}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.userName} name="userName"
                           className="form-control" placeholder="Enter user name" 
                           style={{borderColor:this.state.userNameAlert?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Full Name</label>
                    <label className="alert">{this.state.fullNameAlert?
                                              "* Length should be upper than 0 and lower than 25":""}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.fullName} name="fullName"
                           className="form-control" placeholder="Enter full name" 
                           style={{borderColor:this.state.fullNameAlert?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Email address</label>
                    <label className="alert">{this.state.emailAlert?
                                              "* Email pattern is not correct":""}</label>
                    <input type="email"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.email} name="email"
                           className="form-control" placeholder="Enter email"  
                           style={{borderColor:this.state.emailAlert?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <label className="alert">{this.state.passwordAlert?
                                              "* Length should be upper than 5":""}</label>
                    <input type="password" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.password} name="password"
                           className="form-control" placeholder="Enter password" 
                           style={{borderColor:this.state.passwordAlert?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password confirmed</label>
                    <label className="alert">{this.state.cfPasswordAlert?
                                              "* Not the same password":""}</label>
                    <input type="password"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.cfPassword} name="cfPassword"
                           className="form-control" placeholder="Enter password again" 
                           style={{borderColor:this.state.cfPasswordAlert?"red":""}}/>
                </div><br/>
                

                <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
                </div>
            </div>           
        );
    }
}

export default SignUp;