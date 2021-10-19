import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container d-flex justify-content-center text-center">
                <div className="w-75 banner-text mx-auto">
                    <h1 className="text-white">Bringing The Future Of Healthcare</h1>
                    <p className="text-white">Deep created replenish herb without night fruit day earth evening Called his green were they're fruitful to over Sea bearing sixth Earth face. Them lesser great you'll second</p>
                    <Button className="mb-5" variant="info">Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;