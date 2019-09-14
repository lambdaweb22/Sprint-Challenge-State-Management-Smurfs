import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

//devtools for redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store holds state
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
