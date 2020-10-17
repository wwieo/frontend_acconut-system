import React from "react";
import ReactLoading from 'react-loading';

import { MDBBtn } from 'mdbreact';

import { withRouter } from 'react-router';
import {login} from '../controller/api_check/login'
import {format_check} from '../controller/frontend_check/login';
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
                accountAlert: null,
                passwordAlert: null
            },
            backendError: null,
            isLoading: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleChange(e){
        const fieldName = e.target.name;
        const fieldValue = e.target.value;  

        const nowStatus = {
            ...this.state.status,
            [fieldName]: fieldValue
        }
        this.setState({status: nowStatus});
    }
    handleBlur(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 

        const nowError = {
            ...this.state.error,
            [fieldName+"Alert"]: format_check(fieldName, fieldValue)
        }
        this.setState({error: nowError});
    } 
    handleClick(e){
        if(e.target.name === "account"){
            if(localStorage.getItem["reg_user_name"] !== null)
                localStorage.removeItem("reg_user_name");
        }
        else{
            this.login();
        }
    }
    handleKeyDown(e){
        if(e.key === 'Enter'){
            this.login();
        }
    }
    login = async()=>{
        let error = {};
        await Object.keys(this.state.status).forEach(stateKey=>{
            let stateValue = this.state.status[stateKey];
            error[stateKey+"Alert"] = format_check(stateKey, stateValue);
        });
        this.setState({error: error});

        let check = true;
        await Object.values(this.state.error).forEach(checkData=>{
            checkData !== "" && (check = false)
        });

        //send login request
        if (check){
            this.setState({isLoading: true});
            login(this.state.status)
            .then(
                result => {
                    this.setState({isLoading: false});
                    if(result.data.success === 1){
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('user_name', result.data.user_name);
                        localStorage.setItem('email', result.data.email);
                        localStorage.setItem('name', result.data.name);
                        localStorage.setItem('userToken', result.data.token);
                        this.setState({backendError: null});
                        this.props.history.push('/'); //redirect to homepage
                    }
                    else{
                        this.setState({backendError: "Account or password is wrong maybe."});
                    }
                }
            )
        }
    }
    render() {
        const nowState = this.state.status;
        const nowError = this.state.error;
        const nowBackendError = this.state.backendError;
        const isLoading = this.state.isLoading;
        return (
            <div>
                <br/>
                <div className="form-group">
                    <label>Username or email</label>
                    <label className="reg_success">{localStorage["reg_user_name"]? "* Register success." : null}</label>
                    <label className="alert">{nowError["accountAlert"]}</label>
                    <input type="text" onKeyPress={this.handleKeyDown}
                           onBlur={this.handleBlur} onChange={this.handleChange}
                           value={localStorage["reg_user_name"]?localStorage["reg_user_name"]:nowState["account"]} onClick={this.handleClick} 
                           name="account" className="form-control" placeholder="Enter user name or email"  
                           style={{borderColor:nowError["accountAlert"]?"red":""}}/>
                </div><br/>

                <div className="form-group">
                    <label>Password</label>
                    <label className="alert">{nowError["passwordAlert"]}</label>
                    <input type="password" onKeyPress={this.handleKeyDown}
                           onBlur={this.handleBlur} onChange={this.handleChange}
                           value={nowState["password"]} name="password"
                           className="form-control" placeholder="Enter password"  
                           style={{borderColor:nowError["passwordAlert"]?"red":""}}/>
                </div><br/>

                <div className="text-center">
                    <MDBBtn color="primary" onClick={this.handleClick}>Login</MDBBtn>
                    {isLoading? <ReactLoading className="loadingAnime" type={'cylon'}/>:null}
                    {nowBackendError? <p/>: null}
                    <label className="backendAlert">{nowBackendError}</label>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);