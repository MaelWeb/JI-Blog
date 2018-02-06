import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.less';

let isFirstRender = true;

if(process.env.NODE_ENV == 'development' && module.hot && !isFirstRender ) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        ReactDOM.hydrate((
            <BrowserRouter >
                <NewApp InitData={window._SERVER_DATA} />
          </BrowserRouter>
        ), document.getElementById('app'));
    });
} else {
    ReactDOM.hydrate((
        <BrowserRouter >
            <App InitData={window._SERVER_DATA} />
      </BrowserRouter>
    ), document.getElementById('app'));
    isFirstRender = false;
}