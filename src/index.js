import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from './layout';
  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Layout/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);  

