import React, {useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import {useParams, withRouter} from 'react-router-dom';
import {CategoryTitleBar, SingleColumnPost, SendHeart} from '../../module';
import {categories, getLastPartLink, posts, priceProcessor} from "../../../Configs/config";
import {ProductTitle, RecommendedTitle, CostText, QuantityText, AddToCartButtonText} from "../../../Configs/Titles";
import {connect} from "react-redux";
import './Single.css';
import {AddToCart} from "../../../redux/action/action";
import {setCookie} from "../../../global/functions";
import ReactImageMagnify from "react-image-magnify";

function Single(props) {
    const [quantity, setQuantity] = useState(1);
    function addToCart(productId) {
        const previousValue = props.Cart.filter(val => val.productId === productId)[0];
        let newValue;
        if(previousValue)
        {
            previousValue.quantity += quantity;
            newValue = props.Cart.filter(val => val.productId !== productId).concat([previousValue]);
        }
        else{
            newValue = props.Cart.concat([{productId : productId, quantity : quantity}]);
        }
        props.dispatch(AddToCart(newValue));
        setCookie("cart", JSON.stringify(newValue), 10)
    }

    function quantityChange(input) {
        setQuantity(parseInt(input.target.value));
    }

    const params = useParams();
    const currentPost = posts.filter(val => val.slug === params.slug)[0];
    const postCategory = categories.filter(val => getLastPartLink(val.link).toLowerCase() === currentPost.category.toLowerCase())[0];
    const recommendedPosts = posts.filter(val => val.category === currentPost.category && val.id !== currentPost.id).slice(0,3);
    return (
        <Row className="h-100">
            <Col span={24} lg={9} className="bg-white h-100 box-shadow-light" style={{zIndex : "1"}}>
                <div className="send-heart-box w-100 d-flex justify-content-end position-absolute" style={{top : 0}}>
                    <SendHeart className="p-5" post_id={currentPost.id} heartCount={58} />
                </div>
                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                    <ReactImageMagnify className="w-100" {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: currentPost.image
                        },
                        largeImage: {
                            src: currentPost.image,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <div className="w-100 position-absolute" style={{height : "8rem", bottom: 0}}>

                </div>
            </Col>
            <Col span={24} lg={15} className="h-100">
                <div className="p-lg-5 pr-md-6 pr-lg-7 h-70 w-100">
                    <CategoryTitleBar data={postCategory} title={ProductTitle} />
                    <div className="d-flex flex-column justify-content-center align-items-start h-100">
                        <div className="d-flex align-items-center justify-content-center font-lato">
                            <h2 className="m-0 text-blue font-bold font-x2">{currentPost.title.toUpperCase()}</h2>
                        </div>
                        <p className="text-secondary mt-3">{currentPost.content}</p>
                        <div className="d-flex justify-content-between w-50">
                            <div className="d-flex flex-column">
                                <span className="cost-text">{CostText.toUpperCase()}</span>
                                <div dangerouslySetInnerHTML={{__html : priceProcessor(currentPost.price)}}/>
                            </div>
                            <div className="d-flex align-items-end w-50">
                                <div className="d-flex flex-column mx-5">
                                    <span className="quantity-text mb-2">{QuantityText.toUpperCase()}</span>
                                    <Input type="number" className="ant-btn-round" defaultValue={1} onChange={quantityChange} />
                                </div>
                                <Button htmlType="button" shape="round" onClick={()=> addToCart(currentPost.id)} type="primary">
                                    {AddToCartButtonText.toUpperCase()}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-30 bg-white d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center h-100" style={{width : "6rem"}}>
                        <p className="recommended-text font-bold font-lato m-0">{RecommendedTitle.toUpperCase()}</p>
                    </div>
                    <div className="d-flex align-items-center w-100 h-100">
                        {
                            recommendedPosts.map(data => (
                                <SingleColumnPost key={data.id} className="single-page" data={data} />
                            ))
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const mapState = states => (
    {
        Cart : states.Cart
    }
);
export default withRouter(connect(mapState)(Single));