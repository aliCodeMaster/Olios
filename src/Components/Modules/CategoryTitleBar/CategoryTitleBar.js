import React, {Component} from 'react';
import {CustomImage} from "../../module";
import {Row} from "antd";
import PropTypes from "prop-types";
import {CategoryTitle} from "../../../Configs/Titles";

class CategoryTitleBar extends Component {

    static propTypes = {
        data : PropTypes.isRequired,
        title : PropTypes.string,
        className : PropTypes.string
    };

    render() {
        const {data, title = CategoryTitle} = this.props;
        let {className = ""} = this.props;
        className = className !== "" ? " " + className : "";
        return (
            <Row type="flex" justify="space-between" align="middle" className={"flex-wrap" + className}>
                <div>
                    <h2 className="font-lato font-bold font-x2 m-0">{title.toUpperCase()}</h2>
                </div>
                <div
                    key={data.id}
                    className={"category-item d-flex flex-row-reverse align-items-center" +
                    " justify-content-center"}
                    style={{marginRight: "1.5rem"}}
                >
                    <CustomImage className="category-bar-item-picture ml-2" url={data.image}/>
                    <h3 className="m-0 font-lato font-bold">{data.name.toUpperCase()}</h3>
                </div>
            </Row>
        );
    }
}

export default CategoryTitleBar;