import React from "react";
import { MDBBtn } from 'mdbreact';

import '../style/user_action.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            status:{
                account: "",
                password: ""
            },
            error:{
                accountAlert: false,
                passwordAlert: false
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
            case 'account':
                if (fieldValue.length < 4)
                    status["accountAlert"] = true;
                else
                    status["accountAlert"] = false;
                this.setState({status:status});
                break;
            case 'password':
                if (fieldValue.length < 6)
                    status["passwordAlert"] = true;
                else
                    status["passwordAlert"] = false;
                this.setState({status:status});
                break;
            default :
                break;

        }
    } 
    render() {
        return (
            <div>
                <br/>
                <div className="form-group">
                    <label>Username or email</label>
                    <label className="alert">{this.state.accountAlert? 
                                              "* Length should be more than 3":""}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.account} name="account"
                           className="form-control" placeholder="Enter user name or email"  
                           style={{borderColor:this.state.accountAlert?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <label className="alert">{this.state.passwordAlert? 
                                              "* Length should be more than 5":""}</label>
                    <input type="password" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.password} name="password"
                           className="form-control" placeholder="Enter password"  
                           style={{borderColor:this.state.passwordAlert?"red":""}}/>
                </div><br/>

                <div className="text-center">
                <MDBBtn color="primary">Login</MDBBtn>
                </div>
            </div>
        );
    }
}

export default Login;