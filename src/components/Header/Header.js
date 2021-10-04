import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="brand" to="/home">
                        <Navbar.Brand className="logo"><span>E</span>-Learning</Navbar.Brand>
                    </NavLink>
                    <Nav className="ms-auto">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/about">About</NavLink>
                        <NavLink className="link" to="/services">Services</NavLink>
                        <NavLink className="link" to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;