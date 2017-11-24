import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Articles from '../Articles';
import './index.less';

const App = (props) => (
    <BasePage>
        <Switch>
            <Route path="/" component={Articles} />
        </Switch>
    </BasePage>
)


export default App;