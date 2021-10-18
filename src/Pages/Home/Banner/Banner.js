import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel className="carousel">
                <Carousel.Item className="carousel-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="w-75 banner-text">
                                    <h1 className="text-white">Bringing The Future Of Healthcare</h1>
                                    <p>Deep created replenish herb without night fruit day earth evening Called his green were they're fruitful to over Sea bearing sixth Earth face. Them lesser great you'll second</p>
                                    <Button variant="warning">Warning</Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="banner-img" src={banner1} alt="" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Hello</h1>
                            </div>
                            <div className="col-md-6">
                                <h1>Hdcjdslj</h1>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Hello</h1>
                            </div>
                            <div className="col-md-6">
                                <h1>Hdcjdslj</h1>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;