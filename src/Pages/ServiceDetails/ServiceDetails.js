import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    let { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    console.log(serviceDetails);
    console.log(singleService);

    useEffect(() => {
        fetch("/serviceDetails.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data.service));
    }, []);

    useEffect(() => {
        const foundService = serviceDetails.find(
            (service) => service.id == serviceId
        );
        setSingleService(foundService);
    }, [serviceDetails]);
    return (
        <div className="mt-5">
            <div className="container details">
                <Card className="w-75 mx-auto mb-5">
                    <Card.Img className="details-img" variant="top" src={singleService?.img} />
                    <Card.Body>
                        <Card.Title>{singleService?.name}</Card.Title>
                        <Card.Text>
                            {singleService?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ServiceDetails;