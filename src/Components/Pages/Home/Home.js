import React, {Component} from 'react';
import {Button, Carousel, Row} from "antd";
import Slide1 from '../../../Image/SliderSlide.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Row id="home">
                <Carousel autoplay className="home-page-carousel">
                    <div className="slider-item">
                        <div className="slider-content">
                            <h3>OLIOS</h3>
                            <p>NEWEST FURNITURE SHOP TEMPLATE</p>
                            <Button type="primary" htmlType="button" shape="round">View More</Button>
                        </div>
                        <figure className="slider-image">
                            <img className="w-100" src={Slide1} alt="slide1" />
                        </figure>
                    </div>
                    <div className="slider-item">
                        <div className="slider-content">
                            <h3>OLIOS</h3>
                            <p>NEWEST FURNITURE SHOP TEMPLATE</p>
                            <Button type="primary" htmlType="button" shape="round">View More</Button>
                        </div>
                        <figure className="slider-image">
                            <img className="w-100" src={Slide1} alt="slide2" />
                        </figure>
                    </div>
                </Carousel>
            </Row>
        );
    }
}

export default Home;