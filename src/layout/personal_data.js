import React from 'react';


class PersonalData extends React.Component{
  render(){
    return (
        <React.Fragment>{
            localStorage.getItem("userToken")?
            <div>
                <h2>PersonalData</h2>
            </div>
            :
            this.props.history.push('/user_action')
        }</React.Fragment>
    );
  };
};
export default PersonalData;
