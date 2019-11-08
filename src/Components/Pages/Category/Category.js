import React from 'react';
import {Col, Row} from "antd";
import {CategoryTitle} from "../../../Configs/Titles";
import {CustomImage} from "../../module";
import {categories} from "../../../Configs/config";
import {Link, useLocation} from 'react-router-dom';
import './Category.css';
import RedSeat from '../../../Image/RedSeat.png';
import WhiteTable from '../../../Image/WhiteTable.png';
import BlueSeat from '../../../Image/BlueSeat.png';
import ModernBed from '../../../Image/ModernBed.png';
import DarkSeat from '../../../Image/DarkSeat.png';
import {CategoryPage} from "../../../Configs/links";

function Category() {
    function processingLink(link) {
        return link.split("/").slice(-1)[0];
    }
    const location = processingLink(useLocation().pathname);
    const currentCategory = categories.filter(value => processingLink(value.link) === location);
    const sizes = [6, 18, 6, 12, 6];
    const posts = [
        {
            id : 1,
            title : "red seat",
            excerpt : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$45",
            image : RedSeat,
            link : CategoryPage + "/red-seat"
        },
        {
            id : 2,
            title : "white table",
            excerpt : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$350",
            image : WhiteTable,
            link : CategoryPage + "/white-table"
        },
        {
            id : 3,
            title : "blue seat",
            excerpt : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$35",
            image : BlueSeat,
            link : CategoryPage + "/blue-seat"
        },
        {
            id : 4,
            title : "modern bed",
            excerpt : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$120   ",
            image : ModernBed,
            link : CategoryPage + "/modern-bed"
        },
        {
            id : 5,
            title : "dark seat",
            excerpt : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$50",
            image : DarkSeat,
            link : CategoryPage + "/dark-seat"
        }
    ];
    return (
        <Row id="category-page" type="flex" justify="center" align="middle">
            <Col span={24} lg={16}>
                <Row type="flex" justify="space-between" align="middle" className="flex-wrap">
                    <div>
                        <h2 className="font-lato font-bold font-x2 m-0">{CategoryTitle.toUpperCase()}</h2>
                    </div>
                        {
                            currentCategory.map(data => (
                                <div
                                    className={"category-item d-flex flex-row-reverse align-items-center" +
                                    " justify-content-center"}
                                    style={{marginRight: "1.5rem"}}
                                >
                                    <CustomImage className="category-bar-item-picture ml-2" url={data.image}/>
                                    <h3 className="m-0 font-lato font-bold">{data.name.toUpperCase()}</h3>
                                </div>
                            ))
                        }
                </Row>
                <Row type="flex" gutter={24} className="flex-wrap">
                    {
                        posts.map((data, i) => (
                            <Col key={data.id} className="post-category" span={24} lg={sizes[i]}>
                                {
                                    sizes[i] / 6 > 1 ?
                                        <Link to={data.link} className="post-wrapper bg-white">
                                            <Col className="post-image big" span={24} lg={12}>
                                                <img src={data.image} alt={data.title} />
                                            </Col>
                                            <Col className="post-description" span={24} lg={12}>
                                                <h4 className="font-lato font-bold">{data.title.toUpperCase()}</h4>
                                                <p>{data.excerpt}</p>
                                                <span>{data.price}</span>
                                            </Col>
                                        </Link>
                                        :
                                        <Link to={data.link} className="post-wrapper bg-white d-flex flex-column align-items-center justify-content-center">
                                            <figure className="post-image small">
                                                <img src={data.image} alt={data.title} />
                                            </figure>
                                            <div className="post-description">
                                                <h4 className="font-lato font-bold">{data.title.toUpperCase()}</h4>
                                                <p>{data.excerpt}</p>
                                                <span>{data.price}</span>
                                            </div>
                                        </Link>
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