import React, {Component} from 'react';
import logo from '../../../../Image/LOGO.png';
import {Popover} from "antd";
import {direction, siteDescription, siteTitle} from "../../../../Configs/config";
import {HomePage} from "../../../../Configs/links";
import {Link} from "react-router-dom";

class Logo extends Component {
    render() {
        return (
            <Popover
                content={siteDescription}
                title={siteTitle}
                placement={direction === "ltr" ? "rightTop" : "leftTop"}
                overlayClassName="custom-tooltip"
            >
                <Link to={HomePage} className="Logo">
                    <img src={logo} alt="Logo" />
                </Link>
            </Popover>
        );
    }
}

export default Logo;