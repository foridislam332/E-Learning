import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_content_box">
                            <h1><span>E</span>-Learning</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloque laudantium totam rem aperiam, eaque ipsa quae.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_content_box">
                            <h1>About Learn</h1>
                            <nav className="footer_menu">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Apply</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_content_box">
                            <h1>Contact Us</h1>
                            <h2>+0034 0884989</h2>
                            <span className="date">Mon - Fri / 9.00AM - 06.00PM</span>
                            <h5>Questions? <small>questions@domain.com</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;