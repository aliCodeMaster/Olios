import React, {Component} from 'react';
import {ProductPage} from "../../../../Configs/links";
import {Link} from "react-router-dom";
import {priceProcessor} from "../../../../Configs/config";
import PropTypes from "prop-types";

class SingleColumnPost extends Component {
    static propTypes = {
        data : PropTypes.object.isRequired,
        className : PropTypes.string
    };

    render() {
        const {data} = this.props;
        let {className = ""} = this.props;
        className = className !== "" ? " " + className : className;
        return (
            <Link to={ProductPage + "/" + data.slug} className={"post-wrapper bg-white d-flex flex-column align-items-center justify-content-center" + className}>
                <figure className="post-image small">
                    <img src={data.image} alt={data.title} />
                </figure>
                <div className="post-description">
                    <h4 className="font-lato font-bold">{data.title.toUpperCase()}</h4>
                    <p>{data.content}</p>
                    <div dangerouslySetInnerHTML={{__html : priceProcessor(data.price)}} />
                </div>
            </Link>
        );
    }
}

export default SingleColumnPost;