import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about_container">
            <div className="container-fluid">
                <div className="about_top">
                    <h1>About <span>Us</span></h1>
                </div>
                <div className="learners_feedback">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image">
                                <img src="https://santhemes.com/tidytheme/aducat/images/feedback.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content">
                                <h1>Our Learners Feedback</h1>
                                <p> It's Had been a fear most experience me that I feel a great
                                    assumption that never thoughts that will happens to But
                                    great provocatives things appropities received without
                                    realmost qualifier that happen that never thoughts that will happens to a fear most
                                    experience. </p>
                                <h4>David Benjamin</h4>
                                <h5>Washington, United States</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;