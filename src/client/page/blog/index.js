import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import React from 'react';
import ReactDOM from 'react-dom';
import wpkReporter from 'wpk-reporter'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.less';

let isFirstRender = true;

if (process.env.NODE_ENV === 'development' && module.hot && !isFirstRender) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        ReactDOM.hydrate(
            <BrowserRouter>
                <NewApp InitData={window._SERVER_DATA} />
            </BrowserRouter>,
            document.getElementById('app'),
        );
    });
} else {
    ReactDOM.hydrate(
        <BrowserRouter>
            <App InitData={window._SERVER_DATA} />
        </BrowserRouter>,
        document.getElementById('app'),
    );
    isFirstRender = false;

    const __wpk = new wpkReporter({
        bid: 'ji-blog-niivg1a5', // 新建应用时确定
        spa: true, // 单页应用开启后，可更准确地采集PV
        plugins: []
    });
    __wpk.installAll(); // 初始化sdk 必须调用
}