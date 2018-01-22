import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import BasePage from 'Components/BasePage';
import Bundle from 'Components/Bundle';
import loadLogin from 'bundle-loader?lazy&name=login!../Login';
import loadHome from 'bundle-loader?lazy&name=home!../Home';
import './index.less';

const Login = (props) => (
  <Bundle load={loadLogin}>
    {(Login) => <Login {...props}/>}
  </Bundle>
);

const Home = (props) => (
  <Bundle load={loadHome}>
    {(Home) => <Home {...props}/>}
  </Bundle>
);

const App = (props) => (
    <BasePage>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registe" component={Login}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BasePage>
)


export default App;