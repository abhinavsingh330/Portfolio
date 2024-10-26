import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">[Abhinav Singh]</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link as={Link} to="/education">Educational Background</Nav.Link>
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/publications">Paper/Patent Publications</Nav.Link>
                <Nav.Link as={Link} to="/awards">Awards and Achievements</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/membership">Membership</Nav.Link>
                <Nav.Link as={Link} to="/research">Research Thrust Area</Nav.Link>
                <Nav.Link as={Link} to="/events">List of Events</Nav.Link>
                <Nav.Link as={Link} to="/presentations">Poster/Paper Presentation</Nav.Link>
                <Nav.Link as={Link} to="/courses">Courses Completed</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/address">Address</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;
