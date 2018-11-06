import "core-js/es6/map";
import "core-js/es6/set";
import "core-js/es6/promise";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.less";

let isFirstRender = true;

if (process.env.NODE_ENV === "development" && module.hot && !isFirstRender) {
    module.hot.accept("./App", () => {
        const NewApp = require("./App").default;
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
}
