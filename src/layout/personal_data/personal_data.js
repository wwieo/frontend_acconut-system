import React from 'react';

import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
// import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs'
import '../../style/personal_data.css'

import personal_img from '../../images/unknown_person.jpg'

class PersonalData extends React.Component{
  render(){
    return (
        <React.Fragment>{
            localStorage.getItem("userToken")?
            <div>
                <MDBContainer>
                    <MDBRow className="justify-content-md-center">
                        <MDBCol xs lg="2"/>
                            <MDBCol>
                                <div className ="personal_data_form"> 
                                    <img className= "personal_img" src= {personal_img} alt = "personal_img"/><p/>
                                    <h3 className= "name_display">{localStorage.getItem("name")}<hr Color="white"/></h3>
                                    {/* <Tabs >
                                      <TabList>
                                        <Tab></Tab>
                                        <Tab></Tab>
                                      </TabList>
                                      <TabPanel></TabPanel>
                                      <TabPanel></TabPanel>
                                    </Tabs> */}
                                </div>
                            </MDBCol>
                        <MDBCol xs lg="2"/>
                    </MDBRow>
                </MDBContainer>
            </div>
            :
            this.props.history.push('/user_action')
        }</React.Fragment>
    );
  };
};
export default PersonalData;
