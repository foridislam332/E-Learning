import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeService from '../HomeServices/HomeService';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./singleServices.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <div className="home_container">
                <div className="overlay">
                    <div className="container">
                        <div className="home_content_box">
                            <div className="home_content">
                                <h1>Online Education <br /> Academy</h1>
                                <p>For every student,
                                    every classroom.
                                    Real results.</p>
                                <div className="btn_group">
                                    <Button className="btn_regular" variant="primary">Teacher</Button>
                                    <Button className="btn_regular" variant="light">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* home services area */}
            <div className="home_services_container container">
                <h1>Our <span>Services</span></h1>
                <div className="row g-4">
                    {
                        services.map(service => <HomeService
                            key={service.key}
                            service={service}
                        ></HomeService>)
                    }
                </div>
                <div className="home_btn text-center">
                    <NavLink to="/services">
                        <Button className="home_bottom_btn" variant="info">See More</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;