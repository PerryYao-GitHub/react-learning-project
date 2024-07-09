import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from "./components/app";
import {BrowserRouter} from "react-router-dom";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const f1 = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + action.val;
        case 'sub':
            return state - action.val;
        default:
            return state;
    }
}

const f2 = (state = "", action) => {
    switch (action.type) {
        case 'concat':
            return state + action.str;
        default:
            return state;
    }
}

// const f12 = (state = {f1: 0, f2:""}, action) => {
//     return {
//         "f1": f1(state.f1, action),
//         "f2": f2(state.f2, action),
//     }
// }
const f12 = combineReducers({
    number: f1,
    textline: f2,
})

const store = configureStore({
    reducer: f12
});

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({type: "add", val: 5})
// store.dispatch({type: 'sub', val: 3})
// store.dispatch({type: "contact", str: "soyo"})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);