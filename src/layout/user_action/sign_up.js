import React from "react";

import ReactLoading from 'react-loading';
import { MDBBtn } from 'mdbreact';

import {format_check} from '../../controller/frontend_check/user_action/sign_up';
import {checkExistByUserName, checkExistByEmail, register} from '../../controller/api_check/user_action/sign_up'

import '../../style/user_action.css';

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
                userNameAlert: null,
                fullNameAlert: null,
                emailAlert: null,
                passwordAlert: null,
                cfPasswordAlert: null
            },     
            backendError: null,
            isLoading: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        const fieldName = e.target.name;
        const fieldValue = e.target.value;  
        const nowStatus = {
            ...this.state.status,
            [fieldName]: fieldValue
        }
        this.setState({status: nowStatus});

        if(fieldName === "userName")
            this.ifDataExist(fieldName, fieldValue);
        if(fieldName === "cfPassword"){
            const nowError = {
                ...this.state.error,
                [fieldName+"Alert"]: format_check(this.state, fieldName, fieldValue)
            }
            this.setState({error: nowError});
        }
    }
    handleBlur(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 
        if(fieldName === "email" || fieldName === "userName")
            this.ifDataExist(fieldName, fieldValue);
        const nowError = {
            ...this.state.error,
            [fieldName+"Alert"]: format_check(this.state, fieldName, fieldValue)
        }
        this.setState({error: nowError});
    }   
    ifDataExist = async(fieldName, fieldValue)=>{
        let alertText = "";
        if (fieldName === "userName"){
            if (fieldValue.length < 25 && fieldValue.length > 3){
                const result = await checkExistByUserName(fieldValue);
                if (result.data.results === true)
                    alertText = "* Someone has registered this user name.";
            }
        };
        if (fieldName === "email"){
            const result = await checkExistByEmail(fieldValue);
            if (result.data.results === true)
                alertText = "* Someone has registered this email.";
            else
                alertText = this.state.error.emailAlert;
        };
        const nowError = {
            ...this.state.error,
            [fieldName+"Alert"]: alertText
        }
        this.setState({error: nowError});
    }
    handleClick(){
        // check all fields' format
        let error = {};
        Object.keys(this.state.status).forEach(stateKey=>{
            let stateValue = this.state.status[stateKey];
            error[stateKey+"Alert"] = format_check(this.state, stateKey, stateValue);
            if(stateKey === "email" || stateKey === "userName")
                this.ifDataExist(stateKey, stateValue);
        });
        this.setState({error: error});

        //final check
        let check = true;
        Object.values(this.state.error).forEach(checkData=>{
            checkData !== "" && (check = false)
        });

        //send signUp request
        if (check){
            this.setState({isLoading: true});
            this.signUp();
        }
    }
    signUp = async() => {
        register(this.state.status)
        .then(
            result=>{
                if(result.data.success === 1){
                    localStorage.setItem('reg_user_name', result.data.results.user_name)
                    this.setState({backendError: null});
                    window.location.reload()
                }
                else{
                    this.setState({backendError: "Something got error"});
                }
                this.setState({isLoading: false});
            }
        )
    }
    render() {
        const nowState = this.state.status;
        const nowError = this.state.error;
        const nowBackendError = this.state.backendError;
        const isLoading = this.state.isLoading;

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
                    <MDBBtn color="primary" onClick={this.handleClick}>Register</MDBBtn>
                    {isLoading? <ReactLoading className="loadingAnime" type={'cylon'}/>: null}
                    {nowBackendError? <p/>: null}
                    <label className="backendAlert">{nowBackendError}</label>
                </div>
            </div>           
        );
    }
}

export default SignUp;