import React, { useEffect, useState } from 'react';
import Services from '../../Services/Services';

const Service = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('./service.json')
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);
    let programs = services.slice(3);
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h3 className="text-center fw-bold text-success">Our Service</h3>
                <div className="row g-3 mt-3">
                    {
                        programs.map(service => <div className="col-md-4 d-flex justify-content-center">
                            <Services
                                key={service.id}
                                services={service}
                            >
                            </Services>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;