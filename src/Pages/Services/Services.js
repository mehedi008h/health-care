import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = ({ services }) => {
    const { id, name, img, description } = services;
    return (
        <div className="">
            <Card style={{ width: '22rem' }}>
                <Card.Img className="service-img" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/service-details/${id}`} className="btn btn-info">Check Out</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;