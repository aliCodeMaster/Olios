import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from "antd";
import {Link} from "react-router-dom";
import {ProductPage} from "../../../../Configs/links";

class InlinePost extends Component {
    static propTypes = {
        data : PropTypes.isRequired
    };

    render() {
        const {data} = this.props;
        return (
            <Col span={24} lg={12}>
                <Link to={ProductPage + "/" + data.slug} className="d-flex align-items-center">
                    <figure className="image-box mx-3">
                        <img src={data.image} alt={data.title} />
                    </figure>
                    <h3 className="font-x3 font-lato font-bold">{data.title.toUpperCase()}</h3>
                </Link>
            </Col>
        );
    }
}

export default InlinePost;