import React, {Component} from 'react';
import {Icon, Input, Row} from "antd";
import {SearchPlaceHolderText} from "../../../Configs/Titles";
import './SearchOverlay.css';
import {posts} from "../../../Configs/config";
import {InlinePost} from "../../module";
import ScrollBar from "react-custom-scrollbar";

class SearchOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultFromSearch: [],
            inputSearchValue : ""
        };
    }

    onClickClear = ()=> {
        this.setState({resultFromSearch : posts,inputSearchValue : ""})
    };

    search = target => {
        this.setState({
            resultFromSearch : posts.filter(val => val.title.indexOf(target.currentTarget.value) >= 0),
            inputSearchValue : target.currentTarget.value
        })
    };

    render() {
        const {resultFromSearch, inputSearchValue} = this.state;
        return (
            <Row className="SearchOverlay">
                <div>
                    <Input
                        type="search"
                        placeholder={SearchPlaceHolderText}
                        className="input-search"
                        suffix={
                            <Icon type="cross" onClick={this.onClickClear} />
                        }
                        value={inputSearchValue}
                        onChange={this.search}
                    />
                </div>
                <div className="mt-3">
                    {
                        resultFromSearch &&
                        resultFromSearch.map(data => (
                            <InlinePost className="mt-3" data={data} />
                        ))
                    }
                </div>
            </Row>
        );
    }
}

export default SearchOverlay;