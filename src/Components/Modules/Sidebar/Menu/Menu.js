import React, {Component} from 'react';
import MenuElements from "./MenuElements/MenuElements";
import {CartPage, HomePage, LoginPage} from "../../../../Configs/links";
import {direction} from "../../../../Configs/config";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Menu extends Component {
    render() {
        const menuItems = [
            {
                name : "Home",
                align : "top",
                link : HomePage,
                icon : "home"
            },
            {
                name : "Cart",
                align : "top",
                link : CartPage,
                icon : "shopping-cart",
                badgeNumber : this.props.Cart.length
            },
            {
                name : "Search",
                align : "top",
                link : "#Search",
                icon : "search"
            },
            {
                name : "Login",
                align : "bottom",
                link : LoginPage,
                icon : "login"
            }
        ];
        const {className = "", ...rest} = this.props;
        return (
            <>
                <div className={"Menu " + direction + " " + className} {...rest}>
                    {
                        menuItems.filter(value => value.align === "top").map((data, i) => (
                            <MenuElements key={i} data={data} />
                        ))
                    }
                </div>

                <div className={"Menu " + direction + " " + className} {...rest}>
                    {
                        menuItems.filter(value => value.align === "bottom").map((data, i) => (
                            <MenuElements key={i} data={data} />
                        ))
                    }
                </div>
            </>
        );
    }
}

const mapState = states => (
    {
        Cart : states.Cart
    }
);
export default withRouter(connect(mapState)(Menu));