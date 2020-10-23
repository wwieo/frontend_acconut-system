import React from "react";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs'

import CustomTab from '../../style/tab_style'

import SignUp from './sign_up';
import Login from './login';

import '../../style/user_action.css';

  
class UserAction extends React.Component {
    render() {
        return (
            <React.Fragment>{
                localStorage.getItem("isLogin")?
                this.props.history.push('/')
                :
                <MDBContainer>
                    <MDBRow className="justify-content-md-center">
                        <MDBCol xs lg="3"/>
                            <MDBCol>
                                <div className ="user_action_form"> 
                                    <div className = "title"><a href = "/" >HaoHaoYung</ a><br/></div>
                                    <div className = "vice_title"><label>給你最極致的豪好體驗</label><br/></div>
                                    <Tabs activeTab='login'>
                                        <TabList>
                                            <Tab component={CustomTab} label='Login' id='login' />
                                            <Tab component={CustomTab} label='Sign up' id='sign_up' />
                                        </TabList>
                                        <TabList>
                                            <TabPanel component={Login} id='login' />
                                            <TabPanel component={SignUp} id='sign_up' />
                                        </TabList>
                                    </Tabs>
                                </div>
                            </MDBCol>
                        <MDBCol xs lg="3"/>
                    </MDBRow>
                </MDBContainer>
            }  
            </React.Fragment>
        );
    }
}

export default UserAction;