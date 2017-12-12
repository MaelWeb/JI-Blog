import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.less';

document.addEventListener('DOMContentLoaded', ready, false);

document.addEventListener('touchmove', function(ev) {
    ev.preventDefault();
}, false);

function ready() {
    document.querySelector('.page-main').addEventListener('touchmove', function(ev) {
        ev.stopPropagation();
    }, false);
}

ReactDOM.hydrate((
    <BrowserRouter >
        <App InitData={window._SERVER_DATA} />
  </BrowserRouter>
    ), document.getElementById('app'))