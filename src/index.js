import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {direction} from './Configs/config';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./redux/reducer/reducer";
import 'antd/dist/antd.css';
import './Css/bootstrap.custom.min.css';
import './Css/style.css';

const html = document.querySelector("html");
const body = document.querySelector("body");

class Index extends Component {
    componentDidMount() {
        html.setAttribute('dir', direction);
        body.style.direction = direction;
    }

    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                < App />
            </Provider>
        );
    }
}

ReactDOM.render(<Index/>, body.querySelector('#mainContainer'));