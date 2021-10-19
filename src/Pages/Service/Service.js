import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import Services from '../Services/Services';
import './Service.css';

const Service = () => {
    const { services } = useService();
    console.log(services);

    return (
        <div className="mt-5">
            <div className="container-fluid d-flex justify-content-center service-banner">
                <div className="service-info">
                    <h1>Our Service</h1>
                    <p>We provide best Services</p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row g-3">
                    {
                        services.map(service => <div className="col-md-4 d-flex justify-content-center">
                            <Services
                                key={service.id}
                                services={service}
                            ></Services>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;