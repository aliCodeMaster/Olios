import React from 'react';
import {Col, Row} from "antd";
import {categories, posts, getLastPartLink} from "../../../Configs/config";
import {useLocation} from 'react-router-dom';
import {CategoryTitleBar, DoubleColumnPost, SingleColumnPost} from "../../module";
import AllItems from '../../../assets/Image/Svg/All.svg'
import './Category.css';

function Category() {
    const location = getLastPartLink(useLocation().pathname);
    let currentCategory = categories.filter(value => getLastPartLink(value.link) === location)[0];
    currentCategory =
        currentCategory === undefined ?
            {
                id : 1,
                name : "All Categories",
                image : AllItems,
                link : "/Category/"
            }
            :
            currentCategory;
    const sizes = [6, 18, 6, 12, 6];
    console.log(currentCategory);
    return (
        <Row id="category-page" type="flex" justify="center" align="middle">
            <Col span={24} lg={16}>
                <CategoryTitleBar data={currentCategory} />
                <Row type="flex" gutter={24} className="flex-wrap">
                    {
                        posts.map((data, i) => (
                            <Col key={data.id} className="post-category" span={24} lg={sizes[i]}>
                                {
                                    sizes[i] / 6 > 1 ?
                                        <DoubleColumnPost data={data} />
                                        :
                                        <SingleColumnPost data={data} />
                                }

                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default Category;