import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux";

// 公共样式
import "./assets/css/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/jquery-weui.css";
import "./assets/css/swiper.min.css";
import "./assets/css/theme-color.css";
import "./assets/css/weui.min.css";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
