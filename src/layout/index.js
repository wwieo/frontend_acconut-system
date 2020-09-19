import React from 'react';
import {Switch , Route} from 'react-router-dom';

import NavComponent from './navbar'
import Home from './home'
import UserAction from './user_action'


class Layout extends React.Component{
    render(){
        return (
            <div>
                <NavComponent/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user_action" component={UserAction} />
                </Switch>
            </div>
        );
    }
}

export default Layout;
    