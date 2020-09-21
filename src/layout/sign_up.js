import React from "react";
import { MDBBtn } from 'mdbreact';

import '../style/user_action.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            status:{
                userNameValue: "",
                fullNameValue: "",
                emailValue: "",
                passwordValue: "",
                cfPasswordValue: ""
            },
            alertText:{
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
            case 'userNameValue':
                if (fieldValue.length > 24 || fieldValue.length < 4)
                    status["userNameAlert"] = "* Length should be upper than 3 and lower than 25";
                else
                    status["userNameAlert"] = "";
                this.setState({status:status});
                break;
            case 'fullNameValue':
                if (fieldValue.length > 24 || fieldValue.length < 1)
                    status["fullNameAlert"] = "* Length should be upper than 0 and lower than 25";
                else
                    status["fullNameAlert"] = "";
                this.setState({status:status});
                break;
            case 'emailValue':

                this.setState({status:status});
                break;
            case 'passwordValue':
                if (fieldValue.length < 6)
                    status["passwordAlert"] = "* Length should be upper than 5";
                else
                    status["passwordAlert"] = "";
                this.setState({status:status});
                break;
            case 'cfPasswordValue':
                
                this.setState({status:status});    
                break;    
        }
    }   


    render() {
        return(
            <div>
                <br/>
                <div className="form-group">
                    <label>User Name</label>                    
                    <label className="alert">{this.state.userNameAlert}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.userNameValue} name="userNameValue"
                           className="form-control" placeholder="Enter user name" />
                </div><br/>

                <div className="form-group">
                    <label>Full Name</label>
                    <label className="alert">{this.state.fullNameAlert}</label>
                    <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.fullNameValue} name="fullNameValue"
                           className="form-control" placeholder="Enter full name" />
                </div><br/>

                <div className="form-group">
                    <label>Email address</label>
                    <label className="alert">{this.state.emailAlert}</label>
                    <input type="email"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.emailValue} name="emailValue"
                           className="form-control" placeholder="Enter email" />
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <label className="alert">{this.state.passwordAlert}</label>
                    <input type="password" onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.passwordValue} name="passwordValue"
                           className="form-control" placeholder="Enter password" />
                </div><br/>

                <div className="form-group">
                    <label>Password confirmed</label>
                    <label className="alert">{this.state.cfPasswordAlert}</label>
                    <input type="password"  onBlur={this.handleBlur} onChange={this.handleChange}
                           value={this.state.cfPasswordValue} name="cfPasswordValue"
                           className="form-control" placeholder="Enter password again" />
                </div><br/>
                

                <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
                </div>
            </div>           
        );
    }
}

export default SignUp;