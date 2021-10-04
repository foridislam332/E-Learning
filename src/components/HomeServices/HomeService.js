import React from 'react';
import { Button, Card } from 'react-bootstrap';

const HomeService = (props) => {
    const { name, price, description, img } = props.service;
    return (
        <div className="col-md-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="card_bottom">
                        <h2>${price}</h2>
                        <Button variant="danger">Read More</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeService;