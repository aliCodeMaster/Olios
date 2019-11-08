import React, { Component } from 'react';

export default class CustomImage extends Component {
    state = {
        image: null,
        loading: false,
    };

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.text())
            .then(text =>
                this.setState({
                    image:text
                })
            )
    }

    componentWillReceiveProps(nextProps, nextContext) {
        fetch(nextProps.url)
            .then(res => res.text())
            .then(text =>
                this.setState({
                    image:text
                })
            )
    }

    render() {
        const { loading, image} = this.state;
        const {url,...restProps}= this.props;

        if (loading) {
            return <div className="spinner" />;
        } else if (!image) {
            return <div className="error" />
        }
        if (image.indexOf('svg') > 0){

            return <div className="svg-reader" dangerouslySetInnerHTML={{ __html: this.state.image }} {...restProps} />;

        }else {
            return <img src={url} {...restProps}  />;
        }
    }
}