import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from "antd";

class SendHeart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heartCount: props.heartCount ? props.heartCount : null,
            heartSent : false
        };
    }

    static propTypes = {
        post_id : PropTypes.number.isRequired,
        heartCount : PropTypes.number,
        className : PropTypes.string
    };

    sendHeart = post_id => {
        let {heartCount, heartSent} = this.state;
        if(!heartSent){
            heartCount++;
        }
        this.setState({heartSent : true, heartCount})
    };

    render() {
        let {heartCount, heartSent} = this.state;
        let {className = ""} = this.props;
        const {post_id} = this.props;
        heartCount = heartCount === null ? "-" : heartCount;
        className = className !== "" ? " " + className : className;
        return (
            <div className={"d-flex align-items-center" + className} style={{zoom : 1.5}}>
                <p className="mx-2 mb-1" style={{mixBlendMode: "difference", color: "#fff"}}>{heartCount}</p>
                <Icon onClick={()=> this.sendHeart(post_id)} type="heart" theme={heartSent ? "filled" : ""} style={{cursor : "pointer", color : "#ff547c"}} />
            </div>
        );
    }
}

export default SendHeart;