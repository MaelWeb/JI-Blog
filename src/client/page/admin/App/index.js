import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import BasePage from './base.js';
import Login from '../Login';
import Home from '../Home';
import './index.less';

const App = props => (
<BasePage>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registe" component={Login}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BasePage>
)export default App;
