import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {direction} from './Configs/config';
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
        return (
            < App />
        );
    }
}

ReactDOM.render(<Index/>, body.querySelector('#mainContainer'));