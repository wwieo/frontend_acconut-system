import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import NavComponent from './navbar'
import Home from './home'
import UserAction from './user_action'


class Layout extends React.Component{
    render(){
        return (
            <div>
                {this.props.location.pathname !== '/user_action' && <NavComponent />}
                <Route exact path="/" component={Home} />
                <Route exact path="/user_action" component={UserAction} />
            </div>
        );
    }
}

export default withRouter(Layout);
    