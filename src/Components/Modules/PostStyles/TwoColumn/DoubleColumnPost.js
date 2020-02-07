import React, {Component} from 'react';
import {ProductPage} from "../../../../Configs/links";
import {Col} from "antd";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {priceProcessor} from "../../../../Configs/config";

class DoubleColumnPost extends Component {
    static propTypes = {
        data : PropTypes.isRequired
    };

    render() {
        const {data} = this.props;
        return (
            <Link to={ProductPage + "/" + data.slug} className="post-wrapper bg-white">
                <Col className="post-image big" span={24} lg={12}>
                    <img src={data.image} alt={data.title} />
                </Col>
                <Col className="post-description" span={24} lg={12}>
                    <h4 className="font-lato font-bold">{data.title.toUpperCase()}</h4>
                    <p>{data.content}</p>
                    <div dangerouslySetInnerHTML={{__html : priceProcessor(data.price)}} />
                </Col>
            </Link>
        );
    }
}

export default DoubleColumnPost;