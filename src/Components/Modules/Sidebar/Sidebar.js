import React, {Component} from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import './Sidebar.css';
import './Menu.css';
import './Logo.css';

class Sidebar extends Component {
    render() {
        const {className = "", ...Props} = this.props;
        return (
            <div id="sidebar" className={"d-flex align-items-center flex-lg-column bg-white box-shadow-light " + className} {...Props}>
                <Logo />
                <Menu />
            </div>
        );
    }
}

export default Sidebar;