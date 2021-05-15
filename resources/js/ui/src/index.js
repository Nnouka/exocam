import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'animate.css';
import {PORTAL_AUTH} from "./api/uvw";
import {BASE_URL} from "./api/ApiUrls";
import {wings} from "./lib/wings";
import {Provider} from "react-redux";
import reducers from './features/reducers';
import middleware from './features/middleware';
import {createStore} from "redux";
import {getLaravelSessionValue, getXSRFToken} from "./persistence";
import './index.css';
const addBaseAuth = function({url, options}) {
    let authHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-API-TOKEN': PORTAL_AUTH,
        'X-SESSION': getLaravelSessionValue(),
        'X-XSRF': getXSRFToken()
    }
    let base = BASE_URL;
    if (strIncludes(url, ['http://', 'https://', base])) {
        return url;
    }
    // if base ends with '/' remove it
    if (base.endsWith('/')) {
        base = base.substr(0, base.length - 1);
    }
    // if url does not start with '/' add it
    if (!url.startsWith('/')) {
        url = `/${url}`;
    }
    return {url: `${base}${url}`, options: {...options,
            headers: options.headers === undefined ?
                authHeaders : {...options.headers, ...authHeaders}}}
}
const strIncludes = function (str = "", arr) {
    if (!Array.isArray(arr)) return str.includes(arr);
    else {
        for (let item of arr) {
            if (str.includes(item)) return true;
        }
    }
    return false;
}
const handleServerException = function (error) {
    console.log("registered error", error);
    /*if (error.exception) {
        window.open(window.location, '_self');
    }*/
    return error;
}
wings.registry.preHandlers.add(addBaseAuth);
wings.registry.errorHandlers.add(handleServerException)
if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={createStore(reducers, middleware)}>
            <App />
        </Provider>
        , document.getElementById('root'));
}
