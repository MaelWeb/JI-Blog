import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.less';

ReactDOM.hydrate((
  <BrowserRouter >
    <App InitData={window._SERVER_DATA} />
  </BrowserRouter>
), document.getElementById('app'))