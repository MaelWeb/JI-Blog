import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BasePage from 'Components/BasePage';
import Login from '../Login';
import Home from '../Home';
import './index.less';

const App = (props) => (
    <BasePage>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/registe" component={Login}/>
    </BasePage>
)


export default App;