import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services_container container">
            <div className="services_top">
                <h1>Our <span>Services</span></h1>
                <p>Immerse yourself in real-world learning. Gain the skills <br /> to excel in the world of business.</p>
            </div>
            <div className="row g-4">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;